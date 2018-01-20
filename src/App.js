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
// for cards
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import Avatar from "material-ui/Avatar";

// import images
import jens from "./images/jens.jpg";
import lifewillseeyounow from "./images/lifewillseeyounow.jpg";
import ruins from "./images/ruins.jpg";

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
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar
          className="App-header"
          title="lyre"
        />

        {/* to add white space after floating/fixed appbar */}
        <span> <br/><br/><br/></span>

        <div className="reviews-list">
          <Card className="review-card">
            <CardMedia>
              <img src={lifewillseeyounow} />
            </CardMedia>
            <CardHeader
              className="review-card__header"
              title="fens lake-man"
              subtitle="staff"
            >
              <Avatar src={jens} />
            </CardHeader>
            <CardTitle
              title="Life Will See You Now"
              subtitle="Jens Lekman"
            />
            <CardText>
              this is a scathing review of jens lekmans album Life Will See You
              Now
            </CardText>
          </Card>

          <Card className="review-card">
            <CardMedia>
              <img src={ruins} />
            </CardMedia>

            <CardTitle
              className="review-card__title"
              title="Ruins"
              subtitle="NOT Grouper"
            />
            <CardHeader
              className="review-card__header"
              title="angry lydia lunch"
              subtitle="still angry"
            >
              <Avatar src={ruins} />
            </CardHeader>
            <CardText>
              ruins is good
            </CardText>
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
