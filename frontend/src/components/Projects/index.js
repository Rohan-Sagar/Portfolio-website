import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { projectsData } from "../../constants.js";

function Projects() {
  const theme = useTheme();
  const isXsUp = useMediaQuery(theme.breakpoints.up('xs'));
  return (
    <Box id='projects' sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', padding: '1rem 0 2rem 0', borderTop: '2px solid #777'}}>
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
          Projects
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '95%', height: '100%', mx: 'auto', backgroundColor: '#1c1d24', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)', padding: '1rem'}}>
        <Swiper
          modules={[Navigation, Pagination, Keyboard]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          keyboard
        >
          {projectsData.map((project, index) => (
            <SwiperSlide key={index}>
              <Grid container spacing={1}>
                <Grid item xs={12} lg={7}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', width: '100%', height: '100%', flexDirection: 'column', gap: '1rem', padding: '1rem 2.5rem 0 2.5rem'}}>
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: {xs: "18px", lg: "32px"},
                        marginBottom: "1rem",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: 'bold',
                        textAlign: "center",
                        color: 'white'
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: {xs: "16px", lg: "24px"},
                        fontFamily: "Poppins, sans-serif",
                        textAlign: "center",
                        color: '#DFDFDF'
                      }}
                    >
                      {project.role}
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: {xs: "14px", lg: "18px"},
                        fontFamily: "Poppins, sans-serif",
                        textAlign: "center",
                        color: '#777',
                        fontWeight: 'bold'
                      }}
                    >
                      {project.date}
                    </Typography>
                    {project?.link && (
                      <Typography
                        variant="h4"
                        sx={{
                          fontSize: {xs: "12px", lg: "16px"},
                          fontFamily: "Poppins, sans-serif",
                          textAlign: "center",
                          color: 'white',
                          textDecoration: 'none',
                          fontWeight: 'bold'
                        }}
                      >
                        {`View project`}
                        <Link to={project.link} style={{ color: '#D1D0D0', textDecoration: 'none' }}>
                          {` here`}
                        </Link>
                      </Typography>
                    )}
                    <ul>
                      {project.description.map((item, index) => {
                        return <li style={{ color: 'white', fontSize: isXsUp ? '1rem' : '14px', fontFamily: "Poppins, sans-serif" }} key={index}>{item}</li>;
                      })}
                    </ul>
                  </Box>
                </Grid>
              </Grid>
            </SwiperSlide>  
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}

export default Projects;