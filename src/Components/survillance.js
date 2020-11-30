import React from "react";
import {
  AppBar,
  Grid,
  makeStyles,
  Button,
  Typography,
} from "@material-ui/core";
import Webcam from "react-webcam";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  AppBarHeight: {
    // ...theme.mixins.toolbar,
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
    // ...theme.mixins.toolbar,
    marginBottom: "4.8rem",
    [theme.breakpoints.down("md")]: {
      marginBottom: "4.4em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "3.8rem",
    },
  },

  background: {
    // backgroundImage: `linear-gradient(
    //   to bottom,
    //   #37a8ca, #2b369a)`,
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
    // float: "bottom",
    // position: "absolute"
    // marginBottom: "16.5rem"
  },
  tabContainer: {
    marginLeft: "auto",
    alignItems: "center",
    marginRight: "auto",
    background: "#f5f7f9",
    // borderRight: "3px solid black",
    height: "100%",
    // boxShadow: "0 1rem 2rem rgba(0,0,0, .2)",
    // zIndex: 10000
  },
  tab: {
    // fontFamily: "Railway",
    // textTransform: "uppercase",
    // textDecoration: "none",
    // fontWeight: 700,
    fontSize: "1.3rem",
    // borderBottom: "2.5px solid black",
    color: "rgba(0,0,0,.85)",
    // width: "fit-content",
    zIndex: 100,
    // minWidth: 10,
    // marginLeft: "25px",
    marginTop: "2vh",
    marginBottom: "2vh",
    marginRight: "25px",
    // transition: "all .2s",

    "&:hover": {
      cursor: "pointer",
      // backgroundColor: `${theme.palette.secondary.light}`,
      // transform: "scale(1.01) translateY(-1.3rem)",
      // boxShadow: "0 1rem 2rem rgba(0,0,0, .2)",
    },
  },

  streamer: {
    height: "88vh",
    width: "100%",
    backgroundColor: "#202124",
    marginBottom: "1.5rem",
    borderRadius: "10px",
    // position: "absolute",
    // zIndex: 100
  },
}));

const Heading = styled.h1`
  // margin-top: 20rem;
  // margin-bottom: 8rem;
  font-family: Cursive;
  font-size: 4rem;
  color: white;
  text-align: center;
`;
export default function Survilance() {
  const classes = useStyles();

  const tabsComponent = (
    <React.Fragment>
      <Grid container className={classes.tabContainer}>
        <Grid item lg={12}>
          <div className={classes.tab} href="/survilance/webcam_mask">
            Live: Detect Masks
          </div>
        </Grid>
        <Grid item lg={12}>
          <div className={classes.tab} href="/survilance/webcam_mask">
            Live: Detect Distance
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );

  const webcam = <Webcam mirrored className={classes.streamer} />;
  console.log(webcam);

  return (
    <React.Fragment>
      <AppBar
        style={{
          backgroundColor: "#11cdef!important",
        }}
      >
        <Heading>COVID-19 Survilance System</Heading>
      </AppBar>

      <div className={classes.AppBarMargin} />
      <Grid container className={classes.background}>
        <Grid item lg={2}>
          {tabsComponent}
        </Grid>
        <Grid
          item
          container
          direction="column"
          lg
          style={{ marginLeft: "25px", marginTop: "25px" }}
        >
          <Grid item>
            <div className={classes.streamer}>
              {/* <Blink color='white' text='No Source detected' fontSize='6rem'/> */}
              <img url="localhost:8000/video_feed" alt="feed" />
            </div>
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction="column"
          lg={2}
          style={{ marginLeft: "25px", marginTop: "25px" }}
        >
          <Grid item>GUIDELINES</Grid>
          <Grid item>SOME NEWS</Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
