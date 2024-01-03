import { Client, GatewayIntentBits } from "discord.js";

const DISCORD_ID = "204620732259368960";
const GUILD_ID = "839432085856583730"; // README badge discord

export type DiscordStatusData = {
  message: string;
};

export default async function getDiscordPresence() {
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
        message: "Not found",
      };
    }

    const activities = presence.activities;
    // TODO
  } catch (error) {
    console.error(error);
    return {
      message: "oops",
    };
  }
}
