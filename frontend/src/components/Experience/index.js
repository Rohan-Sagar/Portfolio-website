import { Box, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import { experienceData } from "../../constants";
import ImagesSwiper from "./imageSwiper";
import { Link } from "react-router-dom";

function Experience() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box id='experience' sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', gap: '2rem', paddingTop: '1rem', borderTop: '2px solid #777'}}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%'}}>
        <Typography
          variant="h1"
          sx={{
            marginBottom: "0.5rem",
            fontSize: {xs: "3rem", lg: "5rem"},
            fontFamily: "UfcFont, sans-serif",
            textAlign: "center",
            color: 'white'
          }}
        >
          Experience
        </Typography>
      </Box>
      <Box sx={{ width: '90%', height: '100%' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                display: 'flex',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  padding: '85px 0',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    height: '100%',
                    left: '0',
                    top: 0,
                    bottom: 0,
                    width: '60%',
                    zIndex: 1,
                    borderRadius: '0 30px 30px 0',
                    backgroundColor: 'rgb(178, 194, 111)'
                  }}
                />
                <img 
                  style={{ 
                    width: '100%',
                    position: 'relative',
                    borderRadius: '0 15px 15px 0',
                    borderTop: '2px solid #777',
                    borderRight: '2px solid #777',
                    borderBottom: '2px solid #777',
                    borderLeft: 'none',
                    zIndex: 10, 
                    objectFit: 'contain' 
                  }} 
                  src={`assets/Mintcad/1.jpg`} 
                  alt="slicer" 
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box sx={{ padding: '20px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'flex-start'}}>
                <img src={"/assets/Mintcad.svg"} alt="Mintcad Logo" style={{ height: '100px' }} />
                <Link to="https://mintcad.com" target="_blank" style={{ textDecoration: 'none' }}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      color: "white",
                      fontWeight: '700',
                      fontSize: {xs: "3rem", lg: "5rem"},
                      textDecoration: 'none',
                      '&:hover': {
                        color: '#777',
                        textDecoration: 'none', 
                        cursor: 'pointer',
                      }
                    }}
                  >
                    MINTCAD
                  </Typography>
                </Link>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '1rem'}}>
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: 'white'
                  }}
                >
                  Co-Founder / Full-Stack Developer
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "20px",
                    color: "#D1D0D0",
                    fontWeight: "bold",
                  }}
                >
                  Jan 2022 - Present
                </Typography>
                <Typography
                  variant="body"
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: 'white'
                  }}
                >
                  Mintcad is the world's first NFT marketplace for Computer-Aided Design (CAD) files. We are building a platform that allows designers to sell their CAD files as NFTs, and allows buyers to purchase these NFTs and trade them on the marketplace. Users can also list these NFTs as printables, allowing them to be printed on 3D printers.
                </Typography>

                <Typography
                  variant="body"
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: 'white'
                  }}
                >
                  View the website <Link to="https://mintcad.com" target="_blank" style={{ textDecoration: 'none', color: '#D1D0D0' }}>here</Link>.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ width: '90%', height: '100%', ml: 'auto', padding: '2rem 0' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Box sx={{ padding: '10px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '1rem'}}>
                {experienceData.map((item, index) => (
                  <ul key={index} style={{ padding: 0, margin: 0 }}>
                    <li style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", fontWeight: "bold", color: 'white' }}>{item}</li>
                  </ul>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                padding: 0,
                margin: 0,
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  padding: '85px 0',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    height: '100%',
                    right: '0',
                    top: 0,
                    bottom: 0,
                    width: '60%',
                    zIndex: 1,
                    borderRadius: '30px 0 0 30px',
                    backgroundColor: 'rgb(138, 111, 194)'
                  }}
                />
                <ImagesSwiper />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Experience;