export const projects: ProjectData = {
  "lounge-hub": {
    title: "lounge-hub",
    description: "community site for my minecraft stuff",
    githubLink: "https://github.com/Zyplos/lounge-hub",
    liveLink: "https://lounge.haus",
    featured: true,
  },
  "github-projectspace-tracker": {
    title: "github-projectspace-tracker",
    description: "A small tool for tracking GitHub project space usage",
    githubLink: "https://github.com/Zyplos/github-projectspace-tracker",
    featured: true,
  },
  "discord-readme-badge": {
    title: "discord-readme-badge",
    description: "Show whatever you're working on through your GitHub readme",
    githubLink: "https://github.com/Zyplos/discord-readme-badge",
    featured: true,
  },
  myimages: {
    title: "myimages.zip",
    description: "some of my images that i really like",
    githubLink: "https://github.com/Zyplos/myimages.zip",
    liveLink: "https://myimages.zip",
    featured: true,
  },
  altaria: {
    title: "altaria",
    description: "A tiny Bluesky client for ComputerCraft/CC: Tweaked",
    githubLink: "https://github.com/Zyplos/altaria",
  },
  "maestro-discord": {
    title: "maestro-discord",
    description: "No nonsense moderation Discord bot",
    githubLink: "https://github.com/Zyplos/maestro-discord",
  },
  loungecommuna: {
    title: "LoungeCommuna",
    description: "Minecraft plugin for simple land claims",
    githubLink: "https://github.com/Zyplos/LoungeCommuna",
  },
  "lounge-new-world": {
    title: "LoungeNewWorld",
    description: "Simple Minecraft plugin for new playthroughs on the same world",
    githubLink: "https://github.com/Zyplos/LoungeNewWorld",
  },
  "guild-experiments-lister": {
    title: "Guild Experiments Lister",
    description: "Small tool for listing Discord guild experiments you're in",
    githubLink: "https://github.com/Zyplos/guild-experiments-lister",
    liveLink: "https://guild-experiments-lister.vercel.app/",
  },
  codetyper: {
    title: "codetyper",
    description: "cool looking screensaver",
    githubLink: "https://github.com/Zyplos/codetyper",
    liveLink: "https://zyplos.github.io/codetyper/",
  },
};

export const archivedProjects: ArchivedProjectData = {
  terrariadiscord: {
    title: "TerrariaDiscord",
    description: "Simple TShock plugin that listens to Terraria player chat and posts it to a discord webhook.",
    githubLink: "https://github.com/Zyplos/TerrariaDiscord",
    date: "Fall 2019",
  },
  "discord-mcserver-status": {
    title: "discord-mcserver-status",
    description: "A simple Discord bot that shows your Minecraft server info.",
    githubLink: "https://github.com/Zyplos/discord-mcserver-status",
    date: "Summer 2018",
  },
  shadesofred: {
    title: "shadeofred",
    description: "Generates random shades of red",
    githubLink: "https://github.com/Zyplos/shadeofred",
    date: "Summer 2018",
  },
};

export type Project = {
  title: string;
  description: string;
  githubLink: string;
  liveLink?: string;
  featured?: boolean;
};

export type ProjectData = {
  [key: string]: Project;
};

export type ArchivedProject = Project & {
  date: string;
};

export type ArchivedProjectData = {
  [key: string]: ArchivedProject;
};
