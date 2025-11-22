import { HomeCard } from "../HomeCard";
import YCombinator from "@/components/Logos/YCombinator";

export default function YCGag() {
  return (
    <HomeCard center gap="xs" padding="m">
      <p className={"textMuted"}>I did not apply to</p>
      <YCombinator />
    </HomeCard>
  );
}
