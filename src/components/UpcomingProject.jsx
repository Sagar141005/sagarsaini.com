export default function UpcomingProject() {
  return (
    <div className="mt-16 space-y-8">
      <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
        Upcoming Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Project X */}
        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-zinc-900 p-5 hover:shadow-sm transition duration-300">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-100">
              Project X
            </h3>
            <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-300">
              In Progress
            </span>
          </div>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            A podcasting app with WebRTC and local high-quality video saving.
          </p>
        </div>

        {/* Project Y */}
        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-zinc-900 p-5 hover:shadow-sm transition duration-300">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-100">
              Project Y
            </h3>
            <span className="text-xs px-2 py-1 rounded-full bg-zinc-200 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-200">
              Upcoming
            </span>
          </div>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            A smart file converter (images, documents, background remover) with
            cloud support and AI integrations.
          </p>
        </div>
      </div>
    </div>
  );
}
