import classNames from "classnames";
import Link from "next/link";
import type { Metadata } from "next";

import styles from "@/styles/Projects.module.scss";
import { projects, archivedProjects } from "@/internals/projectData";

import MainLayout from "@/components/MainLayout";
import Card from "@/components/Card";
import {
  DiscordREADMECard,
  GitHubProjectTracker,
  LatentWriterCard,
  LoungeCard,
  MyImagesCard,
  SystemStatusCard,
} from "@/components/SpecialtyCard";

export const metadata: Metadata = {
  title: "projects • zyplos's stuff",
  description: "stuff i've made",
  openGraph: {
    title: "projects • zyplos's stuff",
    description: "stuff i've made",
    url: "https://zyplos.dev/projects",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <MainLayout>
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
        <a
          href="https://github.com/Zyplos/LatentWriter"
          target="_blank"
          rel="noreferrer"
        >
          <LatentWriterCard />
        </a>

        <div className={styles.projectGrid}>
          {Object.values(projects).map((project) => {
            // Skip featured projects as they are manually listed above with specialty cards
            if (project.featured) return null;

            if (project.localLink) {
              return (
                <Link href={project.localLink} key={project.title}>
                  <Card title={project.title} image={project.imagePreview}>
                    <p>{project.description}</p>
                  </Card>
                </Link>
              );
            }

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
        <div className={styles.projectGrid}>
          {Object.values(archivedProjects).map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              <Card title={project.title}>
                <p>{project.date}</p>
                <p>{project.description}</p>
              </Card>
            </a>
          ))}
        </div>
      </section>

      <div style={{ marginTop: "7rem" }}>
        <Link href="/status">
          <SystemStatusCard />
        </Link>
      </div>
    </MainLayout>
  );
}
