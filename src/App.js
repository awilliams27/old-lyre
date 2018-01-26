/*

Jan 15 2018

lyre website

*/

import React, { Component } from "react";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
// for custom muiTheme
import getMuiTheme from "material-ui/styles/getMuiTheme";
import FlatButton from "material-ui/FlatButton";
import ReviewCard from "./components/ReviewCard";

// trying to do https://stackoverflow.com/questions/23258421/how-to-stop-app-that-node-js-express-npm-start
// see package.json for the added 'stop' command
process.title = App;

/*
custom muiTheme
More on Colors: http://www.material-ui.com/#/customization/colors
*/
const muiTheme = getMuiTheme({
  fontFamily: "Helvetica", //sans-serif',
  palette: {
    primary1Color: "#331111", // appbar background color
    textColor: "#000000",
    alternateTextColor: "#ffffff" // appbar text color
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar
          className="App-header"
          title="lyre"
          style={{ position: "fixed" }}
        />

        <div className="reviews-list">
          <ReviewCard />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
