import React, { lazy, Suspense } from "react";
import NavBar from "./NavBar/index";
import { Box } from "@mui/material";

const LandingPage = lazy(() => import("./LandingPage"));
const Experience = lazy(() => import("./Experience"));
const Projects = lazy(() => import("./Projects"));
const Contact = lazy(() => import("./Contact"));
const Skills = lazy(() => import("./Skills"));

function Home() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <LandingPage />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Experience />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Projects />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Skills />
      </Suspense>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Contact />
      </Suspense> */}
    </>
  );
}

export default Home;
