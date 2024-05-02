import mock from "./mock.json";
const { projects } = mock;

export function getProjects(keyword) {
  if (!keyword) return projects;
}

export function getProjectBySlug(projectSlug) {
  return projects.find((project) => project.slug === projectSlug);
}
