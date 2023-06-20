import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo192 from "../media/logo192.png";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    projectTitle: "test",
    projectSubTitle: "test",
    projectImg:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
  },
  {
    projectTitle: "test1",
    projectSubTitle: "test1",
    projectImg: logo192,
  },
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
                projectImg={project.projectImg}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
