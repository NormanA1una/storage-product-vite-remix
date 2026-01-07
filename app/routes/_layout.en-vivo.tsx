// Route disabled - can be re-enabled in the future
// To re-enable: uncomment this file and add "En vivo" back to NAV_PATHNAMES in _layout.tsx

/*
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { LivePage } from "~/layouts/live";

export const loader: LoaderFunction = async () => {
  // Get the hostname from environment variable, fallback to empty string
  // The client-side code will use window.location.hostname if this is not set
  const TWITCH_PARENT_HOST = process.env.TWITCH_PARENT_HOST || "";
  return json({ twitchParentHost: TWITCH_PARENT_HOST });
};

export default function EnVivo() {
  const { twitchParentHost } = useLoaderData<typeof loader>();
  return <LivePage twitchParentHost={twitchParentHost} />;
}
*/
