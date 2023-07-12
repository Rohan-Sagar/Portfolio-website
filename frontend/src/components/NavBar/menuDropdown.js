import React, { useState } from "react";
import styled from "styled-components";

function MenuDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  function handleLinkClick() {
    setIsOpen(false);
  }

  return (
    <>
      <Container>
        <Menu isOpen={isOpen}>
          <a href="/" onClick={handleLinkClick}>
            <span>HOME</span>
          </a>
          <a href="#skills" onClick={handleLinkClick}>
            <span>SKILLS</span>
          </a>
          <a href="#experience" onClick={handleLinkClick}>
            <span>EXPERIENCE</span>
          </a>
          <a href="#projects" onClick={handleLinkClick}>
            <span>PROJECTS</span>
          </a>
        </Menu>
      </Container>
    </>
  );
}

export default MenuDropdown;

const Container = styled.div`
  display: none;
  @media (max-width: 1250px) {
    order: 2;
    display: flex;
    flex-direction: column;
    // align-items: center;
    flex: 0 0 100%;
    visibility: visible;
    background-color: #fff;
    position: fixed;
    top: 60px;
    z-index: 2;
    width: 100%;
    height: 100%;
  }
`;

const Menu = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  right: 30px;
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
        color: red;
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
