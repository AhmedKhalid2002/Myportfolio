export default function ProjectSkeleton() {
  return (
    <div className="max-w-4xl mx-auto py-24 px-6 animate-pulse">
      <div className="h-8 bg-slate-300 dark:bg-slate-800 rounded w-1/3 mb-6"></div>
      <div className="h-64 bg-slate-300 dark:bg-slate-800 rounded-xl mb-8"></div>
      <div className="space-y-4">
        <div className="h-4 bg-slate-300 dark:bg-slate-800 rounded w-full"></div>
        <div className="h-4 bg-slate-300 dark:bg-slate-800 rounded w-5/6"></div>
        <div className="h-4 bg-slate-300 dark:bg-slate-800 rounded w-2/3"></div>
      </div>
    </div>
  );
}