import { Box, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import { experienceData } from "../../constants";
import ImagesSwiper from "./imageSwiper";

function Experience() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  
  return (
    <Grid
      container
      spacing={2}
      sx={{ marginTop: "2rem", backgroundColor: "white", padding: "1rem 5rem" }}
    >
      <Grid item xs={12}>
        <Typography
          variant="h1"
          sx={{
            marginBottom: "0.5rem",
            fontSize: "3rem",
            fontFamily: "UfcFont, sans-serif",
            textAlign: "center",
          }}
        >
          Experience
        </Typography>
      </Grid>
      <Grid container item spacing={2} sx={{ display: "flex" }}>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                img: {
                  height: "100px",
                },
                h1: {
                  fontFamily: "'Lato', sans-serif",
                  color: "#434343",
                  fontSize: "3rem",
                },
              }}
            >
              <img src={"/assets/Mintcad.svg"} alt="Mintcad Logo" />
              <h1>MINTCAD</h1>
            </Box>
            {experienceData.map((item, index) => (
              <Box
                key={index}
                sx={{
                  marginTop: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  {item.role}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "17px",
                    color: "#777777",
                    fontWeight: "bold",
                  }}
                >
                  {item.date}
                </Typography>
                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "19px",
                      fontWeight: "bold",
                    }}
                  >
                    {item.description}
                  </Typography>
                  <ul>
                    {item.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>
                        <Typography
                          variant="body2"
                          sx={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "18px",
                          }}
                        >
                          {bullet}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: "flex", marginTop: isMdUp ? '3rem' : '0', alignItems: "center" }}>
          <ImagesSwiper />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Experience;
