import React, { Component } from "react";
import {
  AppBar,
  Grid,
  makeStyles,
  Button,
  Typography,
} from "@material-ui/core";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Redirect } from "react-router";

const Streamer = styled.div`
  height: 88vh;
  width: 100%;
  background-color: #202124;
  margin-bottom: 1.5rem;
  border-radius: 10px;
`;
let BtnCustom = styled.span`
  position: relative;
  text-transform: none;
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

  padding: 0.625rem 1.25rem;
  font-size: 1rem;
  line-height: 1.5;

  border-radius: 0.5rem;

  &:hover: {
    color: grey;
  }
`;
export default class live extends Component {
  state = {
    redirect: null,
  };

  handleClick = () => {
    console.log("handled clicked");
    this.setState({ redirect: "/" });
  };
  render() {
    if (this.state.redirect) return <Redirect to={this.state.redirect} />;

    return (
      <Grid
        item
        container
        direction="column"
        lg
        style={{ marginLeft: "25px", marginTop: "25px" }}
      >
        <Row className="my-2">
          <Col>
            <h3 className="text-center text-grey">Live Detection </h3>
          </Col>
        </Row>
        <Grid item>
          <Streamer>
            <img url="localhost:8000/video_feed" alt="feed" />
          </Streamer>
        </Grid>
        <Row className="justify-content-center my-3">
          <Col md="1">
            <BtnCustom color="#FF1493" onClick={this.handleClick}>
              {" "}
              Stop
            </BtnCustom>
          </Col>
        </Row>
      </Grid>
    );
  }
}
