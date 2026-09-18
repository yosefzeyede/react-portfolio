import React from "react";

import logo from "../image/logo.png";
import Home from "./Home";
import About from "./About";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";

function All() {
  return (
    <>
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
    </>
  );
}

export default All;
