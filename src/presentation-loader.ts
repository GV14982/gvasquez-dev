import type { Loader } from 'astro/loaders';
import { z } from 'astro:schema';
import { lstatSync, readdirSync } from "fs"
import path from 'path';

export function presentationLoader() {
  return {
    name: "presentation-loader",
    load: async ({ store }) => {
      const filepath = "./public/presentations"
      readdirSync(filepath).forEach(f => {
        const p = path.join(filepath, f)
        if (lstatSync(p).isDirectory()) {
          readdirSync(p).filter(n => n.endsWith("pdf") || n.endsWith("html")).forEach(n => store.set({ id: n, data: { folder: f } }));
        }
      })
    },
    schema: z.object({
      folder: z.string()
    })
  } satisfies Loader;
}
