import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { projectsData } from "../../constants.js";
import { headingWrapper, projectsBox, projectsContainer, projectsHeaderText } from "./styles/Projects.styles.js";

function Projects() {
  const theme = useTheme();
  const isXsUp = useMediaQuery(theme.breakpoints.up('xs'));
  return (
    <Box id='projects' sx={projectsContainer}>
      <Box sx={headingWrapper}>
        <Typography
          variant="h1"
          sx={projectsHeaderText}
        >
          Projects
        </Typography>
      </Box>
      <Box sx={projectsBox}>
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
                <Grid item xs={12}>
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
                        {`View project `}
                        <Link to={project.link} style={{ color: '#D1D0D0', textDecoration: 'none' }}>
                          {`here`}
                        </Link>
                      </Typography>
                    )}
                    <ul>
                      {project.description.map((item, index) => {
                        if (typeof item === 'string') {
                          return (
                            <li style={{ color: 'white', fontSize: isXsUp ? '1rem' : '16px', fontFamily: "Poppins, sans-serif" }} key={index}>
                              {item}
                            </li>
                          );
                        } else {
                          return (
                            <li style={{ color: 'white', fontSize: isXsUp ? '1rem' : '16px', fontFamily: "Poppins, sans-serif" }} key={index}>
                              {item.text}
                              {item.links && item.links.map((link, linkIndex) => (
                                <> 
                                  {" "} 
                                  <a href={link.url} style={{ color: '#D1D0D0', textDecoration: 'none' }} key={linkIndex}>
                                    {link.text}
                                  </a>
                                </>
                              ))}
                            </li>
                          );
                        }
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