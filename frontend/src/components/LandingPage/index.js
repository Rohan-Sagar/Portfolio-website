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
  BlueOption } from './LandingPage.styles';
import UFCTimer from '../UFCTimer/index';
import EventContext from '../../context/useContext';
import axios from "axios";
import cheerio from "cheerio";

let id = 0;

const INITIAL_STATES = [
  { id: id++, label: "Major: Computer Engineering"},
  { id: id++, label: "Minor: Economics"},
  { id: id++, label: "Software Engineering"},
  { id: id++, label: "Python Developer"}
]

function LandingPage() {
  const [count, setCount] = useState(2);
  const [selectedChoice, setSelectedChoice] = useState("");
  const [event, setEvent] = useState({
    eventDate: '',
    fighters: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const ufcfighter = await axios.get('https://www.ufc.com/events');
      const $ = cheerio.load(ufcfighter.data);
      const eventFighters = $('.c-card-event--result__headline');
      const eventDate = $('.c-card-event--result__date');
      let eventName = $(eventFighters[0]).text().trim();
      let eventTime = $(eventDate[0]).text().trim();
      const [firstFighter, secondFighter] = eventName.split(' vs ');
      setEvent({
        eventDate: eventTime,
        fighters: [firstFighter, secondFighter],
      });
    };
    fetchData();
  }, []);

  const handleSelection = choice => {
    if (!selectedChoice) {
      setSelectedChoice(choice);
    }};

  useEffect(() => {
    let interval = null;
    if (count < 15) {
      interval = setInterval(() => {
        setCount(count + 1);
      }, 3000);
    } else {
      setCount(2);
    }
    return () => clearInterval(interval);
  }, [count]);

  return (
    <>
      <Container>
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
              <p>20-05-24 (DD-MM-YY)</p>
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
            <EventContext.Provider value={event}>
              <UFCTimer/>
            </EventContext.Provider>
              <UserSelect>
                <span>What are your picks for the fight?</span>
                <RedOption onClick={() => handleSelection("Red")}>
                  <p>{event.fighters[0]}</p>
                  {selectedChoice === "Red"}
                </RedOption>
                <BlueOption onClick={() => handleSelection("Blue")}>
                  <p>{event.fighters[1]}</p>
                  {selectedChoice === "Blue"}
                </BlueOption>
              </UserSelect>
          </RightMenu>
        </Landing>
      </Container>
    </>
  )
}

export default LandingPage