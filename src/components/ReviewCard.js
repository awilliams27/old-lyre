import React, { Component } from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";

import Avatar from "material-ui/Avatar";

// import images
import jens from "../images/jens.jpg";
import lifewillseeyounow from "../images/lifewillseeyounow.jpg";

class ReviewCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }

  toggleExpand = () => {
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  };

  render() {
    let notExpandedDetailContentStyle = {
      maxHeight: "40vh",
      overflow: "hidden",
      background: "linear-gradient(black, white)",
      webkitBackgroundClip: "text",
      webkitTextFillColor: "transparent"
    };
    let expandedDetailContentStyle = {
      maxHeight: "100%"
    };
    return (
      <Card className="review-card">
        <div className="review-card-img">
          <CardMedia>
            <img src={lifewillseeyounow} style={{ maxHeight: "500px" }} />
          </CardMedia>
        </div>
        <div className="review-card-details">
          <CardHeader
            className="review-card__header"
            title="fens lake-man"
            subtitle="staff"
          >
            <Avatar src={jens} />
          </CardHeader>
          <CardTitle title="Life Will See You Now" subtitle="Jens Lekman" />
          <CardText
            style={
              this.state.isExpanded
                ? expandedDetailContentStyle
                : notExpandedDetailContentStyle
            }
            className="review-card-details__content"
            onClick={this.toggleExpand}
          >
            this is a scathing review of jens lekmans album Life Will See You
            Now this is a scathing review of jens lekmans album Life Will See
            You lifewillseeyounowthis is a scathing review of jens lekmans album
            Life Will See You Nowthis is a scathing review of jens lekmans album
            Life Will See You Nowthis is a scathing review of jens lekmans album
            Life Will See You Nowthis is a scathing review of jens lekmans album
            Life Will See You Nowthis is a scathing review of jens lekmans album
            Life Will See You Nowthis is a scathing review of jens lekmans album
            Life Will See You Nowu lifewillseeyounowthis is a scathing review of
            jens lekmans album Life Will See You Nowthis is a scathing review of
            jens lekmans album Life Will See You Nowthis is a scathing review of
            jens lekmans album Life Will See You Nowthis is a scathing review of
            jens lekmans album Life Will See You Nowthis is a scathing review of
            jens lekmans album Life Will See You Nowthis is a scathing review of
            jens lekmans album Life Will See You Nowu lifewillseeyounowthis is a
            scathing review of jens lekmans album Life Will See You Nowthis is a
            scathing review of jens lekmans album Life Will See You Nowthis is a
            scathing review of jens lekmans album Life Will See You Nowthis is a
            scathing review of jens lekmans album Life Will See You Nowthis is a
            scathing review of jens lekmans album Life Will See You Nowthis is a
            scathing review of jens lekmans album Life Will See You Nowu
            lifewillseeyounowthis is a scathing review of jens lekmans album
            Life Will See You Nowthis is a scathing review of jens lekmans album
            Life Will See You Nowthis is a scathing review of jens lekmans album
            Life Will See You Nowthis is a scathing review of jens lekmans album
            Life Will See You Nowthis is a scathing review of jens lekmans album
            Life Will See You Nowthis is a scathing review of jens lekmans album
            Life Will See You Nowu lifewillseeyounowthis is a scathing review of
            jens lekmans album Life Will See You Nowthis is a scathing review of
            jens lekmans album Life Will See You Nowthis is a scathing review of
            jens lekmans album Life Will See You Nowthis is a scathing review of
            jens lekmans album Life Will See You Nowthis is a scathing review of
            jens lekmans album Life Will See You Nowthis is a scathing review of
            jens lekmans album Life Will See You Now
          </CardText>
        </div>
      </Card>
    );
  }
}

export default ReviewCard;
