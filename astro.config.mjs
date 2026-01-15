// @ts-check
import { defineConfig } from "astro/config";
import rehypeSlug from "rehype-slug";
import rehypeHeadingLinks from "rehype-autolink-headings";

// https://astro.build/config
export default defineConfig({
  site: "https://gvasquez.dev",
  markdown: {
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
