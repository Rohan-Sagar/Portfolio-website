import React, { useState, useEffect, useContext} from 'react';
import {
  Clock,
  Logo,
  ClockWrapper,
  Rounds,
  RoundBar,
  RoundBarSquare,
  RedBanner,
  BlueBanner,
  Contestant,
  ContestantTwo,
  TextWrapper,
  Container,
  Timer,
  Date,
} from './UFCTimer.styles';
import moment from 'moment';
import EventContext from '../../context/useContext';

function UFCTimer() {
  const [timeRemaining, setTimeRemaining] = useState('');
  const [timeLeft, setTimeLeft] = useState(300);
  const [roundNumber, setRoundNumber] = useState(1);
  const event = useContext(EventContext);
  
  const roundTime = 300;
  const maxRounds = 5;
  
  let minutes = Math.floor(timeLeft / 60).toString().padStart(2, "0");
  let seconds = (timeLeft % 60).toString().padStart(2, " ").replace(" ", "0");

  const getRoundBarShape = (index) => {
    const round = roundNumber + index;
    if (round === roundNumber) {
      return 'square';
    } else {
      return 'vertical';
    }
  };
  
  const renderRoundBar = () => {
    const roundBars = [];
  
    for (let i = 1; i <= maxRounds; i++) {
      const shape = getRoundBarShape(i - roundNumber);
      if (shape === 'square') {
        roundBars.push(<RoundBarSquare key={i}>R{i}</RoundBarSquare>);
      } else {
        const color = i <= roundNumber ? '#D4AF37' : '#727272';
        roundBars.push(<RoundBar key={i} shape='vertical' color={color}></RoundBar>);
      }
    }
    return roundBars;
  };

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft === 0) {
          clearInterval(countdown);
          if (roundNumber === maxRounds) {
            return 0;
          } else {
            setRoundNumber(roundNumber + 1);
            setTimeLeft(roundTime);
            return roundTime;
          }
        } else {
          return timeLeft - 1;
        }
      });
    }, 1000);
  
    return () => {
      clearInterval(countdown);
    };
  }, [roundNumber, maxRounds, roundTime]);

  useEffect(() => {
    const targetDate = moment(event.eventDate);
    if (targetDate.isBefore(moment())) {
      setTimeRemaining("IT'S TIME FOR WAR!");
      return;
    }

    const interval = setInterval(() => {
      const now = moment();
      const diff = targetDate.diff(now);
      const duration = moment.duration(diff);
      const days = duration.days();
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();
      if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        setTimeRemaining("IT'S TIME FOR WAR");
        clearInterval(interval);
      } else {
        setTimeRemaining(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [event.eventDate]);


  return (
    <>
    <Timer>

      <Clock>
        <ClockWrapper>
          <Logo>
            <img src={"/assets/ufc_logo.png"} alt="ufc"></img>
          </Logo>
          <span>{minutes}:{seconds}</span>
          <Rounds>
            {renderRoundBar(0)}
          </Rounds>
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

