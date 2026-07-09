import { PROFESSIONAL_PROJECTS } from "@/data/projects";

type Props = {
  project: (typeof PROFESSIONAL_PROJECTS)[number];
};

export const ProjectCard = ({ project }: Props) => {
  return (
    <article className="rounded-lg border border-zinc-200 p-5 transition hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900/50">
      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
        {project.domain}
      </p>
      <h2 className="mt-1 text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        {project.title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
        {project.summary}
      </p>

      <ul className="mt-4 list-disc space-y-2 pl-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
        {project.capabilities.map((capability) => (
          <li key={capability}>{capability}</li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};
