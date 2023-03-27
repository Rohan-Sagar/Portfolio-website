import React from 'react'
import styled from 'styled-components'
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import image1 from "./assets/development.svg"
import image2 from "./assets/design.svg";
import image3 from "./assets/deployment.svg";
import image4 from "./assets/icons8-python-96.png";
import { DropdownTable } from "./styles/Navbar.styles";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "./styles/styles.css";

const pages = [
  {
    section: "Programming Languages",
    image: image1,
    items: [
      {
        name: "Beginner",
        technologies: ["Solidity", "Assembly", "MATLAB", "SystemVerilog"],
      },
      {
        name: "Intermediate",
        technologies: ["JavaScript", "SQL", "Embedded-C"],
      },
      {
        name: "Advanced",
        technologies: ["HTML", "C", "Python"],
      },
    ],
  },  
  {
    section: "Frameworks",
    image: image2,
    items: [
      {
        name: "Blockchain",
        technologies: ["Truffle", "Web3.js"],
      },
      {
        name: "Data Science",
        technologies: ["BeautifulSoup", "NLTK", "NumPy", "Pandas", "PyTorch", "Scikit-learn"],
      },
      {
        name: "Web Development",
        technologies: ["Django", "Flask", "Node.js", "React", "Three.js"],
      },
      {
        name: "Testing",
        technologies: ["Jest", "Selenium"],
      },
    ],
  },
  {
    section: "Cloud Storage and Database",
    image: image3,
    items: [
      {
        name: "Cloud Storage",
        technologies: ["AWS S3", "Pinata"],
      },
      {
        name: "Database",
        technologies: ["MongoDB", "MySQL", "Neo4j"],
      },
    ],
  },
  {
    section: "Other Tools",
    image: image4,
    items: [
      {
        name: "Deployment",
        technologies: ["AWS", "Heroku", "Netlify", "Vercel"],
      },
      {
        name: "Operating Systems",
        technologies: ["Linux", "Macintosh", "Windows"],
      },
      {
        name: "Project Management",
        technologies: ["Confluence", "JIRA", "Slack"],
      },
      {
        name: "Other",
        technologies: ["AWS SageMaker", "Figma", "Git", "RegEx", "spaCy"],
      },
    ],
  },
];

function Dropdown() {
  return (
    <Swiper
    modules={[Pagination]}
    slidesPerView={1}
    pagination={{ clickable: true }}
    onSwiper={(swiper) => console.log(swiper)}
>
  {pages?.map((page) => (
    <SwiperSlide key={page.section}>
      <img src={page.image} alt={page.section} />
      <div className='page-container'>  
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
)}

export default Dropdown;

