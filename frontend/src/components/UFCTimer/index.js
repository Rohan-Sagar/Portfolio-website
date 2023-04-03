import React, { useState, useEffect, useContext} from 'react';
import {
  Clock,
  Logo,
  ClockWrapper,
  Info,
  RedBanner,
  BlueBanner,
  Contestant,
  ContestantTwo,
  TextWrapper,
  Container,
  Timer,
  Date,
} from './UFCTimer.styles';
import axios from 'axios';
import EventContext from '../../context/useContext';
import moment from 'moment';

function UFCTimer() {
  const [timeLeft, setTimeLeft] = useState(300);
  const [timeRemaining, setTimeRemaining] = useState('');
  const event = useContext(EventContext);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft(timeLeft => {
        if (timeLeft === 0) {
          clearInterval(countdown);
          return 300;
        } else {
          return timeLeft - 1;
        }
      });
    }, 1000);

    return () => {
        clearInterval(countdown);
      };
    }, []);

  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  if (minutes < 10 && minutes >= 0) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  
  useEffect(() => {
    const interval = setInterval(() => {
      const targetDate = moment(event.eventDate);
      const now = moment();
      const diff = targetDate.diff(now);
      const duration = moment.duration(diff);
      const days = duration.days();
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();
      setTimeRemaining(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
    }, 1000);
    return () => clearInterval(interval);
  }, [event.eventDate]);
  

  return (
    <>
    <Timer>
      <Clock>
        {/* <Info>
          <span>Bantamweight Bout</span>
        </Info> */}
        <ClockWrapper>
          <Logo>
            <img src={"/assets/ufc_logo.png"} alt="ufc"></img>
          </Logo>
          <span>{minutes}:{seconds}</span>
        </ClockWrapper>
      </Clock>
    <Contestant>
      <Container>
        <TextWrapper>
            <span>{event.fighters[0]}</span>
        </TextWrapper>
        <RedBanner/>
      </Container>
    </Contestant>
    <ContestantTwo>
      <Container>
        <TextWrapper>
            <span>{event.fighters[1]}</span>
        </TextWrapper>
        <BlueBanner/>
      </Container>
    </ContestantTwo>
  </Timer>
    <Date>{timeRemaining}</Date>
  </>
  )}

export default UFCTimer

