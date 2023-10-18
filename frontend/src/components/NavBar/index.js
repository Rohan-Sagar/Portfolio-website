import { useState } from "react";
import {
  NavbarStyle,
  LeftMenuStyle,
  LeftMenuTextStyle,
  RightMenuStyle,
  LogoStyle,
} from "./styles/Navbar.styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";

const pages = ["HOME", "SKILLS", "EXPERIENCE", "PROJECTS", "CONTACT"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={NavbarStyle}>
      <Container maxWidth="90%">
        <Toolbar disableGutters style={{ justifyContent: "space-between" }}>
          <Box
            sx={{
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

          <Box sx={LeftMenuStyle}>
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

          <a href="#home" style={{ maxWidth: "200px", textDecoration: "none" }}>
            <Typography variant="h6" component="div" sx={LogoStyle}>
              RS
            </Typography>
          </a>

          <Box sx={RightMenuStyle}>
            <a
              href="https://github.com/rohan-sagar1"
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
  );
}
export default ResponsiveAppBar;
