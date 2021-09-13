const withMDX = require("@next/mdx")();
const basePath = process.env.BASE_PATH;

/** @type {import('next').NextConfig} */
module.exports = withMDX({
  reactStrictMode: true,
  ...(basePath && {
    basePath,
  }),
});
