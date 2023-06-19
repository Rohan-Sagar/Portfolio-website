import styled from "styled-components";

export const Container = styled.main`
  @media (max-width: 1250px) {
    flex-direction: column;
    height: auto;
    justify-content: flex-start;
  }

  display: flex;
  width: 100%;
  height: 800px;
  background-color: #191A20;
`;

export const Landing = styled.div`
  @media (max-width: 1250px) {
    flex-wrap: wrap;
    margin: 100px auto 0;
  }
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 75%;
  justify-content: space-between;
  margin: 150px auto 0;
  align-items: center;

  // @media (max-width: 500px) {
  //   margin: 100px -10px auto;
  // }
`

export const LeftMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-shrink: 0;
  height: 100%;
  width: 33%;
  gap: 20px;
  // background: yellow;

  @media (max-width: 1250px) {
    order: 2;
    width: 50%;
    gap: 0px;
  }

  @media (max-width: 768px) {
    top: 20px;
    position: relative;
  }
`;

export const Picture = styled.div`
  width: 29%;
  height: 100%;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;


  img {
    max-height: 300px;
    max-width: 100%;
    border-radius: 6px;
    margin-top: 90px;
  }

  @media (max-width: 1250px){
    order: 1;
    width: 50%;
  }

  @media (max-width: 500px){
    img {
      max-height: 200px;
      position: relative;
      bottom: 25px;
    }
  }
`;

export const RightMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 38%;
  flex-shrink: 0;
  height: 100%;
  gap: 20px;
  justify-content: center;
  h1 {
    color: white !important;
  }

  @media (max-width: 1250px){
    order: 3;
    width: 100%;
    margin-bottom: 50px;
  }
`

export const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media (max-width: 500px) {
    flex-direction: row;
  }
`;

export const Tag = styled.p`
  font-size: 12px;
  padding: 2px 5px;
  color: white;
  background-color: #424247;
  font-family: 'Poppins', sans-serif;
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 3px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15), 0px 2px 2px rgba(0, 0, 0, 0.15), 0px 3px 3px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
  @media (max-width: 500px) {
    font-size: 7px;
  }
`;

export const Name = styled.span`
  color: white;
  font-size: 60px;

  @media (max-width: 500px) {
    font-size: 30px;
  }
`;

export const SchoolDetails = styled.span`
  color: white;
  font-size: 20px;

  p {
    font-size: 14px;
    margin: 0;
  }

  @media (max-width: 500px) {
    font-size: 12px;
    p {
      font-size: 10px;
    }
  }
`;

export const OtherInfo = styled.div`
  color: white;
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;

  h1 {
    font-size: 54px;
    font-family: 'UfcSecondaryFont';
    border-bottom: 2px solid red;
    width: 60px;
    padding-bottom: 5px;
  }

  span {
    font-size: 14px;
  }

  @media (max-width: 1250px) {
    h1 {
      font-size: 40px;
      width: 40px;
    }
    span {
      font-size: 12px;
    }
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 20px;
      width: 20px;
    }
    span {
      font-size: 10px;
    }
  }
}`
;

export const NumberChart = styled.div`
  display: flex;
  // align-items: center;
  height: 35%;
  width: 80%;
  gap: 30px;
  label {
    border-right: 2px solid #3F3F3F;
  }

  @media (max-width: 768px) {
    gap: 10px;
  }
`

export const UserSelect = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 20px;
  color: white;

  span {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    span {
      font-size: 14px;
    }
  }
`

export const RedOption = styled.div`
  width: 150px;
  margin: auto;
  background-color: rgb(143, 2, 14);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  font-family: "Share Tech Mono", monospace;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;
  user-select: none;
  &:active {
    transform: translateY(1px);
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    transition: background-color 0.2s;
    z-index: -1;
  }
  // &:active::before {
  //   background-color: rgba(0, 0, 0, 0.4);
  // }

  @media (max-width: 768px) {
    p {
      font-size: 12px;
    }
  }
`;

export const BlueOption = styled(RedOption)`
  background-color: rgb(41, 71, 144) !important;
`