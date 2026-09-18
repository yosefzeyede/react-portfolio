import { Route, Routes } from "react-router-dom";
import "./App.css";
import All from "./Functional-Component/All";
import Sharedlayout from "./Functional-Component/sharedlayout/Sharedlayout";
import Skill from "./Functional-Component/Skill";
import Project from "./Functional-Component/Project";
import Home from "./Functional-Component/Home";
import About from "./Functional-Component/About";
import Contact from "./Functional-Component/Contact";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Sharedlayout />}>
          <Route path="/" element={<All />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skill />} />
          <Route path="projects" element={<Project />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
