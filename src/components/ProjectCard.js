import Card from "react-bootstrap/Card";

export const ProjectCard = (props) => {
  const projectTitle = props.projectTitle;
  const projectSubTitle = props.projectSubTitle;
  const projectImg = props.projectImg;
  const projectLink = props.projectLink;
  const projectGithubLink = props.projectGithubLink;

  return (
    <Card>
      <Card.Body className="text-center">
        <Card.Title>{projectTitle}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {projectSubTitle}
        </Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};
