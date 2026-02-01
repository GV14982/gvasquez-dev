// @ts-check
import { defineConfig } from "astro/config";
import rehypeSlug from "rehype-slug";
import rehypeHeadingLinks from "rehype-autolink-headings";
import { remarkReadingTime } from "./reading-time.mjs"

// https://astro.build/config
export default defineConfig({
  site: "https://gvasquez.dev",
  markdown: {
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
  }
});
