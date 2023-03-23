import React, { useEffect, useRef } from 'react';
import { Container, Box, Logo, Details } from './Experience.styles';

function Experience() {
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
                        Manually annotated keywords in 50 abstracts to create NER entities for a data corpus to train 
                        an NLP model, and further used RegEx to annotate keywords in abstracts, 
                        reducing manual annotation time by 200%
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

