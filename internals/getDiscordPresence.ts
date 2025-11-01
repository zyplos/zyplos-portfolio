import { cacheLife } from "next/cache";

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
  "use cache";
  cacheLife({
    stale: 60 * 2,
    revalidate: 60 * 1,
    expire: 60 * 5,
  });

  if (process.env.NODE_ENV === "development") {
    return {
      message: "hey!",
      status: "online",
      presence: {
        type: "rich",
        name: "Visual Studio Code",
        details: "Editing DEV_MODE.tsx",
        state: "Workspace: zyplos-portfolio",
        largeImageUrl:
          "https://cdn.discordapp.com/app-assets/383226320970055681/1359299426262319284.png",
        largeImageAlt: "Editing a TSX file",
        smallImageUrl:
          "https://cdn.discordapp.com/app-assets/383226320970055681/1359299466493956258.png",
        smallImageAlt: "Visual Studio Code",
      },
    };
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    const response = await fetch(
      "https://mm.zyplos.dev/dcs/api/v1/status/discord/zyplos",
      {
        signal: controller.signal,
      },
    );

    clearTimeout(timeoutId);
    const presenceData: UserStatusData = await response.json();
    return presenceData;
  } catch (_error) {
    return {
      message: "oops",
      status: "offline",
      presence: null,
    };
  }
}
