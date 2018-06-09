import React, { Component } from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import AddAlbumModal from "./AddAlbumModal";

import Avatar from "material-ui/Avatar";
import "../css/album-list.css";

import db from "../firestore.js";

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artistTitle: "",
      albumTitle: "",
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
          albumLists.push({ id: doc.id, data: doc.data() });
        });
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({
      albumLists: albumLists
    });
  };

  addToList = (curList, docid) => {
    // Add a new document with a generated id.
    console.log(`adding to ${docid}`);
    console.log(curList);

    db.collection("lists")
      .doc(docid)
      .update({
        albums: curList
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };

  render() {
    let listByUsers = this.state.albumLists.map((doc, i) => {
      console.log(doc);
      let user = doc.data;
      let albumList = user.albums.map((album, i) => {
        return (
          <li key={i}>
            {album.artist} - {album.title}
          </li>
        );
      });
      return (
        <Card key={i} data-doc-id={doc.id} className="album-cards review-card">
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
          </CardText>
          <AddAlbumModal docid={doc.id} curList={user.albums} addToList={this.addToList} />
        </Card>
      );
    });
    return <React.Fragment>{listByUsers}</React.Fragment>;
  }
}

export default AlbumList;
