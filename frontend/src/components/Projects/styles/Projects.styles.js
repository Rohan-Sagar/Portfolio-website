import styled from 'styled-components';

export const Container = styled.main`
  @media (max-width: 1250px) {
    height: auto;
    justify-content: flex-start;
    order: 2;
  }
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 800px;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 3rem;
    color: white;
  }
`;

export const Box = styled.div`
  // @media (max-width: 1250px) {
  //     flex-wrap: wrap;
  // }
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 75%;
  .swiper {
    width: 100%;
    font-family: 'Poppins', sans-serif;
    height: 100%;
    margin: -100px auto auto -135px;
    left: 150px;
    border: none;
    position: relative;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  }
  
  .swiper-wrapper {
    background-color: #1C1D24;
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
  
  .swiper-button-next, .swiper-button-prev {
    color: #7B7B7B !important;
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

  @media (max-width: 1023px) {
    .swiper {
      top: 100px;
    }
  }

`

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
    .swiper-button-next, .swiper-button-prev {
      color: #606371 !important;
      width: 10px;
    }

    .swiper-pagination-bullet {
      background: #fff !important;
    }
  }
`