import React, { useState, useEffect } from 'react';
import { Nav, NavMenu, LeftMenu, Logo, RightMenu } from './styles/Navbar.styles';
import Dropdown from './swiperDropdown';
import MenuDropdown from './menuDropdown';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isBackgroundDark, setIsBackgroundDark] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const experienceSection = document.getElementById('experience');
  //     if (experienceSection) {
  //       setIsBackgroundDark(false);
  //       const rect = experienceSection.getBoundingClientRect();
  //       const isTopVisible = rect.top >= 0 && rect.top <= window.innerHeight;
  //       const isBottomVisible = rect.bottom >= 0 && rect.bottom <= window.innerHeight;
  //       if (isTopVisible || isBottomVisible) {
  //         window.location.hash = 'experience';
  //       }
  //     }
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const menuDropdown = () => setShowMenu(!showMenu);


  return (
    <>
      {isOpen && <Dropdown />}
      {showMenu && <MenuDropdown/>}
      <Nav isBackgroundDark={isBackgroundDark} className={isBackgroundDark ? '' : 'nav--light'}>
        <NavMenu>
          <LeftMenu>
            <div className="menu-btn" onClick={menuDropdown}>
              <span>MENU</span>
            </div>
            <a href="/">
              <span>HOME</span>
            </a>
            <a onClick={toggleDropdown}>
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
