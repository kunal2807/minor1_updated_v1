import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },

  palette: {
    common: {
      gradientLow: `#2c3e50`,
      gradientHigh: "#5758BB",
    },
    primary: {
      main: `#11cdef`,
    },
    secondary: {
      main: "#3175b4",
    },
  },

  typography: {
    h1: {
      // backgroundImage: "linear-gradient(to right, #ffefba, #ffffff)",
      // WebkitBackgroundClip: "text",
      // color: "white",
      // textTransform: "uppercase",
      // transition: "all .2s",
      // cursor: "default",
      // "&:hover": {
      //   transform: "skewY(2deg) skewX(15deg) scale(1.2)",
      //   textShadow: ".5rem 1rem 2rem  rgba($color-black, .2)",
      // }
    },

    h5: {
      backgroundImage: "linear-gradient(to right, #ffefba, #ffffff)",
      WebkitBackgroundClip: "text",
      color: "transparent",
      textTransform: "uppercase",
      fontSize: "3rem",
      align: "center",
      fontWeight: 800,
      marginBottom: "1.1rem",
      marginTop: "0.7rem",
    },

    button: {
      fontSize: "2rem",
      backgroundImage: "linear-gradient(to right, #e8cbc0, #636fa4)",
      color: "#fffaf0",
      fontWeight: 800,
      letterSpacing: "1.3rem",
      borderRadius: "10rem",
      align: "center",
      width: "20rem",
      transition: "all .2s",
      position: "relative",

      "&:hover": {
        transform: "scale(1.23) translateY(-1.3rem)",
        boxShadow: "0 1rem 2rem rgba(0,0,0, .2)",
      },

      "&:active, &:focus": {
        outline: "none",
        transform: "translateY(0rem)",
        boxShadow: "0 .5rem 1rem rgba($color-black,0.2)",
      },
    },
  },
});
