import React, { Suspense, lazy} from 'react';
import styled from 'styled-components';
import LandingPage from './LandingPage/index';
import Projects from './Projects/index';
import TerminalUI from './TerminalUI/index';
import Experience from './Experience/index';

// const HomePage = React.lazy(() => LandingPage);

function Home() {
  return (
    <Container>
      <LandingPage/>
      <Experience/>
      <Projects/>
    </Container>
  )
}

export default Home

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #191A20;

  @media (max-width: 1250px) {
    align-items: center;
  }
`