import { withContentlayer } from "next-contentlayer2";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

export default withContentlayer(nextConfig);
