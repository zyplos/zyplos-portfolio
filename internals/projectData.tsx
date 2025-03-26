import type { StaticImageData } from "next/image";
import gemImg from "@/assets/projects/gem.png";
import pixelBaseImg from "@/assets/projects/pixel-base.png";
import clockImg from "@/assets/projects/clock.jpg";
import dailyRecapImg from "@/assets/projects/daily-recap.png";
import spotifyImg from "@/assets/projects/spotify.png";
import gestureSwitchImg from "@/assets/projects/gesture-switch.png";
import scoriaImg from "@/assets/projects/scoria.png";
import altariaImg from "@/assets/projects/altaria.png";
import maestroImg from "@/assets/projects/maestro.png";
import loungeCommunaImg from "@/assets/projects/loungecommuna.png";
import loungeNewWorldImg from "@/assets/projects/lounge-new-world.png";
import guildExperimentsListerImg from "@/assets/projects/guild-experiments-lister.png";

export const projects: ProjectData = {
	"lounge-hub": {
		title: "lounge-hub",
		description: "community site for my minecraft stuff",
		link: "https://github.com/Zyplos/lounge-hub",
		// liveLink: "https://lounge.haus",
		featured: true,
	},
	"github-projectspace-tracker": {
		title: "github-projectspace-tracker",
		description:
			"Get a quick overview of your team's GitHub project on Discord",
		link: "https://github.com/Zyplos/github-projectspace-tracker",
		featured: true,
	},
	"discord-readme-badge": {
		title: "discord-readme-badge",
		description: "Show whatever you're working on through your GitHub readme",
		link: "https://github.com/Zyplos/discord-readme-badge",
		featured: true,
	},
	myimages: {
		title: "myimages.zip",
		description: "some of my images that i really like",
		link: "https://github.com/Zyplos/myimages.zip",
		// liveLink: "https://myimages.zip",
		featured: true,
	},
	// normal cards
	gemCase: {
		title: "essential gem case",
		description:
			"i had to custom make a case for a phone that does not exist. made in blender and 3d printed",
		link: "https://www.printables.com/model/1244300-essential-gem-case",
		imagePreview: gemImg,
	},
	dailyRecap: {
		title: "daily-recap",
		description:
			"i keep a sort of journal thats designed to be visualized. take a peek",
		link: "https://twitter.com/search?q=(report%20OR%20recap%20OR%20schema)%20(from%3Azyplos)&src=typed_query&f=media",
		imagePreview: dailyRecapImg,
	},
	"pixel-base": {
		title: "Pixel Base",
		description:
			"some design work: a product concept with a small static site to showcase it",
		link: "https://pixelbase.zyplos.dev/",
		imagePreview: pixelBaseImg,
	},
	mcClock: {
		title: "MCClock",
		description: "a Wear OS 5 watchface made using Minecraft's Clock sprite",
		link: "https://github.com/Zyplos/MCClock/",
		imagePreview: clockImg,
	},
	"spotify-mapper": {
		title: "spotify.zyplos.dev",
		description: "My lifetime Spotify listening history, visualized.",
		link: "https://spotify.zyplos.dev/",
		imagePreview: spotifyImg,
	},
	GestureSwitch: {
		title: "GestureSwitch",
		description:
			"exploring gestures for controlling light switches with a watch",
		link: "https://github.com/Zyplos/GestureSwitch",
		imagePreview: gestureSwitchImg,
	},
	scoria: {
		title: "scoria",
		description: "An OLED/Pure Black VSCode theme with a bit of red",
		link: "https://github.com/Zyplos/scoria",
		imagePreview: scoriaImg,
	},
	altaria: {
		title: "altaria",
		description: "A tiny Bluesky client for ComputerCraft/CC: Tweaked",
		link: "https://github.com/Zyplos/altaria",
		imagePreview: altariaImg,
	},
	"maestro-discord": {
		title: "maestro-discord",
		description: "No nonsense moderation Discord bot",
		link: "https://github.com/Zyplos/maestro-discord",
		imagePreview: maestroImg,
	},
	loungecommuna: {
		title: "LoungeCommuna",
		description: "Minecraft plugin for simple land claims",
		link: "https://github.com/Zyplos/LoungeCommuna",
		imagePreview: loungeCommunaImg,
	},
	"lounge-new-world": {
		title: "LoungeNewWorld",
		description:
			"Simple Minecraft plugin for new playthroughs on the same world",
		link: "https://github.com/Zyplos/LoungeNewWorld",
		imagePreview: loungeNewWorldImg,
	},
	"guild-experiments-lister": {
		title: "guild-experiments-lister",
		description: "Small tool for listing Discord guild experiments you're in",
		link: "https://github.com/Zyplos/guild-experiments-lister",
		imagePreview: guildExperimentsListerImg,
	},
};

export const archivedProjects: ArchivedProjectData = {
	terrariadiscord: {
		title: "TerrariaDiscord",
		description:
			"Simple TShock plugin that listens to Terraria player chat and posts it to a Discord webhook.",
		link: "https://github.com/Zyplos/TerrariaDiscord",
		date: "Fall 2019",
	},
	"discord-mcserver-status": {
		title: "discord-mcserver-status",
		description: "A simple Discord bot that shows your Minecraft server info.",
		link: "https://github.com/Zyplos/discord-mcserver-status",
		date: "Summer 2018",
	},
	shadeofred: {
		title: "shadeofred",
		description: "Generates random shades of red",
		link: "https://github.com/Zyplos/shadeofred",
		date: "Summer 2018",
	},
	codetyper: {
		title: "codetyper",
		description: "nice looking screensaver that outputs random code",
		link: "https://github.com/Zyplos/codetyper",
		date: "Summer 2017",
	},
};

export type Project = {
	title: string;
	featured?: boolean;
	description: string;
	link?: string;
	// liveLink?: string;
	imagePreview?: StaticImageData;
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
