interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface FreeformViewProps {
  projects: Project[];
}

export default function FreeformView({ projects }: FreeformViewProps) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
      {projects.map((p) => (
        <div
          key={p.id}
          className="break-inside-avoid mb-6 bg-white rounded-lg shadow p-4 flex flex-col items-center text-center"
        >
          <img src={p.image} className="rounded mb-3" />
          <h3 className="text-xl font-semibold">{p.title}</h3>
          <p className="opacity-70">{p.description}</p>
        </div>
      ))}
    </div>
  );
}
