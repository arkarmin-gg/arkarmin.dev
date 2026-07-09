import Image from "next/image";
import Link from "next/link";
import { SOCIALS } from "../data/socials";
import { SocialLink } from "@/components/social-link";
import { LINKS } from "@/lib/constants";
import {
  EDUCATION,
  EXPERIENCE,
  HIGHLIGHTS,
  PROFILE,
  PROJECTS,
  TECHNICAL_SKILLS,
} from "@/data/portfolio";

export default function Home() {
  const selectedProjects = PROJECTS.slice(0, 3);

  return (
    <div className="space-y-14">
      <section>
        <div className="mb-6 flex items-center gap-4">
          <Image
            src="/_static/me.jpg"
            width={96}
            height={96}
            alt="Arkar Min"
            className="h-20 w-20 rounded-full object-cover transition hover:grayscale sm:h-24 sm:w-24"
            priority
          />
          <div>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              {PROFILE.role}
            </p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              {PROFILE.displayName}
            </h1>
          </div>
        </div>

        <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
          <p>{PROFILE.summary}</p>
          <p>{PROFILE.focus}</p>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          {HIGHLIGHTS.map((highlight) => (
            <div
              key={highlight.value}
              className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800"
            >
              <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                {highlight.value}
              </p>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                {highlight.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${PROFILE.email}`}
            className="border-b border-zinc-400 text-sm font-medium text-zinc-900 transition hover:border-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-100"
          >
            {PROFILE.email}
          </a>
          <a
            href={LINKS.RESUME}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-zinc-400 text-sm font-medium text-zinc-900 transition hover:border-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-100"
          >
            View Resume
          </a>
          <div className="flex items-center gap-3">
            {SOCIALS.map((social) => (
              <SocialLink
                key={social.label}
                aria-label={`Follow on ${social.label}`}
                href={social.href}
                icon={social.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              selected work
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight">
              Production AI and backend systems
            </h2>
          </div>
          <Link
            href="/projects"
            className="shrink-0 text-sm font-medium text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            View all
          </Link>
        </div>

        <div className="space-y-4">
          {selectedProjects.map((project) => (
            <article
              key={project.title}
              className="rounded-lg border border-zinc-200 p-5 dark:border-zinc-800"
            >
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {project.domain}
              </p>
              <h3 className="mt-1 font-semibold text-zinc-900 dark:text-zinc-50">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {project.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.slice(0, 6).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          technical focus
        </p>
        <h2 className="mt-1 text-2xl font-bold tracking-tight">
          Tools I use to ship AI products
        </h2>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {TECHNICAL_SKILLS.map((group) => (
            <div
              key={group.title}
              className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800"
            >
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                {group.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          experience
        </p>
        <h2 className="mt-1 text-2xl font-bold tracking-tight">
          Recent roles
        </h2>

        <div className="mt-5 space-y-6">
          {EXPERIENCE.map((job) => (
            <article
              key={job.company}
              className="border-l border-zinc-200 pl-4 dark:border-zinc-800"
            >
              <div className="flex flex-col justify-between gap-1 sm:flex-row">
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                    {job.company}
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {job.role} · {job.location}
                  </p>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {job.period}
                </p>
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-7 rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
          <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
            {EDUCATION.degree}
          </p>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            {EDUCATION.school} · {EDUCATION.period}
          </p>
        </div>
      </section>
    </div>
  );
}
