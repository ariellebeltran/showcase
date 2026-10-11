import { getPosts } from "@/lib/notion";

export default async function LatestUpdateCard() {
  const response: any = await getPosts();

  const latestPost = response.results[0];

  if (!latestPost) {
    return <p className="text-lg opacity-70">No updates available.</p>;
  }

  const title =
    latestPost.properties?.Title?.title?.[0]?.plain_text || "Untitled";

  const excerpt =
    latestPost.properties?.Excerpt?.rich_text?.[0]?.plain_text ||
    "No excerpt yet.";

  const date =
    latestPost.properties?.Date?.date?.start ||
    latestPost.created_time?.split("T")[0];

  const slug =
    latestPost.properties?.Slug?.rich_text?.[0]?.plain_text || latestPost.id;

  return (
    <a href={`/updates/${slug}`}>
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-full bg-violet-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-700">
          Latest Update
        </span>

        <span className="text-sm text-slate-500">{date}</span>
      </div>

      <h3 className="mb-2 text-xl font-semibold">{title}</h3>

      <p className="text-slate-600">{excerpt}</p>
    </a>
  );
}
