/** @format */

// next.config.ts
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "aceternity.com" },
      { protocol: "https", hostname: "gomoonbeam.com" },
      { protocol: "https", hostname: "cursor.so" },
      { protocol: "https", hostname: "userogue.com" },
      { protocol: "https", hostname: "editorially.org" },
      { protocol: "https", hostname: "editrix.ai" },
      { protocol: "https", hostname: "app.pixelperfect.quest" },
      { protocol: "https", hostname: "algochurn.com" },
      { protocol: "https", hostname: "ui.aceternity.com" },
      { protocol: "https", hostname: "tailwindmasterkit.com" },
      { protocol: "https", hostname: "smartbridgetech.com" },
      { protocol: "https", hostname: "renderwork.studio" },
      { protocol: "https", hostname: "cremedigital.com" },
      { protocol: "https", hostname: "goldenbellsacademy.com" },
      { protocol: "https", hostname: "invoker.lol" },
      { protocol: "https", hostname: "efreeinvoice.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "randomuser.me" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
