import path from "node:path";
import { writeFileSync } from "node:fs";
import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer2/source-files";
import {
  remarkExtractFrontmatter,
  remarkCodeTitles,
  remarkImgToJsx,
  extractTocHeadings,
} from "pliny/mdx-plugins/index.js";
import { slug } from "github-slugger";
import remarkGfm from "remark-gfm";
import { remarkAlert } from "remark-github-blockquote-alert";
import rehypeSlug from "rehype-slug";
import rehypeCitation from "rehype-citation";
import rehypePrismPlus from "rehype-prism-plus";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import type { Blog as BlogType } from "contentlayer/generated";
import blogMatedata from "./config/blogMatedata";
import { allCoreContent, sortPosts } from "pliny/utils/contentlayer.js";

const root = process.cwd();
const isProduction = process.env.NODE_ENV === "production";

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, ""),
  },
  path: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath,
  },
  toc: { type: "string", resolve: (doc) => extractTocHeadings(doc.body.raw) },
};

/**
 * Count the occurrences of all tags across blog posts and write to json file
 */
function createTagCount(allBlogs: BlogType[]) {
  const tagCount: Record<string, number> = {};
  allBlogs.forEach((file) => {
    if (file.tags && (!isProduction || file.draft !== true)) {
      file.tags.forEach((tag) => {
        const formattedTag = slug(tag);
        if (formattedTag in tagCount) {
          tagCount[formattedTag] += 1;
        } else {
          tagCount[formattedTag] = 1;
        }
      });
    }
  });
  writeFileSync("./src/tag-data.json", JSON.stringify(tagCount));
}

function createSearchIndex(allBlogs: BlogType[]) {
  if (
    blogMatedata?.search?.provider === "kbar" &&
    blogMatedata.search.kbarConfig.searchDocumentsPath
  ) {
    writeFileSync(
      `public/${path.basename(
        blogMatedata.search.kbarConfig.searchDocumentsPath
      )}`,
      JSON.stringify(allCoreContent(sortPosts(allBlogs)))
    );
    console.log("Local search index generated...");
  }
}

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "blog/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    tags: { type: "list", of: { type: "string" }, default: [] },
    lastmod: { type: "date" },
    draft: { type: "boolean" },
    summary: { type: "string" },
    images: { type: "json" },
    authors: { type: "list", of: { type: "string" } },
    layout: { type: "string" },
    bibliography: { type: "string" },
    canonicalUrl: { type: "string" },
  },
  computedFields: {
    ...computedFields,
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Blog],
  mdx: {
    cwd: process.cwd(),
    remarkPlugins: [
      remarkExtractFrontmatter,
      remarkGfm,
      remarkCodeTitles,
      // remarkMath,
      remarkImgToJsx,
      remarkAlert,
    ],
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
      [rehypeCitation, { path: path.join(root, "data") }],
      [rehypePrismPlus, { defaultLanguage: "js", ignoreMissing: true }],
    ],
  },
  onSuccess: async (importData) => {
    const { allBlogs } = await importData();
    createTagCount(allBlogs);
    createSearchIndex(allBlogs);
  },
});
