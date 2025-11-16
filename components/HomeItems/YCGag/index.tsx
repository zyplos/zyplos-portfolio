import { HomeCard } from "../HomeCard";
import YCombinator from "@/components/Logos/YCombinator";

export default function YCGag() {
  return (
    <HomeCard center gap="xs">
      <p className={"textMuted"}>I did not apply to</p>
      <YCombinator />
    </HomeCard>
  );
}
