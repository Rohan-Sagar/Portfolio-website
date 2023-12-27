export const tagsInfo = [
  "Major: Computer Engineering",
  "Minor: Economics",
  "Software Engineering",
  "Python Developer",
];

export const experienceData = [
  "Co-led the development and launch of a CAD NFT marketplace startup, utilizing React, Node.js, and Solidity, and integrating AWS, Docker, Mailgun, and Pinata, thereby establishing a robust infrastructure.",
  "Achieved 100% transaction validation accuracy in NFT transactions by implementing an Ethers.js based protocol and RPC providers, ensuring optimal reliability and security.",
  "Enhanced user engagement by 40%, as indicated by increased page visits and session durations, by developing a CAD to PNG conversion tool using Three.js, resulting in more visually appealing and interactive displays.",
  "Incorporated single-use printing in the Jullienne slicer, synchronizing APIs to cross-check payment and print completion status, thereby streamlining the operational process.",
  "Collaborated with an SEO analyst to identify and integrate effective SEO strategies into the code, significantly improving online visibility and search rankings.",
  "Designed and developed a comprehensive help center, blogs, and a printer portal for tracking earnings and loading, utilizing Redux for efficient state management and improved user interface responsiveness.",
  "Refactored hundreds of lines of code in the Jullienne, Mintcad, and Admin panel, optimizing performance and reducing susceptibility to bugs, thereby enhancing overall system reliability."
];

