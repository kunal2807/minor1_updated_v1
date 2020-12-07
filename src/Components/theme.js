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
      main: "rgb(17, 205, 239)",
    },
    secondary: {
      main: "#3175b4",
    },
  },

  typography: {

    h4: {
      fontFamily: "Comic Neue, cursive",
      fontWeight: 700
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

    h6: {
      fontFamily: "Comic Neue, cursive",
      fontWeight: 400
    },

    body1: {
      fontFamily: "Comic Neue, cursive",
      fontWeight: 400,
      fontStyle: "italic"
      // fontWeight: "700"
    },

    body2: {
      fontFamily: "Comic Neue, cursive",
      fontWeight: 400,
      fontSize: "2rem",
      lineHeight: 0,
      fontStyle: "italic"
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
