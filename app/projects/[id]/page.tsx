import { notFound } from 'next/navigation';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolioData';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const project = portfolioData.projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen py-24 px-6 max-w-4xl mx-auto">
      <Link 
        href="/#works" 
        className="inline-flex items-center text-sm font-medium text-rose-500 mb-8 hover:underline"
      >
        &larr; Back to Portfolio
      </Link>

      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">{project.title}</h1>
      <div className="flex gap-2 mb-8">
        <span className="px-3 py-1 text-xs font-semibold bg-rose-600/10 text-rose-500 rounded-full border border-rose-500/20">
          {project.category}
        </span>
      </div>

      {/* Main Preview Container */}
      <div className="w-full h-80 md:h-[400px] bg-zinc-800 rounded-2xl mb-12 flex items-center justify-center text-zinc-500 text-lg border border-zinc-800">
        [Main Showcase Banner Image for {project.title}]
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-zinc-200">Overview</h2>
          <p className="text-slate-600 dark:text-zinc-400 leading-relaxed mb-6 whitespace-pre-line">
            {project.longDescription}
          </p>

          <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-zinc-200">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-zinc-400">
            {project.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl border border-slate-100 dark:border-zinc-800">
            <h3 className="text-lg font-bold mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs bg-slate-100 dark:bg-zinc-800 rounded-md font-medium text-slate-700 dark:text-zinc-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noreferrer" className="w-full text-center py-3 bg-rose-600 text-white rounded-md font-medium hover:bg-rose-700 transition">
                Launch Live Application
              </a>
            )}
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noreferrer" className="w-full text-center py-3 border border-zinc-300 dark:border-zinc-700 rounded-md font-medium hover:bg-zinc-800 transition">
                View Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}