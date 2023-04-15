import styled from 'styled-components';

export const Timer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  margin-top: 55px;
  
  @media (max-width: 1250px) {
    justify-content: center;
  }
`

export const Clock = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0 1.5em;
  background-image: linear-gradient(180deg,#363636,#2b2b2b);
  transform-origin: center 0;
  transform: translate(0px, 0%);
  height: 100%;
  display: flex;

  @media (max-width: 1250px) {
    width: 100%;
    padding: 0 1em;
  }

`

export const Logo = styled.div`
  width: 70px;
  transform: translate(0%, -50%);
  left: 0px;
  position: absolute;
  top: 50%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  img {
    transform: translate(-15px, 0%);
    width: 3em;
    height: 100%;
    transition: fill .3s ease;
    filter: invert(100%);
  }
`

export const ClockWrapper = styled.div`
  position: fixed;
  width: 150px;
  height: 100%;
  span {
    opacity: 1;
    visibility: inherit;
    transform: translate(0%, -50%);
    position: absolute;
    right: 40px;
    top: 50%;
    display: flex;
    align-items: center;
    margin-left: 0.4em;
    color: white;
    font-size: 1.2em;
    font-family: 'Hanken Grotesk', sans-serif;
    font-family: 'Quantico', sans-serif;
    user-select: none;
    font-weight: 600;
    display: flex;
  }
`

export const Rounds = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  position: absolute;
  right: -30px;
  top: 50%;
  transform: translateY(-50%);
`;

export const RoundBar = styled.div`
  height: 20px;
  width: 3px;
  background-color: ${props => props.color ? props.color : '#727272'};
  margin-right: 5px;
`;

export const RoundBarSquare = styled(RoundBar)`
  width: 20px;
  text-align: center;
  background-color: #D4AF37;
`;

export const Info = styled.div`
  transform: translate(-50%, 0%);
  width: fit-content;
  position: absolute;
  bottom: 100%;
  left: 50%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  min-width: 100%;
  max-width: 130%;
  height: 30px;
  margin-bottom: 0.25em;
  padding: 0 1.25em;
  overflow: hidden;
  background-image: linear-gradient(0deg,#000,#363636);
  transform-origin: center 100%;
  span {
    color: white;
    font-size: 1em;
    font-family: "Share Tech Mono", monospace;
    line-height: 30px;
    letter-spacing: 1px;
    white-space: nowrap;
    text-transform: uppercase;
  }
`

export const RedBanner = styled.span`
  position: absolute;
  top: 50%;
  right: 0;
  height: 20px;
  width: 8px;
  opacity: 1;
  visibility: inherit;
  transform: translate(0%, -50%);
  background-color: rgb(143, 2, 14);
`

export const BlueBanner = styled(RedBanner) `
  background-color: rgb(41, 71, 144) !important;
  transform: translate(0%, -50%);
  right: auto;
  left: 0;
`

export const Contestant = styled.div`
  order: -1;
  overflow: hidden;
  color: white;
  font-size: 1.3em;
  font-family: "Share Tech Mono",monospace;
  letter-spacing: 2px;
  text-transform: uppercase;
  background-image: linear-gradient(0deg,#4b4c50,#696969);
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 400px;
`

export const ContestantTwo = styled(Contestant)`
  order: 1;
  flex-direction: row;
`

export const TextWrapper = styled.div`
  opacity: 1;
  visibility: inherit;
  transform: translate(0%, 0px);
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  word-spacing: -0.25em;
  color: white;
  font-size: 0.6em;
  font-family: "Share Tech Mono", monospace;
  letter-spacing: 2px;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  font-weight: 500;
  @media (max-width: 420px) {
    font-size: 0.5em;
  }
`

export const Container = styled.div`
  -webkit-order: -1;
  order: -1;
  overflow: hidden;
  color: #fff;
  font-size: 1.3em;
  font-family: "Share Tech Mono",monospace;
  letter-spacing: 2px;
  text-transform: uppercase;
  background-image: linear-gradient(0deg,#4b4c50,#696969);
  -webkit-font-smoothing: antialiased;
  width: 100%;
  padding: 0px 1.5em;
  position relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const Date = styled.span`
  font-size: 18px;
  color: white;
  margin: 0 auto;
`