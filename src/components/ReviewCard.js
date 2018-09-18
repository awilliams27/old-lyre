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
import "../css/review-card.css";

import db from "../firestore.js";

class ReviewCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsList: [],
      isExpanded: false
    };
  }

  componentDidMount() {
    this.getAllReviews().catch(resp => {
      console.error(resp);
    });
  }

  getAllReviews = async () => {
    let reviewsList = [];
    db.collection("reviews")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          reviewsList.push({ id: doc.id, data: doc.data() });
        });
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({
      reviewsList: reviewsList
    });
  };

  addToList = (curList, docid) => {
    // Add a new document with a generated id.
    console.log(`adding review to ${docid}`);
    console.log(curList);

    db.collection("reviews")
      .doc(docid)
      .update({
        reviews: curList
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };

  toggleExpand = () => {
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  };

  render() {
    let reviewsList = this.state.reviewsList.map((doc, i) => {
      console.log(doc);
      let review = doc.data;

      let notExpandedDetailContentStyle = {
        maxHeight: "40vh",
        overflow: "hidden",
        background: "linear-gradient(black, white)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      };
      let expandedDetailContentStyle = {
        maxHeight: "100%"
      };
      return (
        <Card className="review-cards review-card">
          <div className="review-card-img">
            <CardMedia>
              <img
                // todo: call contentful api for image
                src="./images/jens"
                style={{
                  minWidth: "500px",
                  maxWidth: "500px",
                  minHeight: "500px",
                  maxHeight: "500px"
                }}
              />
            </CardMedia>
          </div>
          <div className="review-card-details">
            <CardHeader
              className="review-card__header"
              title={review.writer}
              // todo: call contentful api for author image
              subtitle={"nerdy cat"}//db.collection("writers").get("writer").get().status}
              style={{ paddingRight: "10px", paddingTop: "10px" }}
            >
              <Avatar src={review.avatar} />
            </CardHeader>
            <CardTitle title={review.album} subtitle={review.artist} />
            <CardText
              style={
                this.state.isExpanded
                  ? expandedDetailContentStyle
                  : notExpandedDetailContentStyle
              }
              className="review-card-details__content"
              onClick={this.toggleExpand}
            >
              {review.text}
              </CardText>
            </div>
          </Card>
      );
    });
    return <React.Fragment>{reviewsList}</React.Fragment>;
  }
}

export default ReviewCard;
