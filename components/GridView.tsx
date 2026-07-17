interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
  roles?: string[]; // ⭐ Add this if not already added
}

interface GridViewProps {
  projects: Project[];
}

export default function GridView({ projects }: GridViewProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p) => (
        <a
          key={p.id}
          href={p.link}
          rel="noopener noreferrer"
          className={`block ${p.link ? "cursor-pointer" : "cursor-default"}`}
        >
          <div
            className={`bg-white rounded-lg shadow p-4 flex flex-col items-center text-center ${
              p.link ? "hover:scale-[1.02] transition-transform" : ""
            }`}
          >
            <img
              src={p.image}
              className="rounded mb-3"
              style={{ textAlign: "center" }}
            />

            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="opacity-70">{p.description}</p>

            {/* ⭐ Related Roles go HERE */}
            {p.roles && (
              <div className="flex flex-wrap gap-2 mt-3">
                {p.roles.map((role) => (
                  <span
                    key={role}
                    className="px-2 py-1 text-xs bg-gray-200 rounded-md hover-staatliches"
                  >
                    {role}
                  </span>
                ))}
              </div>
            )}
          </div>
        </a>
      ))}
    </div>
  );
}
