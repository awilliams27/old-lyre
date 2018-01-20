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
    primary1Color: "#332222", // appbar background color
    textColor: "#000000",
    alternateTextColor: "#ffffff" // appbar text color
    //canvasColor: '#303030',
  },
  appBar: {
    height: 90
  },
  paper: {
    height: 200,
    width: "50%",
    margin: 200,
    textAlign: "center",
    display: "inline-block"
  }
});

/*
divStyle
*/
const divStyle = {
  width: "40%",
  margin: "0 auto",
  justifyContent: "center"
};

/*
cardStyle
*/
const cardStyle = {
  margin: "30px 0px 30px 0px"
};

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar
          title="lyre"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />

        <div style={divStyle}>
          <Card style={cardStyle}>
            <CardMedia>
              <img src={lifewillseeyounow} />
            </CardMedia>
            <CardHeader
              style={{ justifyContent: "right" }}
              avatar={jens}
              title="fens lake-man"
              subtitle="subtitle"
            />
            <CardTitle title="title" subtitle="subtitle" />
            <CardText>
              this is a scathing review of jens lekmans album Life Will See You
              Now
            </CardText>
            <CardActions>
              <FlatButton label="Action 1" />
              <FlatButton label="Action 2" />
            </CardActions>
          </Card>
        </div>

        <div style={divStyle}>
          <Card className="review-card" style={cardStyle}>
            <CardMedia>
              <img src={ruins} />
            </CardMedia>

            <CardTitle
              style={{ display: "inline-block" }}
              title="title"
              subtitle="subtitle"
            />
            <CardHeader
              className="review-card__header"
              style={{ display: "inline-block" }}
              title="name"
              subtitle="subtitle"
            >
              <Avatar src={ruins} />
            </CardHeader>

            <CardText>ruins is good</CardText>
            <CardActions>
              <FlatButton label="Action 1" />
              <FlatButton label="Action 2" />
            </CardActions>
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
