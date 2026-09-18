import React from "react";
import Footer from "./Footer";
import Headershared from "./Headershared";
import { Outlet } from "react-router-dom";

function Sharedlayout() {
  return (
    <div>
      <Headershared />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Sharedlayout;
