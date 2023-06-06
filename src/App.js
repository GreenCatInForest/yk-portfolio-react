import logo from "./";
import "./index.css";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";

export const App = () => {
  return (
    <div>
      <Header />
      <Navigation />
    </div>
  );
};

export default App;
