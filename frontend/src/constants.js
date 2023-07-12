export const initialScript = `
  import pandas as pd
  import numpy as np
  import matplotlib.pyplot as plt
  
  df = pd.read_csv('technology_stocks.csv')
  
  df['P/E'] = df['price'] / df['earnings']
  df['P/B'] = df['price'] / df['book_value']
  df['ROE'] = df['earnings'] / df['equity']
  
  plt.plot(df['P/E'], label='P/E')
  plt.plot(df['P/B'], label='P/B')
  plt.plot(df['ROE'], label='ROE')
  plt.legend()
  plt.show()
  
  df['MA_P/E'] = df['P/E'].rolling(window=10).mean()
  df['MA_P/B'] = df['P/B'].rolling(window=10).mean()
  df['MA_ROE'] = df['ROE'].rolling(window=10).mean()
  
  plt.plot(df['P/E'], label='P/E')
  plt.plot(df['MA_P/E'], label='MA_P/E')
  plt.plot(df['P/B'], label='P/B')
  plt.plot(df['MA_P/B'], label='MA_P/B')
  plt.plot(df['ROE'], label='ROE')
  plt.plot(df['MA_ROE'], label='MA_ROE')
  plt.legend()
  plt.show()
  
  def buy_signal(df):
      if df['P/E'] < df['MA_P/E'] and df['P/B'] < df['MA_P/B'] and df['ROE'] > df['MA_ROE']:
          return True
      else:
          return False
  
  def sell_signal(df):
      if df['P/E'] > df['MA_P/E'] and df['P/B'] > df['MA_P/B'] and df['ROE'] < df['MA_ROE']:
          return True
      else:
          return False
  
  signals = []
  for i in range(len(df) - 1):
      if buy_signal(df.iloc[i]):
          signals.append('buy')
      elif sell_signal(df.iloc[i]):
          signals.append('sell')
      else:
          signals.append('hold')
  
  plt.plot(df['P/E'], label='P/E')
  plt.plot(df['MA_P/E'], label='MA_P/E')
  plt.plot(df['P/B'], label='P/B')
  plt.plot(df['MA_P/B'], label='MA_P/B')
  plt.plot(df['ROE'], label='ROE')
  plt.plot(df['MA_ROE'], label='MA_ROE')
  plt.plot(signals, label='Signals')
  plt.legend()
  plt.show()
  
  returns = np.zeros(len(signals))
  for i in range(len(signals) - 1):
      if signals[i] == 'buy':
          returns[i + 1] = df['price'].iloc[i + 1] / df['price'].iloc[i]
      else:
          returns[i + 1] = 1
  
  print('Average return: {}'.format(np.mean(returns)))
  print('Sharpe ratio: {}'.format(np.mean(returns) / np.std(returns)))
  `;

export const experienceData = [
  {
    title: "The Data Mine - Purdue University",
    position: "Undergraduate Data Science Researcher",
    date: "Aug 2021 - Dec 2021",
    description: [
      "Goal: Design an NLP-based solution to forecast the experimental settings for HPLC-MS/MS Assay in Pharmacokinetics, which would minimize the trial and error required for new drug tests and accelerate drug delivery.",
    ],
    bullets: [
      "Built a React-based web app connected to a Neo4j graphical database and Flask back-end which extracts information from biomedical literature using Regular Expressions and NLP.",
      "Developed a Python script that utilizes the Bio.Entrez API and eautifulSoup to extract over 200 high-quality abstracts on HPLC-MS/MS from the PubMed database, thereby creating a large dataset for training.",
      "Manually annotated keywords in 50 abstracts to create NER entities for a data corpus to train an NLP model, and further used RegEx to annotate keywords in abstracts, reducing manual annotation time by 200%.",
      "Trained, evaluated, and compared several NLP models (including vanilla BERT, BioBERT, spaCy, and RoBERTa, both pre-trained and untrained) to accurately extract assays from abstracts.",
    ],
  },
];

export const tagsInfo = [
  "Major: Computer Engineering",
  "Minor: Economics",
  "Software Engineering",
  "Python Developer",
];

export const navBarData = [
  {
    id: 0,
    section: "Programming Languages",
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
    id: 1,
    section: "Frameworks",
    items: [
      {
        name: "Blockchain",
        technologies: ["Truffle", "Web3.js"],
      },
      {
        name: "Data Science",
        technologies: [
          "BeautifulSoup",
          "NLTK",
          "NumPy",
          "Pandas",
          "PyTorch",
          "Scikit-learn",
        ],
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
    id: 2,
    section: "Cloud Storage and Database",
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
    id: 3,
    section: "Other Tools",
    items: [
      {
        name: "Deployment",
        technologies: ["AWS", "Heroku", "Firebase", "Vercel"],
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

export const projectsData= [
  {
    id: 1,
    title: "Julienne - Slicer Software",
    role: "Full-stack Developer",
    date: "June 2022 - Present",
    description: [
      "Developed a web-based 3D slicer application using Kiri:Moto open source project as inspiration.",
      "Planned and collaborated on user interface design using Figma, facilitating team-wide design efforts.",
      "Enabled G-code legend view and selection of infill patterns to optimize strength and accuracy.",
      "Integrated 3D printing via USB connection to printer and web serial communcation using Vanilla JS.",
      "Designed a printer control panel that includes: Live layer view, line-by-line G-code sender, live temperature monitoring, and live printer status.",
    ],
  },
  {
    id: 2,
    title: "Candy marketplace",
    role: "Full-stack Developer",
    date: "Nov 2022 - Nov 2022",
    description: [
      "Developed a website for trick or treat reviewing and candy marketplace using MERN stack.",
      "Developed multiple RESTful APIs using Node.js and Express.js to gather review and user data in a MongoDB database.",
      "Awarded for having the best authentication system at the Demon Hacks hackathon.",
    ],
  },
  {
    id: 3,
    title: "Fundamental Analysis Bot",
    role: "Python Developer",
    date: "Aug 2021 - May 2022",
    description: [
      "Developed bot using SimFin dataset and FinRL deep learning algorithms to analyze securities and make informed investment decisions.",
      "Trained bot using FinRL algorithms, including A2C, DDPG, and PPO.",
      "Evaluated the performance of the bot using various metrics, such as returns on investment and Sharpe ratio.",
    ],
  },
  {
    id: 4,
    title: "Serial Peripheral Interface - ECE 362",
    role: "Embedded-C Lab",
    date: "Lab Assignment",
    description: [
      "Initialized an SPI interface by 'bit-banging' the SCK, MOSI, and MISO pins.",
      "Verified the 'bit-banging' method using the logic tool in Analog Discovery 2.",
      "Displayed a 'Hello World' message on the SPI OLED display.",
      "Triggered the SPI DMA transfer to write characters using a circular buffer.",
      "Created a game that was controlled by the SPI, OLED, and the Keypad.",
    ],
  },
];
