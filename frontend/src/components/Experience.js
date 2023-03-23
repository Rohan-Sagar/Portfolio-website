import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

function Experience() {
    // const logoRef = useRef(null);

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //     ([entry]) => {
    //         if (entry.isIntersecting) {
    //         entry.target.classList.add("animate");
    //         }
    //     },
    //     { threshold: 0.5 }
    //     );

    //     if (logoRef.current) {
    //     observer.observe(logoRef.current);
    //     }

    //     return () => {
    //     if (logoRef.current) {
    //         observer.unobserve(logoRef.current);
    //     }
    //     };
    // }, []);
    return (
        <Container id="experience">
            <h1>Experience</h1>
            <Box>
                <Logo>
                    <img src={"/assets/merck-logo.svg"} alt="Merck Logo"></img>
                </Logo>
                <Details>
                    <h2>The Data Mine - Purdue University</h2>
                    <h3>Undergraduate Data Science Researcher</h3>
                    <h4>August 2021 - December 2021</h4>
                    <p>Goal: Design an NLP-based solution to forecast the experimental settings for HPLC-MS/MS Assay in 
                        Pharmacokinetics, which would minimize the trial and error required for new drug tests and 
                        accelerate drug delivery.
                    </p>
                    <li>
                        Built a React-based web app connected to a Neo4j graphical database and Flask back-end which extracts
                        information from biomedical literature using Regular Expressions and NLP.
                    </li>
                    <li>
                        Developed a Python script that utilizes the Bio.Entrez API and BeautifulSoup to extract over 
                        200 high-quality abstracts on HPLC-MS/MS from the PubMed database, 
                        thereby creating a large dataset for training.
                    </li>
                    <li>
                        Manually annotated 50 abstracts to create a data corpus to train an NLP Model.
                    </li>
                    <li>
                        Trained, evaluated, and compared several NLP models (including vanilla BERT, 
                        BioBERT, spaCy, and RoBERTa, both pre-trained and untrained) to accurately 
                        extract assays from abstracts.
                    </li>
                </Details>
            </Box>
        </Container>
    )
}

export default Experience

const Container = styled.main`
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

const Box = styled.div`
    // @media (max-width: 1250px) {
    //     flex-wrap: wrap;
    // }

    display: flex;
    flex-direction: column;
    width: 90%;
    height: 75%;
`

// const Menu = styled.div`
//     display: flex;
//     flex-direction: column;
//     background-color: blue;
//     height: 100%;
  
//     @media (max-width: 1250px) {
//       order: 1;
//       width: 50%;
//     }
// `

const Logo = styled.div`
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

const Details = styled.div`
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