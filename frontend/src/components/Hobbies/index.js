import styled, { keyframes } from 'styled-components';
import { useState, useEffect } from 'react';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const animateCircle = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Circle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  width: 400px;
  height: 400px;
  transform-style: preserve-3d;
  // animation: ${animateCircle} 10s linear infinite;
`;

const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  min-width: 100px;
  border-radius: 25px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  font-size: 1.2rem;
  font-weight: 500;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotateY(${props => props.rotateY}deg);
`;

const textclip = keyframes`
  to {
    background-position: 200% center;
  }
`;

const WebTag = styled(Tag)`
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${textclip} 3s linear infinite;
  white-space: nowrap;
`;

const growAnimation = keyframes`
    0% {
      color: #fff;
      font-size: 0.6rem;
    }
    50% {
      color: #06C303;
      font-size: 0.8rem;
    }
    75% {
      color: #08DA04;
      font-size: 1rem;
    }
    85% {
      color: #08DA04;
      font-size: 1.1rem;
    }
    90% {
      color: #08DA04;
      font-size: 1.15rem;
    }
    95% {
      color: #08DA04;
      font-size: 1.18rem;
    }
    100% {
      font-size: 1.2rem;
      background-image: linear-gradient(to right, #C9B1FF, #FFCAF2, #FFB2B1, #FFF3AD, #BCFFBC, #A2EDFF);
      -webkit-background-clip: text;
      text-fill-color: transparent;
      -webkit-text-fill-color: transparent;
    }
`;

const StartTag = styled(Tag)`
  animation: ${growAnimation} 6s linear infinite;
`;

const CyberTag = styled(Tag)`
  background-image: url('/assets/matrix.jpg');
  background-color: transparent;
  color: #1FDD09;
`;

function Hobbies() {
  const [tags, setTags] = useState([
    { value: '3D Printing', color: 'white'},
    { value: 'Algorithmic Trading', color: '#D2222D'},
    { value: 'Web Development', color: '#F7DF1E'},
    { value: 'Cybersecurity', color: '#1FDD09'},
    { value: 'Artificial Intelligence', color: '#F05032'},
    { value: 'Startups'},
    { value: 'Gaming', color: '#4B32C3'},
    { value: 'UFC', color: '#A6000F'},
    { value: 'Blockchain', color: '#F7DF1E'},
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTags((prevTags) => {
        return prevTags.map((tag, index) => {
          if (index === 1) {
            const newColor = tag.color === '#D2222D' ? '#238823' : '#D2222D';
            return { ...tag, color: newColor };
          }
          if (index === 7) {
            const newColor = tag.color === '#A6000F' ? '#3155AF' : '#A6000F';
            return { ...tag, color: newColor };
          }
          return tag;
        });
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
      <Circle>
        <Tag style={{ left: '50%', top: '0%', transform: 'translate(-50%, -50%)', color: tags[0].color}}>
          {tags[0].value}
        </Tag>
        <Tag style={{ left: '15%', top: '25%', transform: 'translate(-50%, -50%)', color: tags[1].color}}>
          {tags[1].value}
        </Tag>
        <WebTag style={{ left: '85%', top: '25%', transform: 'translate(-50%, -50%)', color: tags[2].color }}>
          {tags[2].value}
        </WebTag>
        <CyberTag style={{ left: '0%', top: '50%', transform: 'translate(-50%, -50%)', color: tags[3].color, value: tags[3].value}}>
          {tags[3].value}
        </CyberTag>
        <Tag style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', color: tags[4].color }}>
          {tags[4].value}
        </Tag>
        <StartTag style={{ left: '100%', top: '50%', transform: 'translate(-50%, -50%)'}}>
          {tags[5].value}
        </StartTag>
        <Tag style={{ left: '15%', top: '75%', transform: 'translate(-50%, -50%)', color: tags[6].color }}>
          {tags[6].value}
        </Tag>
        <Tag style={{ left: '85%', top: '75%', transform: 'translate(-50%, -50%)', color: tags[7].color }}>
          {tags[7].value}
        </Tag>
        <Tag style={{ left: '50%', top: '100%', transform: 'translate(-50%, -50%)', color: tags[8].color }}>
          {tags[8].value}
        </Tag>
      </Circle>
    </Container>
  );
}

export default Hobbies;

// const rearrangeTags = () => {
//   setTags((prevTags) => {
//     const shuffledTags = [...prevTags].sort(() => Math.random() - 0.5);
//     return shuffledTags;
//   });
// };