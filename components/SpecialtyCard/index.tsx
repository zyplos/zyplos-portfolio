import classNames from "classnames";
import cardStyles from "../Card/styles.module.scss";
import type { CardProps } from "../Card";

import Image from "next/image";
import commandBlockImg from "@/assets/command-block.png";
import emblemMCImg from "@/assets/emblemmc.png";
//
import sparkleMainImg from "@/assets/sparklemain.png";
import sparkleLeftImg from "@/assets/sparkleleft.png";
import sparkleRightImg from "@/assets/sparkleright.png";
//
import projectsIcon from "@/assets/projects-icon.png";
//
import projectIcon from "@/assets/project-icon.png";
import projectspaceIcon from "@/assets/projectspace-icon.png";
import dayShapeImg from "@/assets/day-shape.png";
import checkmarkIcon from "@/assets/checkmark.png";

import styles from "./styles.module.scss";

export function LoungeCard({ style }: CardProps) {
	return (
		<div
			className={classNames(cardStyles.card, styles.loungeHubCard)}
			style={{
				...style,
			}}
		>
			<p className={cardStyles.cardTitle}>lounge hub</p>
			<p>community site for my minecraft stuff</p>

			<Image
				src={commandBlockImg}
				alt=""
				quality={100}
				className={styles.loungeHubCardBlock}
			/>
			<Image
				src={emblemMCImg}
				alt=""
				quality={100}
				className={styles.loungeHubCardEmblem}
			/>
		</div>
	);
}

export function DiscordREADMECard({ style }: CardProps) {
	return (
		<div
			className={classNames(cardStyles.card, styles.discordREADMEBadgeCard)}
			style={{
				...style,
			}}
		>
			<p className={cardStyles.cardTitle}>Discord README Badge</p>
			<p>show what you&apos;re working on in your github readme</p>

			<Image
				src={sparkleMainImg}
				alt=""
				quality={100}
				className={styles.discordREADMESparkleMain}
			/>
			<Image
				src={sparkleLeftImg}
				alt=""
				quality={100}
				className={styles.discordREADMESparkleLeft}
			/>
			<Image
				src={sparkleRightImg}
				alt=""
				quality={100}
				className={styles.discordREADMESparkleRight}
			/>
		</div>
	);
}

export function GitHubProjectTracker({ style }: CardProps) {
	return (
		<div
			className={classNames(cardStyles.card, styles.githubProjectTrackerCard)}
			style={{
				...style,
			}}
		>
			<p className={cardStyles.cardTitle}>github project tracker</p>
			<p>get a quick overview of your team&apos;s github project on discord</p>
			<Image
				src={projectsIcon}
				alt=""
				quality={100}
				className={styles.githubProjectIcon}
			/>
		</div>
	);
}

export function SeeMoreProjectsCard({ style }: CardProps) {
	return (
		<div
			className={classNames(cardStyles.card, styles.seeMoreProjectsCard)}
			style={{
				...style,
			}}
		>
			<p className={cardStyles.cardTitle}>see more 🡆</p>
			<p>view full list of projects</p>
			<Image
				src={projectIcon}
				alt=""
				quality={100}
				className={styles.seeMoreProjectIcon}
			/>
			<Image
				src={projectspaceIcon}
				alt=""
				quality={100}
				className={styles.seeMoreProjectspaceIcon}
			/>
			<Image
				src={dayShapeImg}
				alt=""
				quality={100}
				className={styles.seeMoreDayShapeImg}
			/>
			<Image
				src={checkmarkIcon}
				alt=""
				quality={100}
				className={styles.seeMoreCheckmarkIcon}
			/>
		</div>
	);
}

export function TwitterCard({ style }: CardProps) {
	return (
		<div
			className={classNames(cardStyles.card, styles.twitterCard)}
			style={{
				...style,
			}}
		>
			<p className={cardStyles.cardTitle}>@zyplos</p>
			<p>doodles and photography</p>
		</div>
	);
}

export function MyImagesCard({ style }: CardProps) {
	return (
		<div
			className={classNames(cardStyles.card, styles.myimagesCard)}
			style={{
				...style,
			}}
		>
			<p className={cardStyles.cardTitle}>myimages.zip</p>
			<p>full resolution renders of my design stuff</p>
		</div>
	);
}

export function SystemStatusCard({ style }: CardProps) {
	return (
		<div
			className={classNames(cardStyles.card, styles.systemStatusCard)}
			style={{
				...style,
			}}
		>
			<div className={styles.systemStatusCardContent}>
				<p className={cardStyles.cardTitle}>system status</p>
				<p>check here incase something&apos;s offline</p>
			</div>
		</div>
	);
}
