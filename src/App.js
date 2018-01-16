import React, { Component } from "react";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
// for custom muiTheme
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';

// trying to do https://stackoverflow.com/questions/23258421/how-to-stop-app-that-node-js-express-npm-start
// see package.json for the added 'stop' command
process.title = App;

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#000000',
    textColor: '#000000',
    canvasColor: fullBlack,
  },
  appBar: {
    height: 100,
  },
});

/*
// inline style reference
style={{
  width: '100%',
  margin: '2 auto',
  border: '0px solid #000000',
  backgroundColor: '#442222',

}}
*/

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme = {muiTheme}>
        <AppBar
          title="lyre"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      </MuiThemeProvider>
    );
  }
}

export default App;
