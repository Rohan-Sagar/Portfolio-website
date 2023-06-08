import React, { useState, useEffect} from 'react';
import { 
  Container, 
  Landing, 
  LeftMenu, 
  TagWrapper, 
  Tag, 
  Name, 
  SchoolDetails, 
  NumberChart, 
  OtherInfo, 
  Picture, 
  RightMenu,
  UserSelect,
  RedOption,
  BlueOption 
} from './LandingPage.styles';
import UFCTimer from '../UFCTimer/index';
import EventContext from '../../context/useContext';
import axios from 'axios';
import moment from 'moment';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Hobbies from '../Hobbies';

let id = 0;
const INITIAL_STATES = [
  { id: id++, label: "Major: Computer Engineering"},
  { id: id++, label: "Minor: Economics"},
  { id: id++, label: "Software Engineering"},
  { id: id++, label: "Python Developer"}
]

ChartJS.register(ArcElement, Tooltip, Legend);
export const defaultData = {
  datasets: [
    {
      label: '# of Votes',
      data: [1, 1],
      backgroundColor: [
        'rgb(41, 71, 144)',
        'rgb(143, 2, 14)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(255, 99, 132, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

function LandingPage() {
  const [count, setCount] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState("");
  const [data, setData] = useState(defaultData);
  const [event, setEvent] = useState({
    eventDate: '',
    fighters: [],
  });

  const fetchData = async () => {
    try {
      const response = await axios.get('https://portfolio-website-backend-iejc.onrender.com/fighter-info');
      const { eventDate, fighters } = response.data;
      setEvent({
        eventDate: moment(eventDate).format('YYYY-MM-DDTHH:mm:ssZ'),
        fighters,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSelection = async (color) => {
    setSelectedChoice(color);
    try {
      await axios.post('https://portfolio-website-backend-iejc.onrender.com/post-votes', {
        fighterName: event.fighters[color === 'Blue' ? 1 : 0],
      });
      const votesResponse = await axios.get('https://portfolio-website-backend-iejc.onrender.com/get-votes');
      const votesData = event.fighters.map(fighter => {
        const numVotes = votesResponse.data.filter(vote => vote.fighterName === fighter).length;
        return numVotes;
      });
      setData({
        datasets: [
          {
            label: '# of Votes',
            data: votesData,
            backgroundColor: [
              'rgb(143, 2, 14)',
              'rgb(41, 71, 144)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
        ],
      });
    } catch (err) {
      console.error(err);
    }
  };
  

  useEffect(() => {
    let interval = null;
    if (count < 15) {
      interval = setInterval(() => {
        setCount(count + 1);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [count]);

  return (
      <Container id="home">
        <Landing>
          <LeftMenu>
            <TagWrapper>
              {INITIAL_STATES.map(({ id, label}) => (
                <Tag key={id}>{label}</Tag>
              ))}
            </TagWrapper>
            <Name>ROHAN SAGAR</Name>
            <SchoolDetails>
              Junior at Purdue University
              <br/>
              <p>Graduation Date: 20-05-24 (DD-MM-YY)</p>
            </SchoolDetails>
            <NumberChart>
              <OtherInfo>
                <h1>4</h1>
                <span>LANGUAGES</span>
              </OtherInfo>
              <label></label>
              
              <OtherInfo>
                <h1>8</h1>
                <span>PROGRAMMING<br/>LANGUAGES</span>
              </OtherInfo>
              <label></label>

              <OtherInfo>
                <h1>{count}</h1>
                <span>COFFEE<br/>CUPS</span>
              </OtherInfo>
            </NumberChart>
          </LeftMenu>

          <Picture>
            <img src={"/assets/IMG_2224.png"} alt="me"></img>
          </Picture>

          <RightMenu>
            <Hobbies />
            {/* <h1>Update: Still working on making this website responsive for tablets and mobile phones</h1>
            <EventContext.Provider value={event}>
              <UFCTimer/>
            </EventContext.Provider>
            {selectedChoice ? (
              <div className="doughnut-container">
                <Doughnut 
                  data={data}
                  height="200px"
                  width="200px"
                  options={{ maintainAspectRatio: false }}
                />
              </div>
            ) : (
              <UserSelect>
                <span>What are your picks for the fight?</span>
                <RedOption onClick={() => handleSelection("Red")}>
                  {event.fighters[0] ? <p>{event.fighters[0]}</p> : ""}
                </RedOption>
                <BlueOption onClick={() => handleSelection("Blue")}>
                  {event.fighters[1] ? <p>{event.fighters[1]}</p> : ""}
                </BlueOption>
              </UserSelect>
            )} */}
          </RightMenu>
        </Landing>
      </Container>
  )
}

export default LandingPage