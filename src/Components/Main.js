import React from 'react';
import {Button, Typography, makeStyles, Grid} from '@material-ui/core';
// import { Link } from 'react-router-dom';
// import theme from './theme'

const useStyles = makeStyles(theme=>({
  heading: {
    marginTop: "20rem",
    marginBottom: "8rem",
    [theme.breakpoints.down("sm")]: {
      "&:hover": {
        transform: "none",
        textShadow: "none",
      }
    }
  },

  background: {
    // backgroundColor: "blue",
    backgroundImage: "linear-gradient(to right bottom, #373b44, #4286f4)",
    backgroundSize: "cover",
    width: "100vw",
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      width: "159vw",
      height: "148.5vh"
    }
  },

  button: {
    ...theme.typography.button,
    // marginBottom: "16.5rem"
  }
}))

export default function Main(){

  const classes=useStyles()
  // const theme=useTheme()
 
  return(
    <React.Fragment>
      <Grid container alignItems="center" direction="column" className={classes.background}>
        <Grid item>
          <Typography align="center" variant="h1" className={classes.heading}>
            COVID-19 survilance system
          </Typography>
        </Grid>

        <Grid item>
          <Button className={classes.button} href="/Survilance">
              START
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}