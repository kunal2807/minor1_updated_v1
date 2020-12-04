import React, { useState } from "react";
import {
  AppBar,
  Grid,
  makeStyles,
  Button,
  Typography,
} from "@material-ui/core";
// import Webcam from "react-webcam";
// import Blink from 'blink'
import styled from "styled-components";
import { Link, NavLink, Switch, Route } from "react-router-dom";
import Live from "./live";
import Record from "./record";
// import videoFeed from '../axios'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  AppBarHeight: {
    marginBottom: "3rem",
    opacity: 0.5,
    [theme.breakpoints.down("md")]: {
      marginBottom: "1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "2rem",
    },
  },
  AppBarMargin: {
    marginBottom: "4.8rem",
    [theme.breakpoints.down("md")]: {
      marginBottom: "4.4em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "3.8rem",
    },
  },

  background: {
    backgroundColor: "#f8f9fe!important",
  },

  button: {
    ...theme.typography.button,
    marginLeft: "12px",
    marginRight: "25px",

    "&:hover": {
      transform: "scale(1.1) translateY(-1.3rem)",
      boxShadow: "0 1rem 2rem rgba(0,0,0, .2)",
    },
  },
  tabContainer: {
    marginLeft: "1em",
    // alignItems: "center",
    // marginRight: "auto",
    // background: "#f5f7f9",
    marginTop: "2em",
    lineHeight: "3rem",

    height: "70%",
  },
  tab: {
    fontSize: "1.3rem",
    color: "rgba(0,0,0,.85)",
    zIndex: 100,

    marginTop: "2vh",
    marginBottom: "2vh",
    marginRight: "2vw",

    "&:hover": {
      cursor: "pointer",
      color: "blue",
      textDecoration: "none",
    },
    // "&:active": {
    //   color: "aqua",
    //   textDecoration: "none",
    //   borderRight: "3px solid #f8f9fe",
    // },
  },
  streamer: {
    height: "88vh",
    width: "100%",
    backgroundColor: "#202124",
    // marginBottom: "1.5rem",
    borderRadius: "10px",
  }
}));

export default function Survilance() {
  const classes = useStyles();
  const [feed, setFeed] = useState("")

  axios.get('http://192.168.1.8:8000/video_feed').then(response=>{
    setFeed(response.data);
    console.log(response.data)
  })

  const tabsComponent = (
    <React.Fragment>
      <Grid container direction="column" className={classes.tabContainer}>
        <Grid item>
          <NavLink
            className={classes.tab}
            activeStyle={{
              textDecoration: "none",
              color: "grey",
              borderLeft: "3px solid #007bff",
            }}
            to="/survilliance/live"
          >
            Use Webcam
          </NavLink>
        </Grid>

        <Grid item>
          <NavLink
            className={classes.tab}
            activeStyle={{
              textDecoration: "none",
              color: "grey",
              borderLeft: "3px solid #007bff",
            }}
            to="/survilliance/record"
          >
            Use pre-recorded video
          </NavLink>
        </Grid>
      </Grid>
    </React.Fragment>
  );

  const videoSource = "0"

  return (
    <React.Fragment>
      <AppBar style={{backgroundImage: "linear-gradient(to bottom, rgb(0 255 166 / 44%), rgb(30 168 234))"}}>
        <Typography align="center" variant="h5">  COVID-19 Survilance System </Typography>
        {/* <div className={classes.AppBarHeight}/> */}
      </AppBar>

      <div className={classes.AppBarMargin}/>
      <Grid container className={classes.background}>

        <Grid item lg={2}>
          {tabsComponent}
        </Grid>

        <Grid item container direction="column" lg style={{marginLeft: "25px", marginTop: "25px"}}>
          <Grid item>
            <div className={classes.streamer}>
              {/* <Blink color='white' text='No Source detected' fontSize='6rem'/> */}
              <img url={feed} alt="feed"/>
            </div>
          </Grid>
        </Grid>

        <Grid item container direction="column" lg={2} style={{marginLeft: "25px", marginTop: "25px", height: "70%"}}>
          <Grid item>
            <Typography variant="h6">GENRAL GUIDELINES</Typography>
            <ul>
              <li>This app is developed solely for education purposes only.</li>
              <li>Pellentesque blandit libero sit amet iaculis interdum.</li>
              <li>Fusce accumsan magna in neque semper pretium.</li>
              <li>Vivamus porta eros ac dolor placerat pretium.</li>
              <li>Vestibulum aliquet leo sed metus varius, a fringilla mi gravida.</li>
              <li>Praesent id lectus quis sem dapibus congue.</li>
              <li>uspendisse tempus tellus in lacinia rhoncus.</li>
            </ul>
          </Grid>
          <Grid item>
            SOME NEWS
          </Grid>
        </Grid>

      </Grid>
    </React.Fragment>
  );
}
