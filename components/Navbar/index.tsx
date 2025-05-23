"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import emblemImg from "@/assets/emblem.png";
import Link from "next/link";
import classNames from "classnames";

import homeStyles from "@/styles/Home.module.scss";
import textWallStyles from "@/components/TextWall/styles.module.scss";
import type { UserStatusData } from "@/internals/getDiscordPresence";

const friendlyStatusText = {
	online: "⬤ Online",
	onlineWorking: "⬤ Working",
	offline: "🞮 Offline",
	idle: "* Chillin'",
	dnd: "🞓 Busy",
};

function getFriendlyStatusText(statusData: UserStatusData) {
	let statusText = friendlyStatusText[statusData.status];
	if (statusData.status === "online" && statusData.presence) {
		statusText = friendlyStatusText.onlineWorking;
	}
	return statusText;
}

export default function Navbar({ homeMode = false }: { homeMode?: boolean }) {
	const [isMobileNavExpanded, setIsMobileNavExpanded] = useState(false);
	const [expanded, setIsExpanded] = useState(!homeMode);
	const [cachedUserStatusData, setCachedUserStatusData] =
		useState<UserStatusData | null>(null);

	useEffect(() => {
		const statusLocalString = localStorage.getItem("status");
		setCachedUserStatusData(
			statusLocalString ? JSON.parse(statusLocalString) : null,
		);
	}, []);

	useEffect(() => {
		const navThreshold =
			Number.parseInt(textWallStyles.textWallHeight) -
			Number.parseInt(homeStyles.navHeight);
		const handleScroll = () => {
			if (window.scrollY > navThreshold) {
				setIsExpanded(true);
			} else {
				setIsExpanded(false);
			}
		};

		if (homeMode) {
			handleScroll();
			window.addEventListener("scroll", handleScroll);
			return () => window.removeEventListener("scroll", handleScroll);
		}
	}, [homeMode]);

	return (
		<nav
			className={classNames(styles.nav, {
				glass: expanded,
				[styles.navWrapperMobile]: isMobileNavExpanded,
			})}
			data-expanded={expanded}
		>
			<Link href="/" className={styles.emblemLink}>
				<Image
					src={emblemImg}
					alt=">>>"
					priority
					className={classNames({
						[styles.lightEmblem]: isMobileNavExpanded,
					})}
					style={{ display: "block" }}
				/>
			</Link>
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: not needed for mobile */}
			<div
				className={classNames("glass", styles.hamburger)}
				onClick={() => {
					setIsMobileNavExpanded(!isMobileNavExpanded);
				}}
			>
				☰
			</div>
			<div
				className={classNames(styles.linksSection, styles.mobileNav, {
					[styles.nogap]: expanded,
					[styles.mobileExpanded]: isMobileNavExpanded,
					[styles.opacity1]: isMobileNavExpanded,
				})}
			>
				{cachedUserStatusData && cachedUserStatusData.status !== "offline" && (
					<div
						className={classNames(
							styles.links,
							"glass",
							homeStyles.statusChip,
							styles[cachedUserStatusData.status],
							{
								// glass: !expanded,
								[styles.statusChipExpanded]: expanded,
								[styles.statusChipMobile]: isMobileNavExpanded,
							},
						)}
					>
						<span>{getFriendlyStatusText(cachedUserStatusData)}</span>
					</div>
				)}

				<div
					className={classNames(styles.links, {
						glass: !expanded,
					})}
				>
					<Link href="/">Home</Link>
					<Link href="/projects">Projects</Link>
					<Link href="/clipboard">Clipboard</Link>
				</div>
			</div>
		</nav>
	);
}
