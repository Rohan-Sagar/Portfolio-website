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