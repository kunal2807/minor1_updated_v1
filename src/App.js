
import Main from './Components/Main';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './Components/theme';
import Survilance from './Components/survillance';


const showMain = () => {
  if (window.location.pathname === "/") {
    return <Main/>
  }
}

const showSurvilance = () => {
  if (window.location.pathname === "/Survilance") {
    return <Survilance/>
  }
}


function App() {
  return (
    <div>
    <MuiThemeProvider theme={theme}>
      {showMain()}
      {showSurvilance()}
    </MuiThemeProvider>
    </div>
  );
}

export default App;
