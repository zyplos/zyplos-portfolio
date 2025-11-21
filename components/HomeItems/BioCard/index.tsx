import clsx from "clsx";
import { HomeCard, type HomeCardProps } from "../HomeCard";

export default function BioCard({ className, ...props }: HomeCardProps) {
  return (
    <HomeCard {...props} className={clsx("textContent", className)}>
      <h1>programmer, designer</h1>
      <p>
        i'm a developer who's worked with the web and various other things for
        many years now
      </p>
      <p>
        i like spending my time making stuff and i'm always happy to learn
        something new. come see some of my stuff on this site
      </p>
    </HomeCard>
  );
}
