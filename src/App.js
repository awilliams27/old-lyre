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

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme = {muiTheme}>
        <AppBar
          title="lyre"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />

        <div style={{width: '60%', margin: '0 auto'}}>
          <Card style={{width:'100%', justifyContent: 'center'}}>
            <CardHeader
              title="reviewer name"
              subtitle="subtitle"
              avatar="./images/jens.jpg"
            />
            <CardMedia
              //overlay={<CardTitle title="review title" subtitle="review subtitle" />}
            >
              <img src="./images/jens.jpg" alt="./images/jens.jpg" />
            </CardMedia>
            <CardTitle title="other title" subtitle="other subtitle" />
            <CardText>
              this is a scathing review of jen's lekman's album Life Will See You Now
            </CardText>
            <CardActions>
              <FlatButton label="Action1" />
              <FlatButton label="Action2" />
            </CardActions>
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
