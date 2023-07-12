import React, { lazy, Suspense } from "react";
import styled from "styled-components";

const LandingPage = lazy(() => import("./LandingPage"));
const Experience = lazy(() => import("./Experience"));
const Projects = lazy(() => import("./Projects"));

function Home() {
  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <LandingPage />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Experience />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Projects />
      </Suspense>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #191a20;

  @media (max-width: 1250px) {
    align-items: center;
  }
`;
