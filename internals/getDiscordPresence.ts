type Falsy = null | undefined;
export type RefinedPresenceData = {
	type: "game" | "rich";
	name: string;
	details: string | Falsy;
	state: string | Falsy;
	largeImageUrl: string | Falsy;
	largeImageAlt: string | Falsy;
	smallImageUrl: string | Falsy;
	smallImageAlt: string | Falsy;
};
export type UserStatusData = {
	message: string;
	status: "online" | "idle" | "dnd" | "offline";
	presence: RefinedPresenceData | Falsy;
};

export default async function getDiscordPresence(): Promise<UserStatusData> {
	try {
		const response = await fetch(
			"https://mm.zyplos.dev/dcs/api/v1/status/discord/zyplos",
		);
		const presenceData: UserStatusData = await response.json();
		return presenceData;
	} catch (error) {
		return {
			message: "oops",
			status: "offline",
			presence: null,
		};
	}
}
