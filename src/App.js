/*

Jan 15 2018

lyre website

*/

import React, { Component } from "react";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
// for custom muiTheme
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// for cards
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// import images
import jens from './images/jens.jpg';
import sierp from './images/Sierpinski Pyramid.png';

// trying to do https://stackoverflow.com/questions/23258421/how-to-stop-app-that-node-js-express-npm-start
// see package.json for the added 'stop' command
process.title = App;

/*
custom muiTheme
More on Colors: http://www.material-ui.com/#/customization/colors
*/
const muiTheme = getMuiTheme({
  fontFamily: 'Helvetica', //sans-serif',
  palette: {
    primary1Color: '#332222', // appbar background color
    textColor: '#000000',
    alternateTextColor: '#ffffff', // appbar text color
    //canvasColor: '#303030',
  },
  appBar: {
    height: 100,
  },
  paper: {
    height: 200,
    width: '50%',
    margin: 200,
    textAlign: 'center',
    display: 'inline-block',
  },
});

/*
divStyle
*/
const divStyle = {
  width: '40%',
  margin: '0 auto',
  justifyContent: 'center'
};

/*
cardStyle
*/
const cardStyle = {
  margin: '50px 0px 50px 0px'
};

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme = {muiTheme}>
        <AppBar
          title="lyre"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />

        <div style={divStyle}>
          <Card style={cardStyle}>
            <CardHeader
              title="reviewer name"
              subtitle="subtitle"
              avatar={jens}
            />
            <CardMedia
              //overlay={<CardTitle title="review title" subtitle="review subtitle" />}
            >
              <img src={jens}/>
            </CardMedia>
            <CardTitle title="title" subtitle="subtitle" />
            <CardText>
              this is a scathing review of jens lekmans album Life Will See You Now
            </CardText>
            <CardActions>
              <FlatButton label="Action 1" />
              <FlatButton label="Action 2" />
            </CardActions>
          </Card>
        </div>

        <div style={divStyle}>
          <Card style={cardStyle}>
            <CardHeader
              title="reviewer name"
              subtitle="subtitle"
              avatar={sierp}
            />
            <CardMedia
              //overlay={<CardTitle title="review title" subtitle="review subtitle" />}
            >
              <img src={sierp}/>
            </CardMedia>
            <CardTitle title="title" subtitle="subtitle" />
            <CardText>
              a loving essay in support of sierpinski pyramids.
            </CardText>
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
