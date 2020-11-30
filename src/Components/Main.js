import React from "react";
// import { Button, Typography, makeStyles, Grid } from "@material-ui/core";
// import { Link } from 'react-router-dom';
// import theme from './theme'
import Typed from "typed.js";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Heading = styled.h1`
  // margin-top: 20rem;
  // margin-bottom: 8rem;
  font-family: Cursive;
  font-size: 4rem;
  color: white;
  text-align: center;
`;

const Button = styled.button`
  display: inline-block;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;

  user-select: none;
  border: 1px solid transparent;
  padding: 0.625rem 1.25rem;
  line-height: 1.5;
  border-radius: 0.375rem;
  position: relative;
  text-transform: none;
  transition: all 0.15s ease;
  letter-spacing: 0.025em;
  font-size: 0.875rem;
  will-change: transform;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  box-shadow: none;
  color: #fff;
  background-color: #324cdd;
  border-color: #5e72e4;
  &:hover {
    text-decoration: none;
    transform: translateY(-1px);
  }
  &:focus {
    text-decoration: none;
    transform: translateY(-1px);
    border: none;
  }
`;
// const useStyles = makeStyles((theme) => ({
//   heading: {
//     marginTop: "20rem",
//     marginBottom: "8rem",
//     fontFamily: "Cursive",
//     fontSize: "4rem",
//     color: "white",
//     textAlign: "center",
//   },

//   background: {
//     // backgroundColor: "blue",
//     // backgroundImage: "linear-gradient(to right bottom, #373b44, #4286f4)",
//     backgroundImage: "linear-gradient(87deg,#11cdef,#1171ef)!important",
//     backgroundSize: "cover",
//     width: "100vw",
//     height: "100vh",
//     [theme.breakpoints.down("sm")]: {
//       width: "159vw",
//       height: "148.5vh",
//     },
//   },

//   button: {
//     ...theme.typography.button,
//     // marginBottom: "16.5rem"
//   },
// }));

export default class Main extends React.Component {
  // const classes = useStyles();
  // const theme=useTheme()

  componentDidMount() {
    // AOS.init();
    // Hero typed
    var myStrings = [
      "COVID-19 survilance system",
      "For Live , Autonomous Detection and Scanning",
      "Smart and Efficient",
    ];
    this.typed = new Typed(".typed-heading", {
      strings: myStrings,
      typeSpeed: 100,
      startDelay: 1000,
      backSpeed: 50,
      backDelay: 2000,
      smartBackspace: false,
      loop: true,
    });
  }
  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <Container
        fluid
        style={{
          background: "linear-gradient(87deg,#11cdef,#1171ef)",
          backgroundSize: "cover",
        }}
        className=""
      >
        <Row
          style={{ width: "100vw", height: "100vh" }}
          className="justify-content-center align-items-center"
        >
          <Col md="12">
            <Heading className="">
              <span className="typed-heading"></span>
            </Heading>
          </Col>
          <Col md="1" className="align-self-center">
            {/* <Button
              className="btn "

            > */}
            <Link
              className="text-white btn btn-primary btn-lg "
              style={{ backgroundColor: "#5e72e4", borderColor: "#5e72e4" }}
              to="/survilliance"
            >
              START
            </Link>
            {/* </Button> */}
          </Col>
        </Row>
      </Container>
    );
  }
}
