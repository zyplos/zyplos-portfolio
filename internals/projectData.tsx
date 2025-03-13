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
		description:
			"Get a quick overview of your team's GitHub project on Discord",
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
	// normal cards
	"pixel-base": {
		title: "Pixel Base",
		description:
			"some design work: a product concept with a small static site to showcase it",
		githubLink: "https://pixelbase.zyplos.dev/",
	},
	mcClock: {
		title: "MCClock",
		description: "a Wear OS 5 watchface made using Minecraft's Clock sprite",
		githubLink: "https://github.com/Zyplos/MCClock/",
	},
	"spotify-mapper": {
		title: "spotify.zyplos.dev",
		description: "My lifetime Spotify listening history, visualized.",
		githubLink: "https://spotify.zyplos.dev/",
	},
	GestureSwitch: {
		title: "GestureSwitch",
		description:
			"exploring gestures for controlling light switches with a watch",
		githubLink: "https://github.com/Zyplos/GestureSwitch",
	},
	scoria: {
		title: "scoria",
		description: "An OLED/Pure Black VSCode theme with a bit of red",
		githubLink: "https://github.com/Zyplos/scoria",
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
		title: "Lounge Communa",
		description: "Minecraft plugin for simple land claims",
		githubLink: "https://github.com/Zyplos/LoungeCommuna",
	},
	"lounge-new-world": {
		title: "Lounge New World",
		description:
			"Simple Minecraft plugin for new playthroughs on the same world",
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
		title: "Terraria Discord",
		description:
			"Simple TShock plugin that listens to Terraria player chat and posts it to a Discord webhook.",
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
