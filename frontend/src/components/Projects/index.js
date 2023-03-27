import React from 'react';
import { Container, Box } from './styles/Projects.styles';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import TerminalUI from '../TerminalUI/index';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Projects() {
  return (
    <>
      <Container>
        <br/><br/>
        <h1>Projects</h1>
        <Box>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={{ clickable: true }}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            {/* <SwiperSlide>
              <div>
                <h2>Julienne - Slicer Software</h2>
                <h3>Full-stack Developer</h3>
                <h4>June 2022 - Jan 2023</h4>
                <li>
                  Developed a web-based 3D slicer software using Kiri:Moto open source project as inspiration.
                </li>
                <li>
                  Planned and collaborated on user interface design using Figma, 
                  facilitating team-wide design efforts.
                </li>
                <li>
                  Implemented hybrid database solution using AWS S3 and Pinata 
                  IPFS for CAD file storage.
                </li>
                <li>
                  Integrated real-time monitoring for 3D printing process using 
                  OctoPrint plugins, allowing quick issue detection.
                </li>
                <li>
                  Enabled G-code legend viewing and selection of infill patterns 
                  for optimized strength and accuracy.
                </li>
                <li>
                  Expanded range of supported CAD designs by integrating 3DM file format.
                </li>
              </div>
            </SwiperSlide> */}
            <SwiperSlide>
              <div>
                <h2>Candy marketplace</h2>
                <h3>Full-stack Developer</h3>
                <h4>Nov 2022 - Nov 2022</h4>
                <li>Add bullets from Resume</li>
                {/* <li>
                  Developed a website for trick or treat reviewing and candy 
                  marketplace using MERN stack.
                </li>
                <li>
                  Developed multiple RESTful APIs using Node.js and Express.js 
                  to gather review and user data in a MongoDB database.
                </li>
                <li>
                  Awarded for having the best authentication system at the 
                  Demon Hacks hackathon. 
                </li> */}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <h2>Fundamental Analysis Bot</h2>
                <h3>Python Developer</h3>
                <h4>Aug 2021 - May 2022</h4>
                <li>Add bullets from Resume</li>
                <li>Add bullets from Resume</li>
                <li>Add bullets from Resume</li>
                <li>Add bullets from Resume</li>
              </div>
              <TerminalUI />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Container>
    </>
  )
}

export default Projects;
                {/* <li>
                  Developed bot using SimFin dataset and FinRL deep learning 
                  algorithms to analyze securities and make informed investment 
                  decisions.
                </li>
                <li>
                  Trained bot using FinRL algorithms, including A2C, 
                  DDPG, and PPO. 
                </li>
                <li>
                  Evaluated the performance of the bot using various metrics, such 
                  as returns on investment and Sharpe ratio.
                </li> */}