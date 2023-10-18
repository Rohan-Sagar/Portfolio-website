export const NavbarStyle = {
  backgroundColor: "white",
  maxWidth: "95%",
  left: "50%",
  top: "7.5%",
  padding: "1rem",
  transform: "translateX(-50%)",
  zIndex: 2,
  alignItems: "center",
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
      width: "95%",
      height: "5px",
    },
    "100%": {
      height: "65px",
      width: "95%",
    },
  },
};

export const LeftMenuStyle = {
  display: { xs: "none", md: "flex" },
  gap: "1rem",
  alignItems: "center",
};

export const LeftMenuTextStyle = {
  textDecoration: "none",
  position: "relative",
  fontSize: "1.11111rem",
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
