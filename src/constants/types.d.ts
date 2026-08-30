declare global {
  type ExternalUrl = `https://${string}`;
  type SkillName = (typeof import("./skills").skillNames)[number];
  type SkillData = {
    label: string;
    icon:
      | {
          dark: string;
          light: string;
        }
      | string;
    homePage: ExternalUrl;
  };

  type PortfolioProject = {
    label: string;
    description: string;
    imageUrl: string;
    images?: string[];
    skills: SkillName[];
    category: string;
    github?: ExternalUrl;
    liveDemo?: ExternalUrl;
    /** Shown when github/liveDemo are omitted, e.g. for closed-source client/employer work. */
    accessNote?: string;
  };
}

export {};
