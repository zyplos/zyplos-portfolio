import { HomeCard } from "../HomeCard";
import YCombinator from "@/components/Logos/YCombinator";

export default function YCGag() {
  return (
    <HomeCard center gap="s" padding="m">
      <p className="textMuted noWrap">I did not apply to</p>
      <YCombinator />
    </HomeCard>
  );
}