export const projectsData = [
  {
    id: 1,
    title: "Feature Matching and SLAM Visualization",
    link: "https://github.com/Rohan-Sagar/Superglue-Implementation",
    role: "ECE 570 - Artificial Intelligence (Final Project)",
    date: "Sept 2023 - Dec 2023",
    description: [
      "Re-engineered SuperGlue feature matching algorithm using SIFT descriptors and re-calibrated attentional graph neural networks to align high-dimensional feature spaces.",
      "Conducted detailed comparative study between SuperGlue with SuperPoint and SIFT with brute-force/FLANN-based matching, employing metrics such as AUC@X, Precision, and Matching Score.",
      "Developed a SLAM visualization application resulting in ≈ 98% accurate point cloud visualizations as measured by frame-by-frame comparisons, by utilizing SuperGlue algorithm and Open3D Library.",
      "Skills: OpenCV · Visual SLAM · Neural Networks · Graph Neural Networks (GNN) · Python (Programming Language)",
    ],
  },
  {
    id: 2,
    title: "npmSecure-Hub",
    link: "https://github.com/Rohan-Sagar/npmSecure-Hub",
    role: "ECE 461: Software Engineering (Final Project)",
    date: "Sept 2023 - Dec 2023",
    description: [
      "Streamlined module selection by engineering APIs (compliant with OpenAPI (Swagger) specification) in Node.js for efficient package evaluation using metrics like Bus Factor and Ramp Up time.",
      "Successfully integrated backend APIs for package uploads, package ratings, and user authentication with a React frontend, streamlining the user interface and enhancing overall system functionality.",
      "Utilized GitHub Actions for CI/CD, deploying the project on AWS EC2 and Elastic Beanstalk. Managed package uploads using AWS S3 and stored package metadata in MongoDB.",
      "Developed comprehensive test suites, ensuring high reliability and performance of the software components.",
      "Utilized: AWS (S3, EC2, Elastic Beanstalk, IAM), Jest, NodeJS, MongoDB TypeScript, Postman, ThreatModeler.",
      "Skills: Continuous Integration and Continuous Delivery (CI/CD) · Software Development · TypeScript · Node.js · REST APIs · React.js · Confluence · MongoDB · Agile Methodologies · Amazon Web Services (AWS)",
    ],
  },
  {
    id: 3,
    title: "Resistor Detection and Classification",
    link: "https://github.com/Rohan-Sagar/Circuit-Components-Detection",
    role: "ECE 49595CV - Computer Vision (Final Project)",
    date: "Sept 2023 - Dec 2023",
    description: [
      "Engineered Faster R-CNN-based object detection model to identify, classify and extract values of resistors, achieving ≈ 70% accuracy, as measured by precision and recall metrics in validation tests.",
      "Achieved optimal solution convergence, as measured by reduced training time and increased model accuracy, by employing Stochastic Gradient Descent (SGD) for neural network optimization.",
      "Developed a custom DataLoader in PyTorch, creating high-quality, unbiased ground truth labels for neural network training, for handling COCO JSON formatted datasets.",
      "Skills: PyTorch · Python (Programming Language) · Computer Vision · Convolutional Neural Network (CNN) · Object Detection · OpenCV · Faster R-CNN · Stochastic Gradient Descent (SGD) ",
    ],
  },
  {
    id: 4,
    title: "Jullienne - Slicer Software",
    link: "https://mintcad.com/printer/slicer",
    role: "Co-founder",
    date: "May 2022 - Aug 2023",
    description: [
      "Architected a robust web-based 3D slicer application using jQuery, HTML, and CSS, emphasizing modularity and scalability in design.",
      "Orchestrated a collaborative UI/UX design phase utilizing Figma, implementing iterative prototypes and ensuring design-to-code efficiency.",
      "Integrated a 3D printing pipeline using Web Serial API, implementing a buffer mechanism for G-code transmission, ensuring data integrity and seamless printer communication.",
      "Devised a comprehensive printer control dashboard featuring live layer visualization, real-time G-code execution, thermal monitoring, and an interactive printer status display.",
      "Connected application with Mintcad APIs, enabling bidirectional synchronization of user printer configurations, runtime print audits, and database updates during print lifecycle events.",
    ],
  },
  {
    id: 5,
    title: "Serial Peripheral Interface (SPI)",
    role: "ECE 362 - Microprocessor Systems and Interfacing",
    date: "Apr 2023 - May 2023",
    description: [
      "Initialized an SPI interface by 'bit-banging' the SCK, MOSI, and MISO pins.",
      "Verified the 'bit-banging' method using the logic tool in Analog Discovery 2.",
      "Displayed a 'Hello World' message on the SPI OLED display.",
      "Triggered the SPI DMA transfer to write characters using a circular buffer.",
      "Created a game that was controlled by the SPI, OLED, and the Keypad.",
    ],
  },
  {
    id: 6,
    title: "Simon Says",
    role: "ECE 270 - Introduction to Digital System Design",
    date: "Nov 2022 - Dec 2022",
    description: [
      "Implemented state machines to handle the different steps of the game, including accepting player input and comparing it to the correct sequence.",
      "Used various SystemVerilog constructs, such as modules, functions, and data types, to create the necessary hardware description.",
      "Wrote testbenches to simulate the behavior of the design and verify that it behaved as expected.",
      "Created additional modules or modified existing ones to drive the appropriate signals to the seven segment BCD display.",
      "Ensured that the display was used to show the game's progress and the player's input, and that the different segments were lit up to form the desired characters.",
      "Added additional test cases to the testbench to verify that the display was showing the correct characters at the right times.",
    ]
  },
  {
    id: 7,
    title: "State Machine",
    role: "ECE 270 - Introduction to Digital System Design",
    date: "Oct 2022 - Oct 2022",
    description: [
      "Designed and implemented a non-trivial state machine with a next-state table and output logic using 74HC138 and 74HC151 chips.",
      "Utilized half of a 74HC74 chip to implement each flip-flop.",
      "Simulated the circuit using SystemVerilog and gained familiarity with its operation.",
      "Employed an active-low 3-to-8 decoder and various logic gates to determine the next-state values based on the current state, which were used as inputs for the decoder.",
      "Demonstrated understanding of state machine design principles and digital logic design principles, as well as proficiency in hardware description languages and simulation tools",
    ]
  },
  {
    id: 8,
    title: "Audio Equalizer",
    role: "ECE 20007 - EE Fundamentals I",
    date: "Apr 2022 - May 2022",
    description: [
      "Built an audio equalizer circuit using various electronic components, including signal filters, operational amplifiers, potentiometers, and buffers. The circuit was designed to adjust the frequency response of audio signals.",
      "Implemented a range of filters, including low-pass, high-pass, band-pass, and band-stop filters, to allow for precise control over the audio signal.",
      "Designed the circuit schematic using LTSpice, a software tool for simulating electronic circuits, to ensure the circuit functioned as intended.",
      "Achieved a cut-off frequency within 10% of the design specifications for the individual filters, demonstrating strong attention to detail and accuracy.",
      "Demonstrated understanding in circuit design and the use of electronic components to process and manipulate audio signals.",
    ],
  },
  {
    id: 9,
    title: "Huffman Encoding",
    role: "ECE 264 - Advanced C Programming",
    date: "May 2022 - May 2022",
    description: [
      "Developed a Huffman Encoder Decoder using C programming to compress and decompress data efficiently (lossless compression/decompression algorithm)",
      "Utilized data structures such as trees and priority queues to facilitate the encoding and decoding process",
      "Wrote code to read and write data from files, allowing the encoder and decoder to handle large amounts of data",
      "Tested the program extensively to ensure correctness and evaluate its performance",
    ],
  },
  {
    id: 10,
    title: "The Data Mine - Purdue University",
    role: "Undergraduate Data Science Researcher",
    date: "Aug 2021 - Dec 2021",
    description: [
      "Goal: Design an NLP-based solution to forecast the experimental settings for HPLC-MS/MS Assay in Pharmacokinetics, which would minimize the trial and error required for new drug tests and accelerate drug delivery.",
      "Built a React-based web app connected to a Neo4j graphical database and Flask back-end which extracts information from biomedical literature using Regular Expressions and NLP.",
      "Developed a Python script that utilizes the Bio.Entrez API and BeautifulSoup to extract over 200 high-quality abstracts on HPLC-MS/MS from the PubMed database, thereby creating a large dataset for training.",
      "Manually annotated keywords in 50 abstracts to create NER entities for a data corpus to train an NLP model, and further used RegEx to annotate keywords in abstracts, reducing manual annotation time by 200%.",
      "Trained, evaluated, and compared several NLP models (including vanilla BERT, BioBERT, spaCy, and RoBERTa, both pre-trained and untrained) to accurately extract assays from abstracts.",
    ],
  },
];

