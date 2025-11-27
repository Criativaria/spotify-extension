import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // permite qualquer URL de imagem, desabilitando a otimização do Next.js
    unoptimized: true,
  },
};

export default nextConfig;
