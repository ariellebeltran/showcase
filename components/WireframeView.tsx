export default function WireframeView() {
  return (
    <div className="max-w-xl mx-auto p-8 border rounded-lg bg-white shadow-sm">
      <h1 className="text-3xl font-bold tracking-tight mb-2">
        Anne Beltran is an
      </h1>

      <h2 className="text-2xl font-bold mb-6">INTERDISCIPLINARY DESIGNER</h2>

      <div className="space-y-6">
        <div>
          <p className="font-semibold">UX/UI DESIGN</p>
          <div className="flex gap-2 mt-2">
            <div className="w-4 h-4 bg-black" />
            <div className="w-4 h-4 bg-black" />
            <div className="w-4 h-4 bg-black" />
            <div className="w-4 h-4 bg-black" />
          </div>
        </div>

        <div>
          <p className="font-semibold">GRAPHIC DESIGN</p>
          <div className="flex gap-2 mt-2">
            <div className="w-4 h-4 bg-black" />
            <div className="w-4 h-4 bg-black" />
            <div className="w-4 h-4 bg-black" />
          </div>
        </div>

        <div>
          <p className="font-semibold">WEB/MOBILE DEVELOPMENT</p>
          <div className="flex gap-2 mt-2">
            <div className="w-4 h-4 bg-black" />
            <div className="w-4 h-4 bg-black" />
          </div>
        </div>
      </div>
    </div>
  );
}
