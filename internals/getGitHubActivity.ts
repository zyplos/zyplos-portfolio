import { cacheLife } from "next/cache";

interface GitHubActivity {
  repo: string;
  branch: string;
  timestamp: string;
  url: string;
  message: string;
}

interface APIError {
  message: string;
  code:
    | "EVENTS_FETCH_FAILED"
    | "NO_EVENTS"
    | "COMMIT_INFO_FETCH_FAILED"
    | "UNKNOWN";
}

interface ActivityEvent {
  type: string;
  repo: {
    name: string;
  };
  payload: {
    ref: string;
    head: string;
  };
}

const EVENTS_ENDPOINT = "https://api.github.com/users/zyplos/events";

const AUTH_HEADERS = {
  headers: {
    Authorization: `token ${process.env.GITHUB_TOKEN}`,
  },
};

export default async function getGitHubActivity(): Promise<
  GitHubActivity | APIError
> {
  "use cache";
  cacheLife("hours");

  if (process.env.NODE_ENV === "development") {
    return {
      repo: "zyplos/devspace",
      branch: "redesign",
      timestamp: "2025-11-03T06:08:33Z",
      url: "https://github.com/zyplos/zyplos-portfolio/commit/cfaf7e8eb3a71b5bea2effe6d3a042eb32e54f20",
      message:
        "added really good code to my thingie amongst other things that make this string even longer to test it overflowing its container",
    };

    // return {
    //   message: "no work",
    //   code: "COMMIT_INFO_FETCH_FAILED",
    // };
  }

  try {
    const eventsResponse = await fetch(EVENTS_ENDPOINT, AUTH_HEADERS);
    if (!eventsResponse.ok) {
      return {
        message: "Failed to fetch GitHub events",
        code: "EVENTS_FETCH_FAILED",
      };
    }
    const eventsResult: ActivityEvent[] = await eventsResponse.json();

    const pushEvent = eventsResult.find(
      (event): event is ActivityEvent => event.type === "PushEvent",
    );

    if (!pushEvent) {
      return { message: "No push events found", code: "NO_EVENTS" };
    }

    const commitInfoUrl = `https://api.github.com/repos/${pushEvent.repo.name}/commits/${pushEvent.payload.head}`;
    const commitInfoResponse = await fetch(commitInfoUrl, AUTH_HEADERS);

    if (!commitInfoResponse.ok) {
      return {
        message: "Failed to fetch commit info",
        code: "COMMIT_INFO_FETCH_FAILED",
      };
    }
    const commitInfoResult = await commitInfoResponse.json();

    return {
      repo: pushEvent.repo.name,
      branch: pushEvent.payload.ref.replace("refs/heads/", ""),
      timestamp: commitInfoResult.commit.author.date,
      url: commitInfoResult.html_url,
      message: commitInfoResult.commit.message,
    };
  } catch (error) {
    console.error("Unexpected error grabbing Github activity", error);
    return {
      message: "Unexpected error getting commit",
      code: "UNKNOWN",
    };
  }
}
