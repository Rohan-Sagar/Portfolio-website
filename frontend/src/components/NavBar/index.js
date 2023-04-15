/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { Nav, NavMenu, LeftMenu, Logo, RightMenu } from './styles/Navbar.styles';
import SwiperDropdown from './swiperDropdown';
import MenuDropdown from './menuDropdown';

function NavBar({ isBackgroundDark }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const menuDropdown = () => setShowMenu(!showMenu);
  return (
    <>
      {showMenu && <MenuDropdown/>}
      <Nav isBackgroundDark={isBackgroundDark} className={isBackgroundDark ? '' : 'nav--dark'}>
        <NavMenu>
          <LeftMenu>
            <div className="menu-btn" onClick={menuDropdown}>
              <span>MENU</span>
              <img src={'/assets/down-arrow.png'} alt="menu" />
            </div>
            <a href="/">
              <span>HOME</span>
            </a>
            <a className="skills-btn" onClick={toggleDropdown}>
              <span>SKILLS</span>
            </a>
            <a href="#experience">
              <span>EXPERIENCE</span>
            </a>
            <a href="#projects">
              <span>PROJECTS</span>
            </a>
          </LeftMenu>

          <Logo href="/">
            <span>RS</span>
          </Logo>

          <RightMenu>
            <a href='https://github.com/rohan-sagar1' target="_blank" rel="noreferrer">
              <span>
                <img src="/assets/github-mark.png" alt="github" />
              </span>
            </a>
            <a className="no-filter" href='https://www.linkedin.com/in/rohan-sagar3/' target="_blank" rel="noreferrer">
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
      {isOpen && <SwiperDropdown />}
    </>
  )
}

export default NavBar