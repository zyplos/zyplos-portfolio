import Link from "next/link";
import MainLayout from "@/components/MainLayout";
import { DiscordREADMECard, GitHubProjectTracker, LoungeCard, MyImagesCard } from "@/components/SpecialtyCard";

import { projects, archivedProjects, ProjectData, ArchivedProject, Project } from "@/internals/projectData";
import Card from "@/components/Card";

import styles from "@/styles/Projects.module.scss";
import classNames from "classnames";

export default function ProjectsPage() {
  return (
    <MainLayout>
      <h1 style={{ marginBottom: "2rem" }}>Projects</h1>

      <section className={styles.section}>
        <a href="https://github.com/Zyplos/lounge-hub" target="_blank">
          <LoungeCard />
        </a>

        <a href="https://github.com/Zyplos/discord-readme-badge" target="_blank">
          <DiscordREADMECard />
        </a>
        <a href="https://github.com/Zyplos/github-projectspace-tracker" target="_blank">
          <GitHubProjectTracker />
        </a>
        <a href="https://github.com/Zyplos/myimages.zip" target="_blank">
          <MyImagesCard />
        </a>

        <div className={styles.projectGrid}>
          {Object.values(projects).map((project, index) => {
            if (project.featured) return;

            return (
              <a href={project.githubLink} target="_blank" key={index}>
                <Card title={project.title}>
                  <p>{project.description}</p>
                </Card>
              </a>
            );
          })}
        </div>
      </section>

      <h2 style={{ marginBottom: "2rem" }}>archived projects</h2>
      <section className={classNames(styles.section)}>
        {Object.values(archivedProjects).map((project, index) => (
          <a href={project.githubLink} target="_blank" key={index}>
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
