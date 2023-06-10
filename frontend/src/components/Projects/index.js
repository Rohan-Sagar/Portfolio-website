import React, { useState } from 'react';
import { Container, Box } from './styles/Projects.styles';
import TerminalUI from '../TerminalUI/index';
import ImagesSwiper from './imagesSwiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects_data = [
    {
      id: 1,
      title: "Julienne - Slicer Software",
      role: "Full-stack Developer",
      date: "June 2022 - Present",
      description: [
        "Developed a web-based 3D slicer application using Kiri:Moto open source project as inspiration.",
        "Planned and collaborated on user interface design using Figma, facilitating team-wide design efforts.",
        "Enabled G-code legend view and selection of infill patterns to optimize strength and accuracy.",
        "Integrated 3D printing via USB connection to printer and web serial communcation using Vanilla JS.",
        "Designed a printer control panel that includes: Live layer view, line-by-line G-code sender, live temperature monitoring, and live printer status.",
      ],
    },
    {
      id: 2,
      title: "Candy marketplace",
      role: "Full-stack Developer",
      date: "Nov 2022 - Nov 2022",
      description: [
        "Developed a website for trick or treat reviewing and candy marketplace using MERN stack.",
        "Developed multiple RESTful APIs using Node.js and Express.js to gather review and user data in a MongoDB database.",
        "Awarded for having the best authentication system at the Demon Hacks hackathon."
      ],
    },
    {
      id: 3,
      title: "Fundamental Analysis Bot",
      role: "Python Developer",
      date: "Aug 2021 - May 2022",
      description: [
        "Developed bot using SimFin dataset and FinRL deep learning algorithms to analyze securities and make informed investment decisions.",
        "Trained bot using FinRL algorithms, including A2C, DDPG, and PPO.",
        "Evaluated the performance of the bot using various metrics, such as returns on investment and Sharpe ratio."
      ],
    },
    {
      id: 4,
      title: "Serial Peripheral Interface - ECE 362",
      role: "Embedded-C Lab",
      date: "Lab Assignment",
      description: [
        "Initialized an SPI interface by 'bit-banging' the SCK, MOSI, and MISO pins.",
        "Verified the 'bit-banging' method using the logic tool in Analog Discovery 2.",
        "Displayed a 'Hello World' message on the SPI OLED display.",
        "Triggered the SPI DMA transfer to write characters using a circular buffer.",
        "Created a game that was controlled by the SPI, OLED, and the Keypad.",
      ],
    }
  ]


  function Projects() {
    return (
      <>
        <Container id="projects-section">
          <h1 id="projects">Projects</h1>
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
              <SwiperSlide>
                <div className="swiper-container">
                  <div className="info">
                    <h2>{projects_data[0].title}</h2>
                    <h3>{projects_data[0].role}</h3>
                    <h4>{projects_data[0].date}</h4>
                    <ul>
                      {projects_data[0].description.map((item, index) => {
                        return <li key={index}>{item}</li>
                      })}
                    </ul>
                  </div>
                  <div className="images">
                    <ImagesSwiper />
                  </div>
                </div>
              </SwiperSlide>
  
              <SwiperSlide>
              <div className="swiper-container">
                  <div className="info">
                    <h2>{projects_data[1].title}</h2>
                    <h3>{projects_data[1].role}</h3>
                    <h4>{projects_data[1].date}</h4>
                    <ul>
                      {projects_data[1].description.map((item, index) => {
                        return <li key={index}>{item}</li>
                      })}
                    </ul>
                  </div>
                  <div className="images">
                    <img src={"assets/CandyMarketplace/1.png"} alt="candy-marketplace" />
                  </div>
              </div>
              </SwiperSlide>
              
              <SwiperSlide>
              <div className="swiper-container">
                  <div className="info">
                    <h2>{projects_data[2].title}</h2>
                    <h3>{projects_data[2].role}</h3>
                    <h4>{projects_data[2].date}</h4>
                    <ul>
                      {projects_data[2].description.map((item, index) => {
                        return <li key={index}>{item}</li>
                      })}
                    </ul>
                  </div>
                  <div className="images">
                    <TerminalUI />
                  </div>
              </div>
              </SwiperSlide>
  
              <SwiperSlide>
              <div className="swiper-container">
                <div className="info">
                  <h2>{projects_data[3].title}</h2>
                  <h3>{projects_data[3].role}</h3>
                  <h4>{projects_data[3].date}</h4>
                  <ul>
                    {projects_data[3].description.map((item, index) => {
                      return <li key={index}>{item}</li>
                    })}
                  </ul>
                </div>
                <div className="images">
                  <img src={"assets/SPI.png"} alt="spi-circuit" style={{width: "50%", height: "50%"}} />
                </div>
              </div>
              </SwiperSlide>
            </Swiper>
          </Box>
        </Container>
      </>
    )
  }

export default Projects;
