import React, { Suspense, lazy} from 'react';
import styled from 'styled-components';
import LandingPage from './LandingPage';
import Projects from './Projects';
import TerminalUI from './TerminalUI';
import Experience from './Experience';

// const HomePage = React.lazy(() => LandingPage);

function Home() {
  return (
    <Container>
      <LandingPage/>
      <Experience/>
    </Container>
  )
}

export default Home

const Container = styled.div`
  @media (max-width: 1250px) {
    flex-direction: column;
    height: auto;
    justify-content: flex-start;
  }
  display: flex;
  flex-direction: row;
`