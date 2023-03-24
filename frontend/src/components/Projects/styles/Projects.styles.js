import styled from 'styled-components';

export const Container = styled.main`
    @media (max-width: 1250px) {
        height: auto;
        justify-content: flex-start;
        order: 1;
    }
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 85%;
    position: absolute;
    top: 170%;
    justify-content: center;
    align-items: center;
    h1 {
        font-size: 3rem;
        color: white;
    }
`

export const Box = styled.div`
    // @media (max-width: 1250px) {
    //     flex-wrap: wrap;
    // }

    display: flex;
    flex-direction: column;
    width: 90%;
    height: 75%;
    .swiper {
      width: 90%;
      font-family: 'UfcFont', sans-serif;
      height: 75%;
      margin: 40px auto auto -110px;
      border: none;
    }
    
    .swiper-wrapper {
      background-color: #fff;
    }
    
    .swiper-slide {
      height: 90%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
    
    .swiper-slide div {
      position: relative;
      top: 30%;
      left: 5%;
      h2 {
        font-size: 2rem;
        color: black;
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
        font-size: 1.2rem;
        list-style-type: disc;
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
`