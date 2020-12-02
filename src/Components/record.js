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

const Streamer = styled.div`
  height: 88vh;
  width: 100%;
  background-color: #202124;
  margin-bottom: 1.5rem;
  border-radius: 10px;
`;
export default class live extends Component {
  render() {
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
            <h3 className="text-center text-grey">Upload Section </h3>
          </Col>
        </Row>
        <Grid item>
          <Streamer>
            <img url="localhost:8000/video_feed" alt="feed" />
          </Streamer>
        </Grid>
      </Grid>
    );
  }
}
