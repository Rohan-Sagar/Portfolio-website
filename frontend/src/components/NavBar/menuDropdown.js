import React from 'react'
import styled from 'styled-components'

function MenuDropdown() {
  return (
    <>
      <Container>
        <Menu>
          <a href="/">
            <span>HOME</span>
          </a>
          <a href="/skills">
            <span>SKILLS</span>
          </a>
          <a href="/experience">
            <span>EXPERIENCE</span>
          </a>
          <a href="/projects">
            <span>PROJECTS</span>
          </a>
        </Menu>
      </Container>
    </>
  )
}

export default MenuDropdown

const Container = styled.div`
  display: none;
  @media (max-width: 768px) {
    order: 2;
    display: flex;
    flex-direction: column;
    // align-items: center;
    flex: 0 0 100%;
    visibility: visible;
    background-color: #fff;
    margin-top: 17%;
    height: 100%;
  }
`

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
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

`