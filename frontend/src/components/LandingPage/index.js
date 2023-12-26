import React, { useState, useEffect } from "react";
import UFCTimer from "../UFCTimer/index";
import { Box, Typography, Grid } from "@mui/material";
import EventContext from "../../context/useContext";
import axios from "axios";
import moment from "moment";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { tagsInfo } from "../../constants.js";
import {
  containerStyle,
  tagStyle,
  leftMenuStyle,
  tagWrapperStyle,
  nameStyle,
  schoolDetailsStyle,
  leftMenuNumberStyle,
  leftMenuNumberTextStyle,
  otherInfoWrapper,
  otherInfoStyle,
  imgWrapperStyle,
  rightMenuStyle,
  chartBoxStyle,
  rightMenuTextStyle,
  buttonOption,
  buttonTextStyle,
} from "./LandingPage.styles";

ChartJS.register(ArcElement, Tooltip, Legend);
export const defaultData = {
  datasets: [
    {
      label: "# of Votes",
      data: [0, 0],
      backgroundColor: ["rgb(41, 71, 144)", "rgb(143, 2, 14)"],
      borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
      borderWidth: 1,
    },
  ],
};

function LandingPage() {
  const [count, setCount] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState("");
  const [data, setData] = useState(defaultData);
  const [event, setEvent] = useState({
    eventDate: "",
    fighters: [],
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/fighter-info`,
      );
      const { eventDate, fighters } = response.data;
      setEvent({
        eventDate: moment(eventDate).format("YYYY-MM-DDTHH:mm:ssZ"),
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
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/post-votes`, {
        fighterName: event.fighters[color === "Blue" ? 1 : 0],
      });
      const votesResponse = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/get-votes`,
      );
      const votesData = event.fighters.map((fighter) => {
        const numVotes = votesResponse.data.filter(
          (vote) => vote.fighterName === fighter,
        ).length;
        return numVotes;
      });
      setData({
        datasets: [
          {
            label: "# of Votes",
            data: votesData,
            backgroundColor: ["rgb(143, 2, 14)", "rgb(41, 71, 144)"],
            borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
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
    <Box sx={containerStyle} id="home">
      <Grid container spacing={2}>
        <Grid item xs={7} lg={5}>
          <Box sx={leftMenuStyle}>
            <Box sx={tagWrapperStyle}>
              {tagsInfo.map((item) => {
                return (
                  <Typography variant="h3" sx={tagStyle}>
                  {item}
                </Typography>
                )
              })}
            </Box>
            <Typography variant="h1" sx={nameStyle}>
              Rohan Sagar
            </Typography>
            <Box>
              <Typography variant="h4" sx={schoolDetailsStyle}>
                Senior at Purdue University
              </Typography>
              <Typography variant="h4" sx={{ ...schoolDetailsStyle, fontSize: {xs: '12px', sm: '20px'}}}>
                Graduation Date: 20-05-24 (DD-MM-YY)
              </Typography>
            </Box>
            <Box sx={otherInfoStyle}>
              <Box>
                <Box sx={otherInfoWrapper}>
                  <Typography variant="h2" sx={leftMenuNumberStyle}>
                      3
                  </Typography>
                </Box>
                <Typography variant="h4" sx={leftMenuNumberTextStyle}>
                  Languages
                </Typography>
              </Box>
              <Box sx={{ borderRight: '2px solid grey'}} />

              <Box>
                <Box sx={otherInfoWrapper}>
                  <Typography variant="h2" sx={leftMenuNumberStyle}>
                      7
                  </Typography>
                </Box>
                <Typography variant="h4" sx={leftMenuNumberTextStyle}>
                  Programming<br />Languages
                </Typography>
              </Box>
              <Box sx={{ borderRight: '2px solid grey'}} />

              <Box>
                <Box sx={otherInfoWrapper}>
                  <Typography variant="h2" sx={leftMenuNumberStyle}>
                    2
                  </Typography>
                </Box>
                <Typography variant="h4" sx={leftMenuNumberTextStyle}>
                  Years of<br />Experience
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={5} lg={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingRight: {xs: '0rem', lg: '2rem'} }}>
          <Box sx={imgWrapperStyle}>
            <img src={'/assets/IMG_2224.png'} alt="Rohan Sagar" style={{ width: '90%', height: '100%' }} />
          </Box>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Box sx={rightMenuStyle}>
            <EventContext.Provider value={event}>
              <UFCTimer />
            </EventContext.Provider>
            {selectedChoice ? (
              <Box sx={chartBoxStyle}>
                <Doughnut
                  data={data}
                  height="200px"
                  width="200px"
                  options={{ maintainAspectRatio: false }}
                />
              </Box>
            ) : (
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1rem' }} >
                <Typography variant="h4" sx={rightMenuTextStyle}>
                  What are your picks for the fight?
                </Typography>
                <Box sx={buttonOption(true)} onClick={() => handleSelection("Red")}>
                  {event.fighters[0] ? (
                    <Typography variant="h4" sx={buttonTextStyle}>
                      {event.fighters[0]}
                    </Typography>
                  ) : (
                    <Typography variant="h4" sx={buttonTextStyle}>
                      Fetching Data...
                    </Typography>
                  )}
                </Box>
                <Box sx={buttonOption(false)} onClick={() => handleSelection("Blue")}>
                  {event.fighters[1] ? (
                    <Typography variant="h4" sx={buttonTextStyle}>
                      {event.fighters[1]}
                    </Typography>
                  ) : (
                    <Typography variant="h4" sx={buttonTextStyle}>
                      Fetching Data...
                    </Typography>
                  )}
                </Box>
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
      </Box>
  );
}

export default LandingPage;
