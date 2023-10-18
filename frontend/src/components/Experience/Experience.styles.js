import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 700px;
  background-color: white;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  h1 {
    font-size: 3rem;
  }

  @media (max-width: 1250px) {
    height: auto;
    order: 1;
  }
`;

export const Box = styled.div`
  @media (max-width: 1250px) {
    flex-wrap: wrap;
    margin-bottom: 50px;
  }

  display: flex;
  flex-direction: column;
  width: 90%;
  height: 75%;
  font-family: "Poppins", sans-serif;
`;

export const ImagesContainer = styled.div`
  .swiper-images {
    background-color: transparent;
    width: '100%';
    .swiper-image {
      background-color: transparent;
      width: 100% !important;
      height: 100%;
      padding: 0;
      img {
        width: 100%;
        height: 100%;
        border-radius: 0;
        padding: 0;
        margin: 0;
      }
    }
    .swiper-button-next,
    .swiper-button-prev {
      color: #606371 !important;
      width: 10px;
    }

    .swiper-pagination-bullet {
      background: #fff !important;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  @keyframes change-color {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
  img {
    height: 100px;
    animation: change-color 5s linear infinite;
  }
  h1 {
    font-family: 'Lato', sans-serif;
    color: #434343;
  }
}
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    margin-bottom: 0.5rem;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  h4 {
    margin-top: 0;
    color: #777777;
  }

  p {
    margin-top: 0;
    font-size: 18px;
    margin-bottom: 1rem;
  }

  li {
    font-size: 17px;
    padding-left: 2rem;
    text-indent: -1.5rem;
  }
`;

// import React from "react";
// import { Container, Box, Logo, Details } from "./Experience.styles";
// import ImagesSwiper from "./imageSwiper";
// import { experienceData } from "../../constants";

// function Experience() {
//   // console.log(experienceData);
//   return (
//     <Container id="experience-section">
//       <h1 id="experience">Experience</h1>
//       <Box>
//         <Logo>
//           <img src={"/assets/Mintcad.svg"} alt="Mintcad Logo"></img>
//           <h1>MINTCAD</h1>
//         </Logo>
//         <Box>
//           <Details>
//             {experienceData.map((item) => {
//               return (
//                 <div>
//                   <h3>{item.role}</h3>
//                   <h4>{item.date}</h4>
//                   <p>{item.description}</p>
//                   {item.bullets.map((bullets) => (
//                     <li>{bullets}</li>
//                   ))}
//                 </div>
//               );
//             })}
//           </Details>
//         </Box>
//       </Box>
//     </Container>
//   );
// }

// export default Experience;
