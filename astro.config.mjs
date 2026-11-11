// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import rehypeSlug from "rehype-slug";
import rehypeHeadingLinks from "rehype-autolink-headings";
import { remarkReadingTime } from "./reading-time.mjs"
import { unified } from "@astrojs/markdown-remark";

// https://astro.build/config
export default defineConfig({
  site: "https://gvasquez.dev",
  fonts: [{
    provider: fontProviders.local(),
    name: "Maple Mono NF",
    cssVariable: "--font-maple-mono-nf",
    options: {
      variants: [
        {
          src: ["./src/assets/fonts/maple-mono/MapleMono-Thin.woff2"],
          weight: 100,
          style: "normal"
        },
        {
          src: ["./src/assets/fonts/maple-mono/MapleMono-ThinItalic.woff2"],
          weight: 100,
          style: "italic"
        },
        {
          src: ["./src/assets/fonts/maple-mono/MapleMono-ExtraLight.woff2"],
          weight: 200,
          style: "normal"
        },
        {
          src: ["./src/assets/fonts/maple-mono/MapleMono-ExtraLightItalic.woff2"],
          weight: 200,
          style: "italic"
        },
        {
          src: ["./src/assets/fonts/maple-mono/MapleMono-Light.woff2"],
          weight: 300,
          style: "normal"
        },
        {
          src: ["./src/assets/fonts/maple-mono/MapleMono-LightItalic.woff2"],
          weight: 300,
          style: "italic"
        },
        {
          src: ["./src/assets/fonts/maple-mono/MapleMono-Medium.woff2"],
          weight: 400,
          style: "normal"
        },
        {
          src: ["./src/assets/fonts/maple-mono/MapleMono-MediumItalic.woff2"],
          weight: 400,
          style: "italic"
        },
        {
          src: ["./src/assets/fonts/maple-mono/MapleMono-Regular.woff2"],
          weight: 500,
          style: "normal"
        },
        {
          src: ["./src/assets/fonts/maple-mono/MapleMono-Italic.woff2"],
          weight: 500,
          style: "italic"
        },
        {
          src: ["./src/assets/fonts/maple-mono/MapleMono-SemiBold.woff2"],
          weight: 600,
          style: "normal"
        },
        {
          src: ["./src/assets/fonts/maple-mono/MapleMono-SemiBoldItalic.woff2"],
          weight: 600,
          style: "italic"
        },
        {
          src: ["./src/assets/fonts/maple-mono/MapleMono-Bold.woff2"],
          weight: 700,
          style: "normal"
        },
        {
          src: ["./src/assets/fonts/maple-mono/MapleMono-BoldItalic.woff2"],
          weight: 700,
          style: "italic"
        },
        {
          src: ["./src/assets/fonts/maple-mono/MapleMono-ExtraBold.woff2"],
          weight: 800,
          style: "normal"
        },
        {
          src: ["./src/assets/fonts/maple-mono/MapleMono-ExtraBoldItalic.woff2"],
          weight: 800,
          style: "italic"
        },
      ]
    }
  }],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkReadingTime],
      rehypePlugins: [
        rehypeSlug,
        [rehypeHeadingLinks, {
          behavior: 'prepend',
          content: {
            type: 'text',
            value: '# ',
          },
        }]
      ]
    })
  }
});
