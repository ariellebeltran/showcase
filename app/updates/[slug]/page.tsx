import { getPostBySlug } from "@/lib/notion";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  const post: any = await getPostBySlug(slug);

  if (!post) {
    return (
      <main className="p-8">
        <h1>Post not found</h1>
      </main>
    );
  }

  const title = post.properties?.Title?.title?.[0]?.plain_text || "Untitled";

  const excerpt = post.properties?.Excerpt?.rich_text?.[0]?.plain_text || "";

  const date =
    post.properties?.Date?.date?.start || post.created_time?.split("T")[0];

  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-5xl font-bold mb-4">{title}</h1>

      <p className="opacity-50 mb-6">{date}</p>

      <p className="text-lg">{excerpt}</p>
    </main>
  );
}
