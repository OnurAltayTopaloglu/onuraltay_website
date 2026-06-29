/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Fully static site → export plain HTML/CSS/JS (served by any static host,
  // e.g. Cloudflare Pages) with no server/edge runtime.
  output: "export",
  // Static export can't use the on-server image optimizer.
  images: { unoptimized: true },
};

export default nextConfig;
