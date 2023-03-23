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
  margin-left: 2%;
  flex-direction: column;
  width: 50%;
  position: absolute;
  border-radius: 6px;
  box-shadow: 0px -5px 10px 0px rgba(0, 0, 0, 0.5);
  background-color: white;
`;

export const NavBar = styled.div`
    font-family: 'Arial', sans-serif;
    display: flex;
    height: 40px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    background-color: #3D3D3D;
    border-radius: 6px 6px 0 0;
    padding: 10px;

    h3 {
        left: 45%;
        position: absolute;
        color: white;
    }
`

export const StyledCodeEditor = styled.div`
  height: 100%;
  width: 100%;
  border: none;
  display: flex;
  flex-direction: row;
  text-wrap: nowrap;
  border-radius: 0 0 6px 6px;
  background-color: #353535;
  &:focus {
    outline: none;
  }
`;

export const LineNumber = styled.div`
    display: flex;
    flex-direction: column;
    width: 2rem;
    height: 100%;
    color: #888;
    z-index: 1;
    font-size: 12px;
    background-color: #3D3D3D;
    border-radius: 0 0 0 6px;
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
    p {
        margin: 0;
        color: #AE0FC6;
        span {
            color: #219D02;
        }
        label {
            color: yellow;
        }
    }
`