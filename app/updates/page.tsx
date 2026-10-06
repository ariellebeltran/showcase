import { getPosts } from "@/lib/notion";

function buildAiSummary(title: string, excerpt: string) {
  const text = `${title} ${excerpt}`.trim();

  if (!text) {
    return "AI summary is being generated for this update.";
  }

  const keywords = Array.from(
    new Set(
      text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, " ")
        .split(/\s+/)
        .filter((word) => word.length > 3)
        .slice(0, 4),
    ),
  );

  const focus = keywords.length > 0 ? keywords.join(", ") : "latest progress";

  return `AI insight: this update centers on ${focus}, highlighting the newest milestones and the thinking behind the work.`;
}

export default async function UpdatesPage() {
  const response: any = await getPosts();
  const posts = Array.isArray(response?.results) ? response.results : [];

  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <div className="mb-8">
        <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
          AI-powered updates
        </span>
        <h1 className="mt-4 text-4xl font-bold text-slate-900">Latest Updates</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Track the newest milestones and get a quick AI-assisted summary of what changed.
        </p>
      </div>

      <div className="grid gap-6">
        {posts.map((post: any) => {
          const title =
            post.properties?.Title?.title?.[0]?.plain_text || "Untitled";

          const excerpt =
            post.properties?.Excerpt?.rich_text?.[0]?.plain_text ||
            "No excerpt yet.";

          const date =
            post.properties?.Date?.date?.start ||
            post.created_time?.split("T")[0];

          const slug =
            post.properties?.Slug?.rich_text?.[0]?.plain_text || post.id;

          const aiSummary = buildAiSummary(title, excerpt);

          return (
            <a
              key={post.id}
              href={`/updates/${slug}`}
              className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="rounded-full bg-violet-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-700">
                  AI summary
                </span>
                <span className="text-sm text-slate-500">{date}</span>
              </div>

              <h2 className="mb-2 text-xl font-semibold text-slate-900">
                {title}
              </h2>

              <p className="text-slate-700">{excerpt}</p>

              <p className="mt-4 text-sm leading-6 text-slate-600">{aiSummary}</p>
            </a>
          );
        })}
      </div>
    </main>
  );
}
