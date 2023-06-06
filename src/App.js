import logo from "./";
import "./index.css";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Projects } from "./components/Projects";
import { ContactMe } from "./components/ContactMe";

export const App = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Projects />
      <ContactMe />
    </div>
  );
};

export default App;
