// end-point: http://localhost:8000/video_feed

import React, { useState, useEffect } from "react";
import {
  AppBar,
  Grid,
  makeStyles,
  Typography,
  Card,
} from "@material-ui/core";
// import Webcam from "react-webcam";
// import Blink from 'blink'
import styled from "styled-components";
import { NavLink} from "react-router-dom";
// import Live from "./live";
// import Record from "./record";
// import videoFeed from '../axios'
import axios from "axios";
import {
  Container as BContainer,
  Row,
  Col,
  Modal,
  Button as BButton,
} from "react-bootstrap";

const Heading = styled.h1`
  font-family: Comic Neue, cursive;
  font-weight: 800;
  font-size: 5rem;
  color: white;
  text-align: center;
`;

const BtnCustom = styled.span`
  position: relative;
  text-transform: none;
  text-align: center;
  transition: all 0.15s ease;
  letter-spacing: 0.025em;
  font-size: 1.5rem;
  will-change: transform;
  margin-top: 2vh;
  margin-right: auto;
  margin-left: auto;
  margin-right: auto;

  display: inline-block;
  font-weight: 600;
  font-family: Comic Neue, cursive;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  user-select: none;
  border: ${(props) =>
    props.color ? "1px solid " + props.color : "1px solid #5e72e4"};
  color: white;
  background-color: ${(props) => (props.color ? props.color : "#5e72e4")};
  background-image: none;

  padding: 0.625rem 1.8rem;
  line-height: 1.5;

  border-radius: 1rem;

  width: 150px;
  &:hover: {
    color: white;
    text-decoration: none;
  }

  &:focus: {
    color: white;
    text-decoration: none;
    outline: none !important;
  }
`;


