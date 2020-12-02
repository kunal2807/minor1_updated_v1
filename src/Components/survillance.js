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
import { Link, NavLink, Switch, Route } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Live from "./live";
import Record from "./record";

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
    marginLeft: "auto",
    alignItems: "center",
    marginRight: "auto",
    background: "#f5f7f9",

    height: "100%",
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
}));

const Heading = styled.h1`
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
          <NavLink
            className={classes.tab}
            activeStyle={{
              textDecoration: "none",
              color: "grey",
              borderLeft: "3px solid #007bff",
            }}
            to="/survilliance/live"
          >
            Live Detection
          </NavLink>
        </Grid>
        <Grid item lg={12}>
          <NavLink
            className={classes.tab}
            activeStyle={{
              textDecoration: "none",
              color: "grey",
              borderLeft: "3px solid #007bff",
            }}
            to="/survilliance/record"
          >
            Upload Section
          </NavLink>
        </Grid>
      </Grid>
    </React.Fragment>
  );

  const webcam = <Webcam mirrored className={classes.streamer} />;
  console.log(webcam);

  return (
    <React.Fragment>
      <AppBar>
        <Heading>COVID-19 Survilance System</Heading>
      </AppBar>

      <div className={classes.AppBarMargin} />
      <Grid container className={classes.background}>
        <Grid item lg={2}>
          {tabsComponent}
        </Grid>

        <Switch>
          <Route
            path="/survilliance/live"
            render={(props) => <Live {...props} />}
          />
          <Route
            path="/survilliance/record"
            render={(props) => <Record {...props} />}
          />
        </Switch>

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
