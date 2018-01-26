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
        user: {
          name: "Nico",
          status: "staff"
        },
        albumList: {
          name: "Last years",
          albums: [
            "A cros looked at me - Mount eerie",
            "Capacity - Big Thief",
            "life will you seee you now - jans"
          ]
        }
      },
      {
        user: {
          name: "Alex",
          status: "staff"
        },
        albumList: {
          name: "Last years",
          albums: [
            "dirty projects - s.t.",
            "rocket - sandy alex g",
            "the ooz - king krule"
          ]
        }
      }
    ];
    let albumCards = mockDataLists.map(list => {
      console.log(list);
      console.log(list.user.name);
      let albumList = list.albumList.albums.map(album => {
        return <li>{album}</li>;
      });
      return (
        <Card className="review-card">
          <CardHeader
            className="review-card__header"
            title={list.user.name}
            subtitle={list.user.status}
          >
            <Avatar src={""} />
          </CardHeader>
          <CardTitle title={list.albumList.name} subtitle={list.user.status} />
          <CardText>
            <ul>{albumList}</ul>
          </CardText>
        </Card>
      );
    });
    return <React.Fragment>{albumCards}</React.Fragment>;
  }
}

export default AlbumList;
