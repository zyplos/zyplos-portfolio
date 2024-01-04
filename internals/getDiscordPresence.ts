import { Activity, Client, ClientPresenceStatus, GatewayIntentBits, Presence } from "discord.js";

const allowedGames = [
  "visual studio code",
  "visual studio",
  "code",
  "sublime text",
  "adobe illustrator",
  "adobe photoshop",
  "adobe xd",
  "adobe dimension",
  "adobe after effects",
  "vim",
  "neovim",
  "blender",
  "autodesk 3ds max",
  "aseprite",
  "intellij idea ultimate",
  "intellij idea community",
  "phpstorm",
  "jetbrains ide",
];

const DISCORD_ID = "204620732259368960";
const GUILD_ID = "839432085856583730"; // README badge discord

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
  status: ClientPresenceStatus | "offline";
  presence: RefinedPresenceData | Falsy;
};

function getUserStatus(presence: Presence) {
  const statuses = presence.clientStatus;
  if (!statuses) {
    return "offline";
  }

  const status = statuses.desktop || statuses.web || statuses.mobile;

  if (!status) {
    return "offline";
  }

  return status;
}

function getMainActivityText(activities: Activity[]): RefinedPresenceData | null {
  const playingRichGame = activities.find((e) => allowedGames.includes(e.name.toLowerCase()) && (e.details || e.state));
  const playingGame = activities.find((e) => allowedGames.includes(e.name.toLowerCase()) && !e.details && !e.state);

  if (playingRichGame) {
    return {
      type: "rich",
      name: playingRichGame.name,
      details: playingRichGame.details,
      state: playingRichGame.state,
      largeImageUrl: playingRichGame.assets?.largeImageURL(),
      largeImageAlt: playingRichGame.assets?.largeText,
      smallImageUrl: playingRichGame.assets?.smallImageURL(),
      smallImageAlt: playingRichGame.assets?.smallText,
    };
  }

  if (playingGame) {
    return {
      type: "game",
      name: playingGame.name,
      details: null,
      state: null,
      largeImageUrl: null,
      largeImageAlt: null,
      smallImageUrl: null,
      smallImageAlt: null,
    };
  }

  return null;
}

export default async function getDiscordPresence(): Promise<UserStatusData> {
  console.log("Fetching Discord presence...");
  try {
    const client = new Client({
      intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildPresences],
    });

    await client.login(process.env.DISCORD_BOT_TOKEN);

    const guild = await client.guilds.fetch(GUILD_ID);
    const member = await guild.members.fetch({
      user: DISCORD_ID,
      cache: false,
      force: true,
    });
    await client.destroy();

    const presence = member.presence;
    if (!presence) {
      return {
        message: "nope",
        status: "offline",
        presence: null,
      };
    }

    const activities = presence.activities;

    const userStatus = getUserStatus(presence);
    const mainActivityText = getMainActivityText(activities);

    if (!mainActivityText) {
      return {
        message: "nope",
        status: "offline",
        presence: null,
      };
    }

    return {
      message: "hey!",
      status: userStatus,
      presence: mainActivityText,
    };
  } catch (error) {
    console.error(error);
    return {
      message: "nope",
      status: "offline",
      presence: null,
    };
  }
}
