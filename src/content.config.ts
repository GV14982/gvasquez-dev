// 1. Import utilities from `astro:content`
import { defineCollection, reference } from "astro:content";
// 2. Import loader(s)
import { glob, file } from "astro/loaders";
// 3. Import Zod
import { z } from "astro/zod";

// 4. Define your collection(s)
const blog = defineCollection({
  loader: glob({ base: "./src/blog", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    pubDate: z.coerce.date(),
    editedDates: z.array(z.coerce.date()),
    categories: z.array(reference("categories")),
  }),
});

const categories = defineCollection({
  loader: glob({ base: "./src/categories", pattern: "*.json" }),
  schema: z.object({
    name: z.string(),
    background: z.string(),
    color: z.string(),
    related: z.array(reference("categories")),
  }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { blog, categories };
