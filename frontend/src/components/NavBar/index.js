import { useState } from "react";
import {
  NavbarStyle,
  LeftMenuStyle,
  LeftMenuTextStyle,
  RightMenuStyle,
  LogoStyle,
  contentFadeIn,
  NavbarContainerStyle,
} from "./styles/Navbar.styles";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Toolbar, Container, Menu, MenuItem, IconButton, Typography } from "@mui/material";
import { pages } from "../../constants";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={NavbarContainerStyle}>
      <Box sx={NavbarStyle}>
        <Container maxWidth="90%">
          <Toolbar disableGutters style={{ padding: '4rem', justifyContent: "space-between" }}>
            <Box
              sx={{
                ...contentFadeIn,
                display: { xs: "flex", md: "none" },
                color: "black",
                fontSize: "2rem",
                cursor: "pointer",
              }}
            >
              <IconButton onClick={handleOpenNavMenu}>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    style={{ textDecoration: "none" }}
                  >
                    <a
                      href={`#${page.toLowerCase()}`}
                      key={page}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography sx={LeftMenuTextStyle}>{page}</Typography>
                    </a>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ ...contentFadeIn, ...LeftMenuStyle}}>
              {pages.map((page) => (
                <a
                  href={`#${page.toLowerCase()}`}
                  key={page}
                  style={{ textDecoration: "none" }}
                >
                  <Typography sx={LeftMenuTextStyle}>{page}</Typography>
                </a>
              ))}
            </Box>

            <Box sx={contentFadeIn}>
              <a href="#home" style={{ maxWidth: "200px", textDecoration: "none" }}>
                <Typography variant="h6" component="div" sx={LogoStyle}>
                  RS
                </Typography>
              </a>
            </Box>

<<<<<<< Updated upstream
          <a href="#home" style={{ maxWidth: "200px", textDecoration: "none" }}>
            <Typography variant="h6" component="div" sx={LogoStyle}>
              RS
            </Typography>
          </a>

          <Box sx={RightMenuStyle}>
            <a
              href="https://github.com/rohan-sagar"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/assets/github-mark.png" alt="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/rohan-sagar3/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/assets/LI-In-Bug.png" alt="linkedin" />
            </a>
            <a href="mailto:rsagar@purdue.edu" target="_blank" rel="noreferrer">
              <img src="/assets/icons8-mail-53.png" alt="email" />
            </a>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
=======
            <Box sx={{ ...contentFadeIn, ...RightMenuStyle}}>
              <a
                href="https://github.com/Rohan-Sagar"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/assets/HeaderIcons/github-mark.png" alt="github" />
              </a>
              <a
                href="https://www.linkedin.com/in/rohan-sagar3/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/assets/HeaderIcons/LI-In-Bug.png" alt="linkedin" />
              </a>
              <a href="mailto:rsagar@purdue.edu" target="_blank" rel="noreferrer">
                <img src="/assets/HeaderIcons/icons8-mail-53.png" alt="email" />
              </a>
            </Box>
          </Toolbar>
        </Container>
      </Box>
    </Box>
>>>>>>> Stashed changes
  );
}
export default ResponsiveAppBar;