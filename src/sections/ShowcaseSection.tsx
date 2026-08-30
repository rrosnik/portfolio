import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../constants";
import { cn } from "../lib/utils";
import { allSkills } from "../constants/skills";
import ProjectGallery from "../components/ProjectGallery";

gsap.registerPlugin(ScrollTrigger);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
    />
  </svg>
);

const LockIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    className={className}
  >
    <rect x="4.5" y="10.5" width="15" height="9" rx="1.5" />
    <path strokeLinecap="round" d="M7.5 10.5V7a4.5 4.5 0 0 1 9 0v3.5" />
  </svg>
);

const ExpandIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
    />
  </svg>
);

const FALLBACK_PROJECT_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='225' viewBox='0 0 400 225'%3E%3Crect width='400' height='225' fill='%230e0e10'/%3E%3Ctext x='50%25' y='50%25' fill='%23d9ecff' font-family='sans-serif' font-size='16' text-anchor='middle' dominant-baseline='middle'%3EPreview coming soon%3C/text%3E%3C/svg%3E";

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const [galleryProject, setGalleryProject] = useState<PortfolioProject | null>(
    null,
  );

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      },
    );

    gsap.utils.toArray<HTMLElement>(".project-card").forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: "3rem",
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        },
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3  gap-20">
          {projects.map((project) => (
            <div
              key={project.label}
              className={cn(
                "project-card rounded-xl overflow-hidden flex flex-col gap-2 relative",
                // index === 0 && "col-span-2 row-span-2",
              )}
            >
              <button
                type="button"
                onClick={() => setGalleryProject(project)}
                aria-label={`View ${project.label} gallery`}
                className="group relative block w-full cursor-pointer appearance-none overflow-hidden rounded-xl border-0 bg-transparent p-0 text-left"
              >
                <img
                  className="aspect-video rounded-xl object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  src={project.imageUrl}
                  alt={project.label}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = FALLBACK_PROJECT_IMAGE;
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                  <ExpandIcon className="size-8 text-white" />
                </div>
                {project.accessNote && (
                  <span
                    title={project.accessNote}
                    className="absolute left-2 top-2 flex items-center gap-1.5 rounded-full bg-black-100/90 px-3 py-1.5 text-xs font-semibold text-white-50 backdrop-blur-sm"
                  >
                    <LockIcon className="size-3.5" />
                    Private / NRC Internal
                  </span>
                )}
              </button>
              <div className="flex flex-wrap gap-2 bottom-2 left-2 bg-white/40 p-2 rounded-2xl w-full">
                {project.skills.map((s) => {
                  const skill = allSkills[s];
                  return (
                    <a key={s} href={skill.homePage} target="_blank">
                      <img
                        title={skill.label}
                        src={
                          typeof skill.icon === "string"
                            ? skill.icon
                            : skill.icon.dark
                        }
                        alt={skill.label}
                        className="aspect-square size-7 cursor-pointer hover:scale-110"
                      />
                    </a>
                  );
                })}
              </div>
              <h2 className="font-bold">{project.label}</h2>
              <div className="flex flex-wrap items-center gap-3">
                {project.liveDemo ? (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full bg-white-50 px-4 py-2 text-sm font-semibold text-black-100 transition-transform hover:scale-105"
                  >
                    <ExternalLinkIcon className="size-4" />
                    Live Demo
                  </a>
                ) : (
                  <span
                    title={project.accessNote ?? "Live demo not available."}
                    className="flex cursor-not-allowed items-center gap-2 rounded-full border border-dashed border-white-50/30 px-4 py-2 text-sm font-semibold text-white-50/40"
                  >
                    <ExternalLinkIcon className="size-4" />
                    No Live Demo
                  </span>
                )}
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full border-2 border-white-50 px-4 py-2 text-sm font-semibold text-white-50 transition-colors hover:bg-white-50 hover:text-black-100"
                  >
                    <GithubIcon className="size-4" />
                    Code
                  </a>
                ) : (
                  <span
                    title={
                      project.accessNote ??
                      "Source code is not publicly available."
                    }
                    className="flex cursor-not-allowed items-center gap-2 rounded-full border border-dashed border-white-50/30 px-4 py-2 text-sm font-semibold text-white-50/40"
                  >
                    <LockIcon className="size-4" />
                    Private
                  </span>
                )}
              </div>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      {galleryProject && (
        <ProjectGallery
          label={galleryProject.label}
          images={
            galleryProject.images && galleryProject.images.length > 0
              ? galleryProject.images
              : [galleryProject.imageUrl]
          }
          onClose={() => setGalleryProject(null)}
        />
      )}
    </section>
  );
};

export default ShowcaseSection;
