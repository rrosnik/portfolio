import { useGSAP } from "@gsap/react";
import TechIcon from "../components/models/TechLogos/TechIcon";
import TitleHeader from "../components/TitleHeader";
import { techStackIcons } from "../constants";
import { allSkills } from "../constants/skills";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const skillCategories: { title: string; skills: SkillName[] }[] = [
  {
    title: "Frontend",
    skills: [
      "nextjs",
      "react-router",
      "vite",
      "tailwindcss",
      "shadcn",
      "radix",
      "typescript",
      "html",
      "zustand",
      "recharts",
      "three.js",
      "web-ifc",
    ],
  },
  {
    title: "Backend",
    skills: [
      "express",
      "drizzle",
      "neon",
      "postgresql",
      "trpc",
      "tanstack-query",
      "inngest",
      "resend",
    ],
  },
  {
    title: "Real-Time & Collaboration",
    skills: ["liveblocks", "convex", "stream", "tiptap"],
  },
  {
    title: "Auth & Security",
    skills: ["clerk", "jwt", "arcjet", "better-auth"],
  },
  {
    title: "DevOps & Testing",
    skills: ["docker", "eslint", "jest", "prettier", "zod", "dotenv", "nodemon"],
  },
];

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      },
    );

    gsap.fromTo(
      ".skill-chip",
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.inOut",
        stagger: 0.03,
        scrollTrigger: {
          trigger: ".skill-chip",
          start: "top 80%",
        },
      },
    );
  }, []);

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Preferred Tech Stack"
          sub="🤝 The Skills I bring to the Table"
        />

        <div className="tech-grid">
          {techStackIcons.map((icon) => (
            <div
              key={icon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg relative"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIcon model={icon} />
                </div>
                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-10">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white-50">
                {category.title}
              </p>
              <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8">
                {category.skills.map((name) => {
                  const skill = allSkills[name];
                  const iconSrc =
                    typeof skill.icon === "string"
                      ? skill.icon
                      : skill.icon.dark;
                  return (
                    <a
                      key={name}
                      href={skill.homePage}
                      target="_blank"
                      rel="noreferrer"
                      className="skill-chip card-border flex flex-col items-center justify-center gap-3 rounded-xl p-4 transition-colors hover:border-white-50/50"
                    >
                      <img
                        src={iconSrc}
                        alt={skill.label}
                        className="size-8 object-contain md:size-10"
                      />
                      <p className="text-center text-xs text-white-50 md:text-sm">
                        {skill.label}
                      </p>
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
