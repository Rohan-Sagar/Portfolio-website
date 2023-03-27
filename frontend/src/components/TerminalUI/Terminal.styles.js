import styled from 'styled-components';

export const Circle = styled.label`
    display: inline-block;
    width: 12px;
    height: 12px;
    margin: 0 5px;
    border-radius: 50%;
`

export const RedCircle = styled(Circle)`
  background-color: #ff4d4f;
`;

export const YellowCircle = styled(Circle)`
  background-color: #ffd700;
`;

export const GreenCircle = styled(Circle)`
  background-color: #52c41a;
`;

export const StyledIDEContainer = styled.div`
  display: flex;
  height: 70%;
  flex-direction: column;
  width: 20%;
  position: absolute;
  border-radius: 6px;
  background-color: #191A20;
`;

export const NavBar = styled.div`
    font-family: 'Arial', sans-serif;
    display: flex;
    height: 40px;
    width: 80%;
    flex-direction: row;
    align-items: center;
    background-color: #3D3D3D;
    border-radius: 6px 6px 0 0;
    padding: 10px;

    h4 {
        left: 40%;
        top: 20%;
        position: absolute;
        color: white !important;
    }
`

export const StyledCodeEditor = styled.div`
  height: 100%;
  width: 80%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  text-wrap: nowrap;
  border-radius: 0 0 6px 6px;
  // background-color: #353535;
  background-color: #353535;
  &:focus {
    outline: none;
  }
`;


export const TextEditor = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    border-radius: 0 0 6px 0;
    font-family: "Fira Code", monospace;
    font-size: 12px;
    padding: 10px;
`