import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ProjectCard } from "./ProjectCard";

const projects = [
  { projectTitle: "test", projectSubTitle: "test" },
  { projectTitle: "", projectSubTitle: "" },
  { projectTitle: "", projectSubTitle: "" },
  { projectTitle: "", projectSubTitle: "" },
];

export const Projects = () => {
  return (
    <Container fluid>
      <Row xs={1} md={2} lg={4} className="g-4 mx-auto">
        {projects.map((project) => {
          return (
            <Col className="mx-auto" key={project.projectTitle}>
              <ProjectCard
                projectTitle={project.projectTitle}
                projectSubTitle={project.projectSubTitle}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
