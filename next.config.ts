import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SVG placeholder milik sendiri (avatar + dokumentasi galeri) disajikan lewat next/image
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
  },
};

export default nextConfig;
