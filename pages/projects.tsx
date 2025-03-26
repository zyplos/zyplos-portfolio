import MainLayout from "@/components/MainLayout";
import {
	DiscordREADMECard,
	GitHubProjectTracker,
	LoungeCard,
	MyImagesCard,
} from "@/components/SpecialtyCard";

import { projects, archivedProjects } from "@/internals/projectData";
import Card from "@/components/Card";

import styles from "@/styles/Projects.module.scss";
import classNames from "classnames";
import Head from "next/head";

export default function ProjectsPage() {
	return (
		<MainLayout>
			<Head>
				<title>projects • zyplos&apos;s stuff</title>
				<meta name="description" content="stuff i've made" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />

				<meta property="og:title" content="projects • zyplos's stuff" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://zyplos.dev/projects" />
				<meta property="og:description" content="stuff i've made" />

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

			<h1 style={{ marginBottom: "2rem" }}>Projects</h1>

			<section className={styles.section}>
				<a
					href="https://github.com/Zyplos/lounge-hub"
					target="_blank"
					rel="noreferrer"
				>
					<LoungeCard />
				</a>

				<a
					href="https://github.com/Zyplos/discord-readme-badge"
					target="_blank"
					rel="noreferrer"
				>
					<DiscordREADMECard />
				</a>
				<a
					href="https://github.com/Zyplos/github-projectspace-tracker"
					target="_blank"
					rel="noreferrer"
				>
					<GitHubProjectTracker />
				</a>
				<a
					href="https://github.com/Zyplos/myimages.zip"
					target="_blank"
					rel="noreferrer"
				>
					<MyImagesCard />
				</a>

				<div className={styles.projectGrid}>
					{Object.values(projects).map((project) => {
						if (project.featured) return;

						return (
							<a
								href={project.link}
								target="_blank"
								rel="noreferrer"
								key={project.title}
							>
								<Card title={project.title} image={project.imagePreview}>
									<p>{project.description}</p>
								</Card>
							</a>
						);
					})}
				</div>
			</section>

			<h2 style={{ marginBottom: "2rem" }}>archived projects</h2>
			<section className={classNames(styles.section)}>
				{Object.values(archivedProjects).map((project) => (
					<a
						href={project.link}
						target="_blank"
						rel="noreferrer"
						key={project.title}
					>
						<Card title={project.title}>
							<p>{project.date}</p>
							<p>{project.description}</p>
						</Card>
					</a>
				))}
			</section>
		</MainLayout>
	);
}
