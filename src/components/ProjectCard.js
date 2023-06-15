export const ProjectCard = (props) => {
  const title = props.title;
  const subTitle = props.subTitle;

  return (
    <div>
      Here is a project card
      <div className="title">{title}</div>
      <div className="subTitle">{subTitle}</div>
    </div>
  );
};
