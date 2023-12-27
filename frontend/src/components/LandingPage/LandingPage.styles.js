export const containerStyle = {
  display: "flex",
  // flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: {xs: '0.5rem ', lg: '3rem'},
  marginTop: '10rem',
  width: "100%",
  height: "100%",
  backgroundColor: "#191a20",
};

export const leftMenuStyle = {
  display: 'flex', 
  flexDirection: 'column', 
  justifyContent: 'center', 
  alignItems: 'flex-start',
  // backgroundColor: 'blue',
  gap: '2rem',
};

export const tagWrapperStyle = {
  display: 'flex', 
  flexWrap: 'wrap', 
  justifyContent: 'flex-start'
};

export const tagStyle = {
  fontSize: {xs: '10px', lg: '14px'},
  padding: '2px 5px',
  color: 'white',
  backgroundColor: '#424247',
  fontFamily: "Poppins, sans-serif",
  marginRight: '5px',
  marginBottom: '5px',
  borderRadius: '3px',
  boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.15), 0px 2px 2px rgba(0, 0, 0, 0.15), 0px 3px 3px rgba(0, 0, 0, 0.15)',
  whiteSpace: 'nowrap',
};

export const nameStyle = {
  color: 'white', 
  fontSize: {xs: '32px', lg: '64px'},
  fontFamily: "UfcFont",
  fontWeight: '700', 
  textTransform: 'uppercase'
};

export const schoolDetailsStyle = {
  color: 'white',
  fontFamily: "UfcFont",
  fontSize: {xs: '14px', lg: '24px'},
};

export const leftMenuNumberStyle = {
  fontSize: {xs: '32px', md: '52px'},
  paddingBottom: {xs: '1rem', lg: '0rem'}, 
  fontWeight: '700',
  color: 'white',
  fontFamily: 'UfcSecondaryFont'
};

export const leftMenuNumberTextStyle = {
  color: 'white',
  fontFamily: "UfcFont",
  fontSize: {xs: '10px', lg: '20px'},
  paddingTop: '2rem', 
  textTransform: 'uppercase'
};

export const otherInfoWrapper = {
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  borderBottom: {xs: '1px solid red', lg: '4px solid red'}
};

export const otherInfoStyle = {
  display: 'flex', 
  paddingTop: '1rem', 
  gap: {xs: '0.5rem', lg: '2rem'} 
};

export const imgWrapperStyle = {
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
  objectFit: 'contain',
};

export const rightMenuStyle = {
  display: 'flex', 
  height: '100%',
  width: '100%',
  flexDirection: 'column', 
  justifyContent: 'center', 
  alignItems: 'center',
  gap: '2rem',
  paddingLeft: {xs: '0rem', lg: '3rem'},
  paddingTop: {xs: '3rem', lg: '0rem'},
  paddingBottom: {xs: '1rem', lg: '0rem'}
};

export const chartBoxStyle = {
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
  width: '100%'
};

export const rightMenuTextStyle = {
  color: 'white', 
  fontFamily: "UfcFont", 
  fontSize: "1.5rem", 
  textAlign: 'center'
};

export const buttonOption = (isRed) => ({
  width: {xs: '150px', lg: '200px'},
  backgroundColor: isRed ? "rgb(143, 2, 14)" : "rgb(41, 71, 144)",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  borderRadius: "2px",
  padding: "1rem 2rem",
  cursor: "pointer",
  transition: "all 0.2s",
  userSelect: "none",
  '&:active': {
    transform: "translateY(1px)"
  },
  '&::before': {
    content: '""',
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.2s",
    zIndex: -1
  }
});

export const buttonTextStyle = {
  color: 'white', 
  fontFamily: "'Share Tech Mono', monospace",
  letterSpacing: "2px", 
  textTransform: "uppercase",
  fontSize: {xs: '16px', lg: '18px'},
  textAlign: 'center'
};
