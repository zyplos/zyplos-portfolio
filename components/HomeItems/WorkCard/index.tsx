import clsx from "clsx";
import HomeCard from "../HomeCard";

interface WorkCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function WorkCard({ className, ...props }: WorkCardProps) {
  return (
    <HomeCard {...props} className={clsx("textContent", className)}>
      <h2>i'm looking for work!</h2>
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