export const pages = ["HOME", "EXPERIENCE", "PROJECTS", "SKILLS"];

export const skillsTable = [
  { id: 0, category: 'Programming Languages', name: 'Assembly', type: 'Beginner', link: "/assets/SkillsIcons/Languages/assembly.svg" },
  { id: 1, category: 'Programming Languages', name: 'C', type: 'Advanced', link: "/assets/SkillsIcons/Languages/c.svg" },
  { id: 2, category: 'Programming Languages', name: 'C++', type: 'Intermediate', link: "/assets/SkillsIcons/Languages/cpp.svg" },
  { id: 3, category: 'Programming Languages', name: 'JavaScript', type: 'Advanced', link: "/assets/SkillsIcons/Languages/javascript.svg" },
  { id: 4, category: 'Programming Languages', name: 'Python', type: 'Advanced', link: "/assets/SkillsIcons/Languages/python.svg" },
  { id: 5, category: 'Programming Languages', name: 'SystemVerilog', type: 'Beginner', link: "/assets/SkillsIcons/Languages/systemVerilog.svg" },
  { id: 6, category: 'Programming Languages', name: 'TypeScript', type: 'Intermediate', link: "/assets/SkillsIcons/Languages/typescript.svg" },
  {id: 7, category: 'Frameworks', name: 'Django', type: 'Beginner', link: "/assets/SkillsIcons/Frameworks/django.svg"},
  {id: 8, category: 'Frameworks', name: 'Flask', type: 'Intermediate', link: "/assets/SkillsIcons/Frameworks/flask.svg"},
  {id: 9, category: 'Frameworks', name: 'Node.js', type: 'Advanced', link: "/assets/SkillsIcons/Frameworks/nodejs.svg"},
  {id: 10, category: 'Frameworks', name: 'React.js', type: 'Advanced', link: "/assets/SkillsIcons/Frameworks/react.svg"},
  {id: 11, category: 'Frameworks', name: 'JQuery', type: 'Advanced', link: "/assets/SkillsIcons/Frameworks/jquery.svg"},
  {id: 12, category: 'Frameworks', name: 'Next.js', type: 'Intermediate', link: "/assets/SkillsIcons/Frameworks/nextjs.svg"},
  {id: 13, category: 'Frameworks', name: 'PyTorch', type: 'Intermediate', link: "/assets/SkillsIcons/Frameworks/pytorch.svg"},
  {id: 14, category: 'Cloud Storage and Databases', name: 'AWS S3', type: 'Intermediate', link: "/assets/SkillsIcons/Database/s3.svg"},
  {id: 15, category: 'Cloud Storage and Databases', name: 'MongoDB', type: 'Intermediate', link: "/assets/SkillsIcons/Database/mongodb.svg"},
  {id: 16, category: 'Cloud Storage and Databases', name: 'Neo4j', type: 'Beginner', link: "/assets/SkillsIcons/Database/neo4j.svg"},
  {id: 17, category: 'Cloud Storage and Databases', name: 'Pinata (Decentralized)', type: 'Advanced', link: "/assets/SkillsIcons/Database/pinata.png"},
  {id: 18, category: 'Cloud Storage and Databases', name: 'Firestore', type: 'Intermediate', link: "/assets/SkillsIcons/Database/firebase.svg"},
]
