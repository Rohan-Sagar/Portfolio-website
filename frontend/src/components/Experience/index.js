import React from "react";
import { Container, Box, Logo, Details } from "./Experience.styles";
import { experienceData } from "../../constants";

function Experience() {
  // console.log(experienceData);
  return (
    <Container id="experience-section">
      <h1 id="experience">Experience</h1>
      <Box>
        <Logo>
          <img src={"/assets/merck-logo.svg"} alt="Merck Logo"></img>
        </Logo>
        <Details>
          {experienceData.map((item) => {
            return (
              <div>
                <h2>{item.title}</h2>
                <h3>{item.position}</h3>
                <h4>{item.date}</h4>
                <p>{item.description}</p>
                {item.bullets.map((bullets) => (
                  <li>{bullets}</li>
                ))}
              </div>
            );
          })}
        </Details>
      </Box>
    </Container>
  );
}

export default Experience;
