import React, { useState } from "react";
import { Container, Box } from "./styles/Projects.styles";
import TerminalUI from "../TerminalUI/index";
import ImagesSwiper from "./imagesSwiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { projectsData } from "../../constants.js";

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
                  <h2>{projectsData[0].title}</h2>
                  <h3>{projectsData[0].role}</h3>
                  <h4>{projectsData[0].date}</h4>
                  <ul>
                    {projectsData[0].description.map((item, index) => {
                      return <li key={index}>{item}</li>;
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
                  <h2>{projectsData[1].title}</h2>
                  <h3>{projectsData[1].role}</h3>
                  <h4>{projectsData[1].date}</h4>
                  <ul>
                    {projectsData[1].description.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </ul>
                </div>
                <div className="images">
                  <img
                    src={"assets/CandyMarketplace/1.png"}
                    alt="candy-marketplace"
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-container">
                <div className="info">
                  <h2>{projectsData[2].title}</h2>
                  <h3>{projectsData[2].role}</h3>
                  <h4>{projectsData[2].date}</h4>
                  <ul>
                    {projectsData[2].description.map((item, index) => {
                      return <li key={index}>{item}</li>;
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
                  <h2>{projectsData[3].title}</h2>
                  <h3>{projectsData[3].role}</h3>
                  <h4>{projectsData[3].date}</h4>
                  <ul>
                    {projectsData[3].description.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </ul>
                </div>
                <div className="images">
                  <img
                    src={"assets/SPI.png"}
                    alt="spi-circuit"
                    style={{ width: "50%", height: "50%" }}
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Container>
    </>
  );
}

export default Projects;
