import Image from "next/image";
import degImage from "@/assets/_deg.jpg";

export default function RamEXEPage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f6c670",
      }}
    >
      <Image src={degImage} alt="_deg.jpg" style={{ maxWidth: "100%", height: "auto" }} />
    </div>
  );
}
