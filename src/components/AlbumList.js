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

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        picturePath: "",
        status: ""
      },
      albumList: {
        name: "",
        albums: []
      }
    };
  }

  render() {
    let mockDataLists = [
      {
        name: "Nico",
        status: "staff",
        listsBuilt: [
          {
            name: "2017",
            subName: "Best Albums",
            albums: [
              "A cros looked at me - Mount eerie",
              "Capacity - Big Thief",
              "life will you seee you now - jans"
            ]
          }
        ]
      },
      {
        name: "Alex",
        status: "staff",
        listsBuilt: [
          {
            name: "2017",
            subName: "Best Albums",
            albums: [
              "A cros looked at me - Mount eerie",
              "Capacity - Big Thief",
              "life will you seee you now - jans"
            ]
          }
        ]
      }
    ];
    let listByUsers = mockDataLists.map(user => {
      let cardsByUser = user.listsBuilt.map((userList, i) => {
        let albumList = userList.albums.map((album, i) => {
          return <li key={i}>{album}</li>;
        });
        return (
          <Card key={i} className="album-cards review-card">
            <CardTitle
              title={userList.name}
              subtitle={userList.subName}
              style={{ display: "inline-block" }}
            />
            <CardHeader
              className="review-card__header"
              title={user.name}
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
      return cardsByUser;
    });
    return <React.Fragment>{listByUsers}</React.Fragment>;
  }
}

export default AlbumList;
