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

const BtnCustom = styled.span`
  position: relative;
  text-transform: none;
  text-align: center;
  transition: all 0.15s ease;
  letter-spacing: 0.025em;
  font-size: 0.875rem;
  will-change: transform;

  display: inline-block;
  font-weight: 600;
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
  font-size: 1rem;
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

export default class Main extends React.Component {
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
            <Link to="/survilliance/live">
              <BtnCustom color="#FF1493">START</BtnCustom>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}
