import React, { useState } from 'react';
import { Nav, NavMenu, LeftMenu, Logo, RightMenu } from './styles/Navbar.styles';
import Dropdown from './swiper';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <>
      {isOpen && <Dropdown />}
      <Nav>
        <NavMenu>
          <LeftMenu>
            <a href="/">
              <span>HOME</span>
            </a>
            <a onClick={toggleDropdown} href='#skills'>
              <span>SKILLS</span>
            </a>
            <a href="#experience">
              <span>EXPERIENCE</span>
            </a>
            <a href="#projects">
              <span>PROJECTS</span>
            </a>
          </LeftMenu>

          <a href="/">
            <Logo>RS</Logo>
          </a>

          <RightMenu>
            <a href='https://github.com/rohan-sagar1' target="_blank" rel="noreferrer">
              <span>
                <img src="/assets/github-mark.png" alt="github" />
              </span>
            </a>
            <a href='https://www.linkedin.com/in/rohan-sagar3/' target="_blank" rel="noreferrer">
              <span>
                <img src="/assets/LI-In-Bug.png" alt="linkedin"/>
              </span>
            </a>
            <a href='mailto:rsagar@purdue.edu' target="_blank" rel="noreferrer">
              <span>
                <img src="/assets/icons8-mail-53.png" alt="email"/>
              </span>
            </a>
          </RightMenu>
        </NavMenu>
      </Nav>
    </>
  )
}

export default NavBar

