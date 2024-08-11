import { withContentlayer } from "next-contentlayer2";
import path from "node:path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "~": path.resolve(__dirname, "src"),
    };
    return config;
  },
};

export default withContentlayer(nextConfig);
