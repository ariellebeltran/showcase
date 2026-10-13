import { getPostBySlug,  getPageBlocks } from "@/lib/notion";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  const post: any = await getPostBySlug(slug);
  const blocks = await getPageBlocks(post.id);

  if (!post) {
    return (
      <main className="p-8">
        <h1>Post not found</h1>
      </main>
    );
  }

  const title = post.properties?.Title?.title?.[0]?.plain_text || "Untitled";

  const excerpt = post.properties?.Excerpt?.rich_text?.[0]?.plain_text || "";

const rawDate =
  post.properties?.Date?.date?.start ||
  post.created_time?.split("T")[0];

const date = new Date(rawDate).toLocaleDateString(
  "en-US",
  {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
);
``

  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <a href="/" className="text-black-500 hover:text-gray-700 font-medium">
        ← Back
      </a>
      <h1 className="text-5xl font-bold mt-6 mb-4">{title}</h1>

      <p className="opacity-50 mb-6">{date}</p>

      <p className="text-lg">{excerpt}</p>

      <div className="prose max-w-none mt-8">
  {blocks.map((block: any) => {
    // Paragraphs
    if (block.type === "paragraph") {
      return (
        <p key={block.id}>
          {block.paragraph.rich_text
            .map((t: any) => t.plain_text)
            .join("")}
        </p>
      );
    }

    // Heading 1
    if (block.type === "heading_1") {
      return (
        <h1 key={block.id}>
          {block.heading_1.rich_text
            .map((t: any) => t.plain_text)
            .join("")}
        </h1>
      );
    }

    // Heading 2
    if (block.type === "heading_2") {
      return (
        <h2 key={block.id}>
          {block.heading_2.rich_text
            .map((t: any) => t.plain_text)
            .join("")}
        </h2>
      );
    }

    // Heading 3
    if (block.type === "heading_3") {
      return (
        <h3 key={block.id}>
          {block.heading_3.rich_text
            .map((t: any) => t.plain_text)
            .join("")}
        </h3>
      );
    }

    // Bullet List
    if (block.type === "bulleted_list_item") {
  return (
    <ul
      key={block.id}
      className="list-disc pl-6 my-2"
    >
      <li>
        {block.bulleted_list_item.rich_text
          .map((t: any) => t.plain_text)
          .join("")}
      </li>
    </ul>
  );
}

    // Numbered List
   if (block.type === "numbered_list_item") {
  return (
    <ol
      key={block.id}
      className="list-decimal pl-6 my-2"
    >
      <li>
        {block.numbered_list_item.rich_text
          .map((t: any) => t.plain_text)
          .join("")}
      </li>
    </ol>
  );
}

    // Quote
    if (block.type === "quote") {
      return (
        <blockquote key={block.id}>
          {block.quote.rich_text
            .map((t: any) => t.plain_text)
            .join("")}
        </blockquote>
      );
    }

    // Divider
    if (block.type === "divider") {
      return <hr key={block.id} />;
    }

    // Images
    if (block.type === "image") {
      const imageUrl =
        block.image.type === "external"
          ? block.image.external.url
          : block.image.file.url;

          const caption =
    block.image.caption
      ?.map((t: any) => t.plain_text)
      .join("") || "";
      
       return (
    <figure key={block.id} className="my-8">
      <img
        src={imageUrl}
        alt=""
        className="mx-auto my-6"
      />

      {caption && (
        <figcaption className="mt-2 text-center text-sm text-gray-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
    }

    return null;
  })}
</div>
    </main>
  );
}
