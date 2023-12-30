import Link from "next/link";
import MainLayout from "@/components/MainLayout";
import { DiscordREADMECard, GitHubProjectTracker, LoungeCard, MyImagesCard } from "@/components/SpecialtyCard";

import { projects, archivedProjects, ProjectData, ArchivedProject, Project } from "@/internals/projectData";
import Card from "@/components/Card";

// turn projects into an array of values with the keys attached to them as a slug
function projectDataToArray(projectData: ProjectData | ArchivedProject) {
  const slugs = Object.keys(projectData);
  const projectArray = Object.values(projectData).map((project, index) => ({
    ...project,
    slug: slugs[index],
  }));

  return projectArray;
}

export default function ProjectsPage() {
  const projectsArray = projectDataToArray(projects);
  const archivedProjectsArray = projectDataToArray(archivedProjects);

  console.log(projects);
  console.log(projectsArray);

  return (
    <MainLayout>
      <h1 style={{ marginBottom: "2rem" }}>Projects</h1>

      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginBottom: "2rem", gap: "4rem" }}>
        <Link href="/projects/lounge-hub">
          <LoungeCard />
        </Link>

        <Link href="/projects/discord-readme-badge">
          <DiscordREADMECard />
        </Link>
        <Link href="/projects/github-project-tracker">
          <GitHubProjectTracker />
        </Link>
        <Link href="/projects/myimages">
          <MyImagesCard />
        </Link>

        {projectsArray.map((project, index) => {
          if (project.featured) return;

          return (
            <Link href={`/projects/${project.slug}`} key={index}>
              <Card title={project.title}>
                <p>{project.description}</p>
              </Card>
            </Link>
          );
        })}
      </div>

      <h2 style={{ marginBottom: "2rem" }}>archived projects</h2>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginBottom: "2rem", gap: "4rem" }}>
        {archivedProjectsArray.map((project, index) => (
          <Link href={`/projects/${project.slug}`} key={index}>
            <Card title={project.title}>
              <p>{project.date}</p>
              <p>{project.description}</p>
            </Card>
          </Link>
        ))}
      </div>
    </MainLayout>
  );
}
