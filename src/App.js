import logo from "./";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { ContactMe } from "./components/ContactMe";

export const App = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Projects />
      <AboutMe />
      <ContactMe />
    </div>
  );
};
