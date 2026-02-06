import { type APIContext } from "astro";
import rss from "@astrojs/rss";
import { getCollection, getEntries } from "astro:content";

export async function GET(context: APIContext) {
  const category = context.params.slug
  const posts = await getCollection("blog").then(posts => posts.filter(post => post.data.categories.find(c => c.id == category)))

  return rss({
    title: "Graham's lil blog",
    description: "Just random thoughts",
    site: context.site ?? "https://gvasquez.dev",
    items: await Promise.all(posts.map(async ({ id, rendered, data: { title, pubDate, summary, categories } }) => ({
      title,
      pubDate,
      description: summary,
      link: `/blog/${id}`,
      content: rendered?.html,
      categories: await getEntries(categories).then(c => c.map(category => category.data.name)),
    }))),
    customData: `<language>en-us</language>`,
  });
}

export async function getStaticPaths() {
  const categories = await getCollection("categories");
  return categories.map((category) => ({
    params: { slug: category.id },
  }));
}