const useStyles = makeStyles((theme) => ({
  AppBarHeight: {
    marginBottom: "3rem",
    opacity: 0.5,
  },
  AppBarMargin: {
    marginBottom: "4.8rem",
  },

  background: {
    // backgroundColor: "red!important",
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
    // backgroundColor: "red",
    height: "100%",
  },
  tab: {
    fontFamily: "Comic Neue, cursive",
    fontSize: "1.5rem",
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
  card: {
    boxShadow:"0 .5rem 1rem rgba(0,0,0,.15)",
    borderRadius: ".5rem",
    backgroundColor: "#d5fefd", 
    backgroundImage: "linear-gradient(315deg, #c9cffd 0%, #fffcff 74%);",
  },
  streamer: {
    height: "75vh",
    width: "100%",
    backgroundColor: "#202124",
    // marginBottom: "1.5rem",
    borderRadius: "10px",
  },
  video: {
    height: "75vh",
    width: "100%",
    // backgroundColor: "#202124",
    // marginBottom: "1.5rem",
    borderRadius: "10px",

  }
}));

export default function Survilance() {
  const classes = useStyles();
  // const [feed, setFeed] = useState("");
  const [summary, setSummary] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [media, setMedia] = useState(null);
  const [newss, setNews] = useState([]);

  const handleShowModal = () => setShowModal(true);

  useEffect(() => {
    axios
      .get("https://api.quarantine.country/api/v1/summary/region?region=india")
      .then((response) => {
        // console.log(response.data.data.summary);
        setSummary(response.data.data.summary);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "http://newsapi.org/v2/top-headlines?q=corona&sortBy=publishedAt&apiKey=9f7ce4ec55184b8c82493084022d1284&language=en&catergory=health&qInTitle=corona"
      )
      .then((response) => {
        // console.log(response.data.articles);
        setNews(response.data.articles);
      });
  }, []);

  const handleMediaChange = (e) => {
    setMedia(e.target.files[0]);
  };

  const handleCloseModalUpload = () => {
    let formData = new FormData();
    formData.append("video", media);
    axios
      .post("api...", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // console.log(response.data);
        return axios.get("api...");
      })
      .then((response) => {
        // console.log("Hurray");
        setMedia(null);
        setShowModal(false);
      })
      .catch((error) => {
        // console.log("error occured");
      });
  };

  const handleCloseModal = () => {
    setMedia(null);
    setShowModal(false);
  };

  // axios.get("http://192.168.1.8:8000/video_feed").then((response) => {
  //   setFeed(response.data);
  //   console.log(response.data);
  // });

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
              paddingLeft: ".5rem"
            }}
            to="/survilliance/live"
          >
            Use Webcam
          </NavLink>
        </Grid>

        <Grid item>
          <span
            className={classes.tab}
            activeStyle={{
              textDecoration: "none",
              color: "grey",
              borderLeft: "3px solid #007bff",
              paddingLeft: ".5rem"
            }}
            onClick={handleShowModal}
          >
            Use pre-recorded video
          </span>
        </Grid>

        <Grid item>
          <Card className={classes.card} style={{marginTop: "2em"}}>    
            <Typography align="center" gutterBottom variant="h4">Today's Headlines </Typography>
            {newss.length !== 0 &&
              newss.slice(0, 5).map((x) => {
                return (
                  <Row className="mb-2 border-bottom" style={{lineHeight: "1.5rem",marginTop: "2rem"}}>
                    <Col style={{}} className="text-left px-4">
                      <a
                        style={{fontFamily: "Comic Neue, cursive", fontWeight: 400, fontStyle: "italic",
                        textDecoration: "none", marginLeft: ".4em", marginRight: ".4em", fontSize: "1.3rem",
                        color: "#000"
                        }} 
                        component="a" 
                        target="_blank" href={`${x.url}`} 
                      >
                        {console.log(x.title)}
                        {x.title}
                      </a>
                    </Col>
                  </Row>
                );
              })}
          </Card>
        </Grid>

      </Grid>
    </React.Fragment>
  );

  // const videoSource = "0";

  const fileInfo = media ? (
    <span className="mx-2">File Name: {" " + media.name}</span>
  ) : (
    <span className="mx-2">Uplaod New Video </span>
  );



  return (
    <React.Fragment>
      <Modal style={{marginTop: "35vh"}} show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Upload MPEG4 Video for analysis</h4>
          <form>
            <label
              htmlFor="media3"
              className="p-2 bg-danger text-white"
              style={{
                display: "inline-block",
                borderRadius: "3px",
                margin: "auto",
                cursor: "pointer"
              }}
            >
              Video Upload!
            </label>
            {fileInfo}
            <input
              type="file"
              className="p-2 bg-danger text-white"
              style={{
                display: "none",
                borderRadius: "3px",
                margin: "auto",
              }}
              id="media3"
              name="media"
              onChange={handleMediaChange}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <BButton variant="secondary" onClick={handleCloseModal}>
            Close
          </BButton>
          <BButton variant="primary" onClick={handleCloseModalUpload}>
            Upload
          </BButton>
        </Modal.Footer>
      </Modal>
      <AppBar
        style={{
          background:
            "linear-gradient(87deg, rgb(17, 205, 239), rgb(17, 113, 239))",
        }}
      >
        <Heading>COVID-19 Survilance System</Heading>
      </AppBar>

      <div className={classes.AppBarMargin} />
      <div style={{marginBottom: "7rem"}}/>

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
              <img className={classes.video} src="http://localhost:8000/video_feed" alt="feed" />
            </div>
          </Grid>

          <Grid item container justify="center">
            <BtnCustom color="#FF1493">
              STOP
            </BtnCustom>
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction="column"
          lg={3}
          style={{ marginLeft: "25px", marginTop: "25px", height: "70%" }}
        >
          <Grid item>
            <Card className={classes.card}>
              <Typography variant="h4" align="center" gutterBottom>GENRAL GUIDELINES</Typography>
              <ul>
                <li>
                  <Typography variant="body1">
                    Frequently wash your hands with soap and water for at least 20
                    seconds. When soap and running water are unavailable, use an
                    alcohol-based hand rub with at least 60% alcohol.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    Avoid touching your eyes, nose, or mouth with unwashed hands.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    Practice good respiratory etiquette, including covering coughs
                    and sneezes.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    Avoid close contact with people who are sick.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    Stay home if sick.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    Put 6 feet of distance between yourself and people who don’t
                    live in your household.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    Masks help prevent you from getting or spreading the virus.
                  </Typography>
                </li>
              </ul>
            </Card>
          </Grid>
          <hr className="mb-1"></hr>
          <Card className={classes.card} style={{marginTop: "1rem"}}>
            <Typography variant="h4" align="center" gutterBottom>Summary </Typography>
            <BContainer fluid>
              {Object.keys(summary).length !== 0 && (
                <>
                  <Row className="mb-2 border-bottom">
                    <Col style={{ fontWeight: 600 }}>Total Cases</Col>
                    <Col style={{}} className="text-right">
                      {summary.total_cases}
                    </Col>
                  </Row>

                  <Row className="mb-2 border-bottom">
                    <Col style={{ fontWeight: 600 }}>Active Cases</Col>
                    <Col style={{}} className="text-right">
                      {summary.active_cases}
                    </Col>
                  </Row>{" "}

                  <Row className="mb-2 border-bottom">
                    <Col style={{ fontWeight: 600 }}>Deaths</Col>
                    <Col style={{}} className="text-right">
                      {summary.deaths}
                    </Col>
                  </Row>{" "}
                  
                  <Row className="mb-2 border-bottom">
                    <Col style={{ fontWeight: 600 }}>Recovered</Col>
                    <Col style={{}} className="text-right">
                      {summary.recovered}
                    </Col>
                  </Row>{" "}

                  <Row className="mb-2 border-bottom">
                    <Col style={{ fontWeight: 600 }}>Critical</Col>
                    <Col style={{}} className="text-right">
                      {summary.critical}
                    </Col>
                  </Row>

                  <Row className="mb-2 border-bottom">
                    <Col style={{ fontWeight: 600 }}>Tested</Col>
                    <Col style={{}} className="text-right">
                      {summary.tested}
                    </Col>
                  </Row>

                  <Row className="mb-2 border-bottom">
                    <Col style={{ fontWeight: 600 }}>Recovered Ratio</Col>
                    <Col style={{}} className="text-right">
                      {summary.recovery_ratio}
                    </Col>
                  </Row>

                  <Row className="mb-1">
                    <Col style={{ fontWeight: 600 }}>Deaths Ratio</Col>
                    <Col style={{}} className="text-right">
                      {summary.death_ratio}
                    </Col>
                  </Row>
                </>
              )}
            </BContainer>
          </Card>      
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
