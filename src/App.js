/*Jan 15 2018
lyre website*/

import React, { Component } from "react";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
// for custom muiTheme
import getMuiTheme from "material-ui/styles/getMuiTheme";
import FlatButton from "material-ui/FlatButton";
import ReviewCard from "./components/ReviewCard";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import AlbumList from "./components/AlbumList";

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
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleToggle = () =>
    this.setState({
      open: !this.state.open
    });

  handleKeyPress = (event) => {
    if(event.key === 'n'){
      this.handleToggle
      alert('n press')
    }
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider muiTheme={muiTheme}>
          <AppBar
            className="App-header"
            title="lyre"
            style={{ position: "fixed" }}
            onLeftIconButtonClick={this.handleToggle}
            onKeyPress={this.handleKeyPress}
          />
          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={this.handleToggle}
          >
            <MenuItem>
              <Link to="/" className="drawerLink" onClick={this.handleToggle}>
                home
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/reviews" className="drawerLink" onClick={this.handleToggle}>
                reviews
              </Link>
            </MenuItem>
            <MenuItem onClick={this.props.handleToggle}>
              <Link to="/albumList" className="drawerLink" onClick={this.handleToggle}>
                lists
              </Link>
            </MenuItem>
          </Drawer>
          <Route exact path="/"
            render={props => (
              <div className="reviews-list">
                <ReviewCard />
              </div>
            )}
          />
          <Route
            path="/reviews"
            render={props => (
              <div className="reviews-list">
                <ReviewCard />
              </div>
            )}
          />
          <Route
            path="/albumList"
            render={props => (
              <div className="reviews-list">
                <AlbumList />
              </div>
              )}
            />
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
