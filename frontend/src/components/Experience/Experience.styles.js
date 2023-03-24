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
    top: 90%;
    background-color: white;
    justify-content: center;
    align-items: center;
    h1 {
        font-size: 3rem;
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
`

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
    animation: change-color 5s linear infinite;
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
        margin-bottom: 0.5rem;
        padding-left: 2rem;
        text-indent: -1.5rem;
    }
`