// 1. Import utilities from `astro:content`
import { defineCollection, reference } from "astro:content";
// 2. Import loader(s)
import { file, glob } from "astro/loaders";
// 3. Import Zod
import { z } from "astro/zod";
import { presentationLoader } from "./presentation-loader";

const linkSchema = z.object({
  name: z.string(),
  url: z.union([z.url(), z.string().startsWith("/"), z.string().startsWith("mailto:")]),
  rel: z.optional(z.string()),
  target: z.optional(z.string()),
})

// 4. Define your collection(s)
const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    pubDate: z.coerce.date(),
    editedDates: z.array(z.coerce.date()),
    categories: z.array(reference("categories")),
  }),
});

const categories = defineCollection({
  loader: glob({ base: "./src/content/categories", pattern: "*.json" }),
  schema: z.object({
    name: z.string(),
    background: z.string(),
    color: z.string(),
    related: z.array(reference("categories")),
  }),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "*.md" }),
  schema: z.object({
    name: z.string(),
    ordinal: z.int(),
  }),
});

const about = defineCollection({
  loader: file("./src/content/about.json"),
  schema: z.object({
    bio: z.string(),
    likes: z.array(z.string()),
    dislikes: z.array(z.string()),
    setup: z.array(z.string()),
  }),
});

const links = defineCollection({
  loader: file("./src/content/links.json"),
  schema: z.array(z.union([
    linkSchema, z.object({
      id: z.string(),
      name: z.string(),
      color: z.string(),
      links: z.array(linkSchema)
    })
  ])),
});

const presentations = defineCollection({
  loader: presentationLoader()
})

// 5. Export a single `collections` object to register your collection(s)
export const collections = { blog, categories, presentations, about, projects, links };
