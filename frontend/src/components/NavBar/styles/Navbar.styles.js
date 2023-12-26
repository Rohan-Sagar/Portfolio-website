export const NavbarContainerStyle = {
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
  padding: {xs: '0 0.5rem', md: '0 2rem' }, 
  position: "fixed", 
  height: '0px',
  top: '7.5%', 
  zIndex: '1000',
  animationName: "slideDown",
  animationDuration: "2s",
  animationTimingFunction: "ease-out",
  animationDelay: "0.5s",
  animationFillMode: "forwards",
  "@keyframes slideDown": {
    "0%": {
      width: "0",
      height: "5px",
    },
    "50%": {
      width: "100%",
      height: "5px",
    },
    "100%": {
      height: "65px",
      width: "100%",
    },
  },
};

export const NavbarStyle = {
  display: 'flex',
  backgroundColor: "white",
  zIndex: 100,
  alignItems: "center",
  height: '0px',
  justifyContent: "center",
  animationName: "slideDown",
  animationDuration: "2s",
  animationTimingFunction: "ease-out",
  animationDelay: "0.5s",
  animationFillMode: "forwards",
  "@keyframes slideDown": {
    "0%": {
      width: "0",
      height: "5px",
    },
    "50%": {
      width: "100%",
      height: "5px",
    },
    "100%": {
      height: "65px",
      width: "100%",
    },
  },
};

export const contentFadeIn = {
  opacity: 0,
  display: "flex",
  animationName: "fadeIn",
  animationDuration: "2s",
  animationTimingFunction: "ease-out",
  animationDelay: "2.5s",
  animationFillMode: "forwards",
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
};

export const smallMenu = {
  display: { xs: "flex", md: "none" },
  color: "black",
  fontSize: "2rem",
  cursor: "pointer",
  opacity: 0,
  animationName: "fadeIn",
  animationDuration: "2s",
  animationTimingFunction: "ease-out",
  animationDelay: "2.5s",
  animationFillMode: "forwards",
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
}

export const LeftMenuStyle = {
  display: { xs: "none", md: "flex" },
  gap: "1rem",
  alignItems: "center",
};

export const LeftMenuTextStyle = {
  textDecoration: "none",
  position: "relative",
  fontSize: "20px",
  fontFamily: "UfcFont, sans-serif",
  color: "black",
  "&:hover": {
    color: "red",
    "&:before": {
      content: '""',
      position: "absolute",
      bottom: "-5px",
      left: 0,
      right: 0,
      height: "2px",
      backgroundColor: "red",
      transform: "scaleX(1)",
      visibility: "visible",
      opacity: 1,
    },
  },
  "&:before": {
    content: '""',
    position: "absolute",
    bottom: "-5px",
    left: 0,
    right: 0,
    height: "2px",
    backgroundColor: "red",
    transform: "scaleX(0)",
    visibility: "hidden",
    opacity: 0,
    transition: "all 450ms ease-in-out",
  },
};

export const LogoStyle = {
  display: { xs: "none", md: "flex" },
  color: "black",
  position: "relative",
  fontSize: "2.31111rem !important",
  fontFamily: "NewFont",
  "&:hover": {
    color: "red",
    "&:before": {
      content: '""',
      position: "absolute",
      bottom: "0px",
      left: 0,
      right: 0,
      height: "2px",
      backgroundColor: "red",
      transform: "scaleX(1)",
      visibility: "visible",
      opacity: 1,
    },
  },
  "&:before": {
    content: '""',
    position: "absolute",
    bottom: "0px",
    left: 0,
    right: 0,
    height: "2px",
    backgroundColor: "red",
    transform: "scaleX(0)",
    visibility: "hidden",
    opacity: 0,
    transition: "all 450ms ease-in-out",
  },
};

export const RightMenuStyle = {
  display: "flex",
  gap: "3rem",
  alignItems: "center",
  a: {
    position: "relative",
    "&:hover": {
      color: "red",
      "&:before": {
        content: '""',
        position: "absolute",
        bottom: "0px",
        left: 0,
        right: 0,
        height: "2px",
        backgroundColor: "red",
        transform: "scaleX(1)",
        visibility: "visible",
        opacity: 1,
      },
    },
    "&:before": {
      content: '""',
      position: "absolute",
      bottom: "0px",
      left: 0,
      right: 0,
      height: "2px",
      backgroundColor: "red",
      transform: "scaleX(0)",
      visibility: "hidden",
      opacity: 0,
      transition: "all 450ms ease-in-out",
    },
  },
  img: {
    width: "30px",
    height: "auto",
  },
};
