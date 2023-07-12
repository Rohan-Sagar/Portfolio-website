import React  from "react";
import image1 from "./SwiperImages/development.svg";
import image2 from "./SwiperImages/design.svg";
import image3 from "./SwiperImages/deployment.svg";
import image4 from "./SwiperImages/image.svg";
import { DropdownTable } from "./styles/Navbar.styles";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { navBarData } from "../../constants";
import "swiper/css";
import "swiper/css/pagination";
import "./styles/styles.css";

const images = [image1, image2, image3, image4];

function SwiperDropdown({ isBackgroundDark }) {
  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      isBackgroundDark={isBackgroundDark}
      className={isBackgroundDark ? "swiper-light" : ""}
    >
      {navBarData?.map((page) => (
        <SwiperSlide key={page.section}>
          <img src={images} alt={page.section} />
          <div className="page-container">
            <h2>{page.section}</h2>
            {page.section === "Programming Languages" && (
              <DropdownTable>
                <div className="grid-container">
                  <div>
                    <h4>Beginner</h4>
                    <ul>
                      {page.items[0].technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Intermediate</h4>
                    <ul>
                      {page.items[1].technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Advanced</h4>
                    <ul>
                      {page.items[2].technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </DropdownTable>
            )}

            {page.section === "Frameworks" && (
              <DropdownTable>
                <div className="grid-container">
                  <div>
                    <h4>Blockchain</h4>
                    <ul>
                      {page.items[0].technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Data Science</h4>
                    <ul>
                      {page.items[1].technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Web Development</h4>
                    <ul>
                      {page.items[2].technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Testing</h4>
                    <ul>
                      {page.items[3].technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </DropdownTable>
            )}

            {page.section === "Cloud Storage and Database" && (
              <DropdownTable>
                <div className="grid-container">
                  <div>
                    <h4>Cloud Storage</h4>
                    <ul>
                      {page.items[0].technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Database</h4>
                    <ul>
                      {page.items[1].technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </DropdownTable>
            )}
            {page.section === "Other Tools" && (
              <DropdownTable>
                <div className="grid-container">
                  <div>
                    <h4>Deployment</h4>
                    <ul>
                      {page.items[0].technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Operating Systems</h4>
                    <ul>
                      {page.items[1].technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Project Management</h4>
                    <ul>
                      {page.items[2].technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Other</h4>
                    <ul>
                      {page.items[3].technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </DropdownTable>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperDropdown;
