import MainLayout from "@/components/MainLayout";

import Card from "@/components/Card";

import styles from "@/styles/Clipboard.module.scss";
import classNames from "classnames";
import Head from "next/head";

import MAIN_COLOR_DATA_UNTYPED from "@/internals/colorData.json";

interface ColorData {
	name: string;
	// createdDate: number;
	// modifiedDate: number;
	hex: string;
	rgb: {
		r: number;
		g: number;
		b: number;
	};
}

interface ASCIIData {
	character: string;
	description: string;
}

const MAIN_COLOR_DATA: ColorData[] = MAIN_COLOR_DATA_UNTYPED;

const MAIN_ASCII_DATA: ASCIIData[] = [
	{
		character: "•",
		description: "separator",
	},
	{
		character: "🡺",
		description: "forward",
	},
	{
		character: "🡹",
		description: "upward",
	},
	{
		character: "🡽",
		description: "onward",
	},
	{
		character: "\u202A",
		description: "empty space",
	},
	{
		character: "\u00A7",
		description: "color code",
	},
];

type DynamicTextColor = "#000000" | "#ffffff";

// https://stackoverflow.com/a/3943023
function getDynamicTextColor(
	red: number,
	green: number,
	blue: number,
): DynamicTextColor {
	// originally 186
	const threshold = 175;
	if (red * 0.299 + green * 0.587 + blue * 0.114 > threshold) {
		return "#000000";
	}

	return "#ffffff";
}

function DynamicColorCard({ data }: { data: ColorData | ASCIIData }) {
	function handleHover() {
		// dont do anything if the card is an ascii card
		if ("character" in data) {
			return;
		}

		const DYNAMIC_TEXT_COLOR = getDynamicTextColor(
			data.rgb.r,
			data.rgb.g,
			data.rgb.b,
		);

		document.body.style.backgroundColor = data.hex;
		// set css variable dynamicTextColor on body to the dynamic text color
		document.body.style.setProperty("--dynamicTextColor", DYNAMIC_TEXT_COLOR);

		// get element with class name styles.grid and add styles.hideCards to it
		const grid = document.querySelector(`.${styles.grid}`);
		if (grid) {
			grid.classList.add(styles.hideCards);
		}

		changeFooterLinkColors(DYNAMIC_TEXT_COLOR);
		changeEmblemColor(DYNAMIC_TEXT_COLOR);
		changeNavLinksColor(DYNAMIC_TEXT_COLOR);
	}

	function handleMouseLeave() {
		// dont do anything if the card is an ascii card
		if ("character" in data) {
			return;
		}

		document.body.style.backgroundColor = "";
		document.body.style.setProperty("--dynamicTextColor", "");

		const grid = document.querySelector(`.${styles.grid}`);
		if (grid) {
			grid.classList.remove(styles.hideCards);
		}

		changeFooterLinkColors("#ffffff");
		changeEmblemColor("#ff3e3e");
		changeNavLinksColor("#ffffff");
	}

	function copyHexToClipboard() {
		if ("character" in data) {
			navigator.clipboard.writeText(data.character);
			return;
		}

		navigator.clipboard.writeText(data.hex);
	}

	function copyRGBToClipboard(event: React.MouseEvent<HTMLDivElement>) {
		// dont do anything if the card is an ascii card
		if ("character" in data) {
			return;
		}

		event.stopPropagation();
		navigator.clipboard.writeText(
			`${data.rgb.r}, ${data.rgb.g}, ${data.rgb.b}`,
		);
	}

	let InnerJSX: JSX.Element;

	if ("character" in data) {
		InnerJSX = (
			<div className={classNames(styles.colorCard, styles.defaultCard)}>
				<p className={styles.name}>{data.character}</p>
				<p className={styles.hex}>{data.description}</p>
			</div>
		);
	} else {
		InnerJSX = (
			<div
				className={classNames(styles.colorCard)}
				style={{
					backgroundColor: data.hex,
					color: getDynamicTextColor(data.rgb.r, data.rgb.g, data.rgb.b),
				}}
			>
				<p className={styles.name}>{data.name}</p>
				<p className={styles.hex}>{data.hex}</p>
				{/* biome-ignore lint/a11y/useKeyWithClickEvents:  */}
				<div
					className={styles.rgb}
					onClick={(event) => copyRGBToClipboard(event)}
				>
					rgb({data.rgb.r}, {data.rgb.g}, {data.rgb.b})
				</div>
			</div>
		);
	}

	return (
		<button
			type="button"
			className={styles.colorCardWrapper}
			onMouseEnter={handleHover}
			onMouseLeave={handleMouseLeave}
			onClick={copyHexToClipboard}
		>
			{InnerJSX}
		</button>
	);
}

function changeEmblemColor(color: DynamicTextColor | "#ff3e3e") {
	const nav = document.querySelector("nav");
	if (!nav) return;

	const img = nav.querySelector("img");
	if (!img) return;

	if (color === "#ffffff") {
		img.style.filter = "brightness(100)";
	} else if (color === "#000000") {
		img.style.filter = "brightness(0)";
	} else {
		img.style.filter = "";
	}
}

function changeNavLinksColor(color: DynamicTextColor) {
	const nav = document.querySelector("nav");
	if (!nav) return;

	const links = nav.querySelectorAll("a");
	if (!links) return;

	// biome-ignore lint/complexity/noForEach: <explanation>
	links.forEach((link) => {
		link.style.color = color;
	});
}

function changeFooterLinkColors(color: DynamicTextColor) {
	const footer = document.querySelector("footer");
	if (!footer) return;

	const svgs = footer.querySelectorAll("svg");
	// biome-ignore lint/complexity/noForEach: <explanation>
	svgs.forEach((svg) => {
		svg.style.fill = color;
	});
}

export default function ClipboardPage() {
	// set the background color of the footer to transparent only on this page
	// doing it the cheater way
	if (typeof window !== "undefined") {
		const footer = document.querySelector("footer");
		if (footer) {
			footer.style.backgroundColor = "transparent";
		}
	}

	return (
		<MainLayout>
			<Head>
				<title>clipboard • zyplos&apos;s stuff</title>
				<meta name="description" content="snippets i need from time to time" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />

				<meta property="og:title" content="clipboard • zyplos's stuff" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://zyplos.dev/clipboard" />
				<meta
					property="og:description"
					content="snippets i need from time to time"
				/>

				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@Zyplos" />
				<meta name="twitter:creator" content="@Zyplos" />

				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff3e3e" />
				<meta name="msapplication-TileColor" content="#ff3e3e" />
				<meta name="theme-color" content="#111111" />
			</Head>

			<h1 style={{ marginBottom: "2rem" }}>📋</h1>

			<section>
				<div className={styles.grid}>
					{MAIN_ASCII_DATA.map((asciiData) => (
						<DynamicColorCard key={asciiData.character} data={asciiData} />
					))}
					{MAIN_COLOR_DATA.map((colorData) => (
						<DynamicColorCard key={colorData.name} data={colorData} />
					))}
				</div>
			</section>
		</MainLayout>
	);
}
