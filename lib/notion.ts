import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function getPosts() {
  return await notion.search({
    filter: {
      property: "object",
      value: "page",
    },
  });
}

export async function getPostBySlug(slug: string) {
  const response: any = await getPosts();

  return response.results.find((post: any) => {
    const postSlug =
      post.properties?.Slug?.rich_text?.[0]?.plain_text;

    return postSlug === slug;
  });
}