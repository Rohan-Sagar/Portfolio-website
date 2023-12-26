import styled from "styled-components";

export const timerWrapper = { 
  display: 'flex', 
  height: '40px', 
  alignItems: 'center', 
  justifyContent: 'center' 
};

export const contestantWrapper = (isLeft) => ({
  display: 'flex', 
  padding: isLeft ? '1rem 0 1rem 1rem' : '1rem 1rem 1rem 0',
  alignItems: 'center', 
  gap: '1rem', 
  backgroundImage: 'linear-gradient(0deg, #4b4c50, #696969)', 
  justifyContent: 'center', 
  height: '100%', 
  width: '100%'
});

export const contestantText = {
  color: 'white', 
  fontFamily: 'Share Tech Mono, monospace', 
  letterSpacing: '2px', 
  fontWeight: '500', 
  textTransform: 'uppercase', 
  fontSmoothing: 'antialiased', 
  fontSize: '1em'
}

export const banner = (isLeft) => ({
  height: '20px', 
  width: '8px', 
  opacity: '1', 
  visibility: 'inherit', 
  backgroundColor: isLeft ? 'rgb(143, 2, 14)' : 'rgb(41, 71, 144)'
});

export const clockWrapper = { 
  display: 'flex', 
  padding: '1rem', 
  alignItems: 'center', 
  justifyContent: 'center', 
  gap: '1rem', 
  backgroundImage: 'linear-gradient(180deg, #363636, #2b2b2b)', 
  height: '100%', 
  width: '100%'
}

export const imgStyle = { 
  filter: 'invert(100%)', 
  objectFit: 'contain', 
  width: '50px', 
  alignSelf: 'center'
}

export const timerText = { 
  fontWeight: 'bold', 
  color: 'white',
  paddingTop: '1px', 
  fontFamily: 'Quantico, sans-serif', 
  textAlign: 'center',
  alignSelf: 'center'
}

export const roundsWrapper = { 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  height: '100%' 
}

export const dateText = {
  fontSize: '18px',
  color: 'white',
  margin: '0 auto',
  fontFamily: 'UfcFont'
};

export const RoundBar = styled.div`
  height: 20px;
  width: 3px;
  background-color: ${(props) => (props.color ? props.color : "#727272")};
  margin-right: 5px;
`;

export const RoundBarSquare = styled(RoundBar)`
  width: 20px;
  text-align: center;
  background-color: #d4af37;
`;