import styled from "styled-components";

export const Container = styled.main`
  @media (max-width: 1250px) {
    height: auto;
    justify-content: flex-start;
    order: 2;
  }
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 3rem;
    color: white;
  }
`;

export const Logo = styled.div`
  display: flex;
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
    width: 300px !important;
    animation: change-color 5s linear infinite;
  }
}
`;

export const ContainerBox = styled.div`
  @media (max-width: 1250px) {
    flex-wrap: wrap;
  }
  @media (max-width: 768px) {
    .swiper-container {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
    .info, .images {
      width: 100%;
    }
    h2, h3, h4 {
      font-size: 1rem;  // Adjust as needed
    }
    li {
      font-size: 0.8rem;  // Adjust as needed
    }
    .images img {
      width: 100%;
      height: auto;
    }
  }
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 75%;
  .swiper {
    width: 100%;
    z-index: 1;
    font-family: "Poppins", sans-serif;
    height: 100%;
    margin: -100px auto auto -135px;
    left: 150px;
    border: none;
    position: relative;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  }

  .swiper-wrapper {
    background-color: #1c1d24;
  }

  .swiper-slide {
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide .swiper-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 35px;
    left: 3%;
    color: white;
    h2 {
      font-size: 2rem;
      color: white;
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 0;
    }

    h4 {
      font-size: 1rem;
      margin-top: 0;
      color: #777777;
    }

    li {
      font-size: 1rem;
      list-style-type: disc;
      margin-top: 5px;
    }
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #7b7b7b !important;
  }

  .swiper-pagination-bullet {
    background: #fff !important;
  }

  .images {
    width: 50%;
    height: 100%;
    display: flex;
    left: 5%;
    justify-content: center;
    align-items: center;
  }

  .info {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 1250px) {
    .swiper-slide .swiper-container {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
    .swiper {
      top: 100px;
    }
    .images {
      width: 100%;
      height: 100% !important;
    }
    .info {
      width: 100%;
    }
  }
`;

export const ImagesContainer = styled.div`
  .swiper-images {
    background-color: transparent;
    width: 90%;
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
