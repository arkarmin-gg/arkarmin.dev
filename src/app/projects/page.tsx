import { ProjectCard } from "../../components/project-card";
import { PROFESSIONAL_PROJECTS } from "@/data/projects";
import { generatePageMetadata } from "../seo";

export const metadata = generatePageMetadata({
  title: "Projects",
  description:
    "Selected AI, RAG, agentic workflow, payment, and backend systems built by Arkar Min.",
});

export default function Projects() {
  return (
    <section>
      <div className="mb-8">
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          selected systems
        </p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Projects
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-300">
          Production AI and backend systems spanning RAG, agent tools,
          multi-tenant SaaS, payments, real-time dispatch, and institutional
          workflows.
        </p>
      </div>

      <div role="list" className="space-y-5">
        {PROFESSIONAL_PROJECTS.map((project) => (
          <div role="listitem" key={project.title}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
