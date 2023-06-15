import { ProjectCard } from "./ProjectCard";

const projects = [
  { title: "test", subTitle: "test" },
  { title: "", subTitle: "" },
  { title: "", subTitle: "" },
  { title: "", subTitle: "" },
];

export const Projects = () => {
  return (
    <div>
      {projects.map((project) => {
        return (
          <ProjectCard
            title={project.title}
            subTitle={project.subTitle}
            key={project.title}
          />
        );
      })}
    </div>
  );
};
