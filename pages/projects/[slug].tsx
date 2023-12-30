import { ArchivedProject, Project, archivedProjects, projects } from "@/internals/projectData";
import type { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from "next";

export const getStaticPaths = (async () => {
  const projectSlugs = Object.keys(projects);
  const archivedProjectSlugs = Object.keys(archivedProjects);
  const slugs = [...projectSlugs, ...archivedProjectSlugs];

  const paths = slugs.map((slug) => ({
    params: {
      slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  console.log("===================================CONTEXT", context);
  if (!context.params) {
    return {
      props: {
        data: {
          title: "???",
          description: "oops",
        },
      },
    };
  }

  const { slug } = context.params;
  const entry = projects[slug as string] || archivedProjects[slug as string];
  return { props: { data: entry } };
}) satisfies GetStaticProps<{
  data: Project | ArchivedProject;
}>;

export default function Page({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log("===================================DATA", data);
  return data.title;
}
