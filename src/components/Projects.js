import { ProjectCard } from "./ProjectCard";

const projects = [
  { projectTitle: "test", projectSubTitle: "test" },
  { projectTitle: "", projectSubTitle: "" },
  { projectTitle: "", projectSubTitle: "" },
  { projectTitle: "", projectSubTitle: "" },
];

export const Projects = () => {
  return (
    <div>
      {projects.map((project) => {
        return (
          <ProjectCard
            projectTitle={project.projectTitle}
            projectSubTitle={project.projectSubTitle}
            key={project.projectTitle}
          />
        );
      })}
    </div>
  );
};
