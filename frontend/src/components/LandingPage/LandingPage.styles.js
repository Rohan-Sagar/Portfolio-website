import styled from "styled-components";

export const Container = styled.main`
  @media (max-width: 1250px) {
    flex-direction: column;
    height: auto;
    justify-content: flex-start;
  }

  display: flex;
  width: 100%;
  height: 85%;
  position: absolute;
  background-color: #191A20;
`;

export const Landing = styled.div`
  @media (max-width: 1250px) {
    flex-wrap: wrap;
  }
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 75%;
  justify-content: space-between;
  margin: 150px auto 0;
  align-items: center;
`

export const LeftMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  width: 33.3%;
  gap: 20px;

  @media (max-width: 1250px) {
    order: 1;
    width: 50%;
  }
`;

export const Picture = styled.div`
  width: 33.3%;
  height: 100%;
  display: flex;
  img {
    height: 320px;
    margin: 120px 0px 0px 100px;
    border-radius: 6px;
  }

  @media (max-width: 765px){
    order: 2;
    width: 50%;
    margin-top: 50px;
    img {
      margin: auto;
      height: 270px;
    };
  }

  @media (max-width: 711px) {
    img {
      height: 230px;
      margin: -190px 0px 0px 10px;
    }
  }


`;

export const RightMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.3%;
  height: 100%;
  gap: 20px;
  justify-content: center;
  margin-top: 30px;

  @media (max-width: 1250px){
    order: 3;
    width: 100%;
    margin-top: 20%;

  }
`

export const TagWrapper = styled.div`
  display: flex;
  // margin-top: 10px;
`

export const Tag = styled.p`
  font-size: 12px;
  padding: 2px 5px;
  color: white;
  background-color: #424247;
  margin-right: 5px;
  border-radius: 3px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15), 0px 2px 2px rgba(0, 0, 0, 0.15), 0px 3px 3px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`;

export const Name = styled.span`
  color: white;
  font-size: 60px;

  // @media (max-width: 768px) {
  //   font-size: 36px;
  // }
`;

export const SchoolDetails = styled.span`
  color: white;
  font-size: 20px;

  p {
    font-size: 14px;
    margin: 0;
  }

  // @media (max-width: 768px) {
  //   font-size: 14px;
  // }
`;

export const OtherInfo = styled.div`
  color: white;
  align-items: center;
  // height: 70%;
  display: flex;
  flex-direction: column;
  // align-items: center;
  text-align: center;

  h1 {
    font-size: 54px;
    border-bottom: 2px solid red;
    width: 60px;
    padding-bottom: 5px;
  }

  span {
    font-size: 14px;
  }

  // @media (max-width: 768px) {
  // h1 {
  //   font-size: 36px;
  // }

  // span {
  //   font-size: 12px;
  // }
}`;

export const NumberChart = styled.div`
  display: flex;
  // align-items: center;
  height: 35%;
  width: 80%;
  gap: 30px;
  label {
    border-right: 2px solid #3F3F3F;
  // }
`

export const UserSelect = styled.div`
  // background-color: blue;
  display: flex;
  flex-direction: column;
  text-align: center;
  // margin-top: 20px;
  // margin-left: 120px;
  gap: 20px;
  // justify-content: center;
  color: white;

  span {
    font-size: 18px;
  }
`

export const RedOption = styled.div`
  width: 150px;
  margin: auto;
  background-color: rgb(143, 2, 14);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15), 0px 2px 2px rgba(0, 0, 0, 0.15), 0px 3px 3px rgba(0, 0, 0, 0.15);
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
  `;

export const BlueOption = styled(RedOption)`
  background-color: rgb(41, 71, 144) !important;
`