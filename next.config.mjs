/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  outputFileTracingExcludes: {
    "*": [
      "extracted_assets/**/*",
      "node_modules/@swc/core-win32-x64-msvc/**/*",
      "node_modules/@esbuild/win32-x64/**/*",
    ],
  },
};

export default nextConfig;
