interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface GridViewProps {
  projects: Project[];
}

export default function GridView({ projects }: GridViewProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p) => (
        <div
          key={p.id}
          className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center"
        >
          <img
            src={p.image}
            className="rounded mb-3"
            style={{ textAlign: "center" }}
          />
          <h3 className="text-xl font-semibold">{p.title}</h3>
          <p className="opacity-70">{p.description}</p>
        </div>
      ))}
    </div>
  );
}
