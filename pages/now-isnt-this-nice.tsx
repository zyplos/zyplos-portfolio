import Fullscreen from "@/components/Fullscreen";
import Head from "next/head";
import img from "@/assets/now-isnt-this-nice.jpg";

export default function StatuePage() {
	return (
		<>
			<Head>
				<title>⬤</title>
			</Head>
			<Fullscreen
				style={{
					backgroundColor: "#b6cde6",
					userSelect: "none",
					padding: "3rem",
				}}
			>
				<img src={img.src} alt="Now isn't this nice?" />
			</Fullscreen>
		</>
	);
}
