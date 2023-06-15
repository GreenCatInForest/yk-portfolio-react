export const ProjectCard = (props) => {
  const projectTitle = props.projectTitle;
  const projectSubTitle = props.projectSubTitle;
  const projectImg = props.projectImg;
  const projectLink = props.projectLink;
  const projectGithub = props.projectGithub;

  return (
    <div>
      Here is a project card
      <div className="projectTitle">{projectTitle}</div>
      <div className="projectSubTitle">{projectSubTitle}</div>
      <div className="projectImg">{projectImg}</div>
      <div className="projectLink">{projectLink}</div>
      <div className="projectGithub ">{projectGithub}</div>
    </div>
  );
};
