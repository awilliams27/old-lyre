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
import "../css/album-list.css";

import db from "../firestore.js";

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albumLists: []
    };
  }

  componentDidMount() {
    this.getAllLists().catch(resp => {
      console.error(resp);
    });
  }

  getAllLists = async () => {
    let albumLists = [];
    db.collection("lists")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          albumLists.push(doc.data());
        });
      })
      .catch(err => {
        console.log(err);
      });

    console.log(albumLists);
    this.setState({
      albumLists: albumLists
    });
  };

  render() {
    let listByUsers = this.state.albumLists.map((user, i) => {
      let albumList = user.albums.map((album, i) => {
        return <li key={i}>{album.artist} - {album.title}</li>;
      });
      return (
        <Card key={i} className="album-cards review-card">
          <CardTitle
            title={user.listname}
            subtitle={user.listsubname}
            style={{ display: "inline-block" }}
          />
          <CardHeader
            className="review-card__header"
            title={user.writer}
            subtitle={user.status}
            style={{ textAlign: "right" }}
          >
            <Avatar src={""} />
          </CardHeader>
          <CardText className="album-list">
            <ul>{albumList}</ul>
            <ul>{albumList}</ul>
            <ul>{albumList}</ul>
          </CardText>
        </Card>
      );
    });
    return <React.Fragment>{listByUsers}</React.Fragment>;
  }
}

export default AlbumList;
