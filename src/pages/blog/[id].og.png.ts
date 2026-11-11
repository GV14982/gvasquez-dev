import type { APIRoute, GetStaticPaths, InferGetStaticPropsType } from "astro";
import { getCollection } from "astro:content";
import { NodeCompiler } from "@myriaddreamin/typst-ts-node-compiler"
import sharp from "sharp"

const typst = NodeCompiler.create({
  fontArgs: [
    { fontPaths: ["src/assets/fonts/maple-mono"] },
  ]
})

export const getStaticPaths = (async () => {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { id: post.id },
    props: { title: post.data.title, summary: post.data.summary },
  }));
}) satisfies GetStaticPaths;

type Props = InferGetStaticPropsType<typeof getStaticPaths>;

export const GET = (async ({ props }) => {
  const svg = typst.svg({
    mainFileContent: `#set page(width: 1100pt, height: 630pt, margin: 80pt, fill: rgb("#c6a0f6"))
#set text(font: "Maple Mono NF", fill: rgb("#363a4f"), lang: "no")
#let title = sys.inputs.at("title", default: "")
#let summary = sys.inputs.at("summary", default: "")
#grid(
  rows: (auto, 1fr, auto),
  text(size: 48pt, repeat("ʕ◕ᴥ◕ʔ")),
  align(left + horizon, {
    text(
      size: if title.len() > 70 { 60pt } else { 72pt },
      weight: 800,
      title,
    )
  }),
  text(size: 36pt, summary),
)`,
    inputs: {
      title: props.title,
      summary: props.summary
    }
  })
  const png = await sharp(Buffer.from(svg)).resize(500).png().toBuffer()
  return new Response(Buffer.from(png), {
    headers: {
      "content-type": "image/png"
    }
  });
}) satisfies APIRoute<Props>;
