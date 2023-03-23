import styled from 'styled-components';

export const DropdownTable = styled.div`
display: flex;
margin-top: 0;
margin-bottom: 0;
padding-top: 0;
padding-bottom: 0;
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 30px;
}
.grid-container > div {
  padding: 0px;
  border: none;
  white-space: nowrap;
}
.grid-container h4 {
  color: grey;
  font-size: 12px;
}
.grid-container ul {
  list-style-type: none;
  font-size: 13px;
  padding: 0px;
  margin-left: 0px;
  margin-top: -9px;
}
`;

export const Nav = styled.nav`
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 65px;
  border-radius: 1px;
  width: 90%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  z-index: 1;
  @media (max-width: 1250px) {
    width: 100%;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  margin-top: 10px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    color: black;
    text-decoration: none;
    span {
      display: flex;
      font-size: 1.11111rem;
      white-space: nowrap;
      position: relative;
      &:before {
        background-color: red;
        color: red;
        border-radius: 0px 0px 4px 4px;
        bottom: -30px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 450ms ease-in-out;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      color: red;
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
`;

export const Logo = styled.span`
  font-size: 2.31111rem !important;
  font-family: "NewFont";
  display: flex;
  align-items: center;
  cursor: pointer;
  &:before {
    background-color: red;
    color: red;
    border-radius: 0px 0px 4px 4px;
    bottom: -20px !important;
    content: "";
    height: 2px;
    left: 0px;
    opacity: 0;
    position: absolute;
    right: 0px;
    transform-origin: left center;
    transform: scaleX(0);
    transition: all 450ms ease-in-out;
    visibility: hidden;
    width: auto;
  }
  &:hover {
    color: red;
    &:before {
      transform: scaleX(1);
      visibility: visible;
      opacity: 1 !important;
    }
  }
`;

export const LeftMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const RightMenu = styled.div`
  display: flex;
  align-items: center;
  img {
    padding: 0 12px;
    height: 25px;
  }
`;
