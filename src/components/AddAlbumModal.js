import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class AddAlbumModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      artistTitle: '',
      albumTitle: ''
    };
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleArtistTitleChange = e => {
    this.setState({
      artistTitle: e.target.value
    });
  };

  handleTitleChange = e => {
    this.setState({
      albumTitle: e.target.value
    });
  };

  addToList = () => {
    let curList = [...this.props.curList];
    curList.push({
        artist: this.state.artistTitle,
        title: this.state.albumTitle
      });
    this.props.addToList(curList, this.props.docid);
  };
  render() {
    return (
      <React.Fragment>
        <Button onClick={this.handleClickOpen}>Open form dialog</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <label>Artist Name</label>
            <input
              value={this.state.artistTitle}
              onChange={this.handleArtistTitleChange}
            />
            <label>Album Title</label>
            <input
              value={this.state.albumTitle}
              onChange={this.handleTitleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                this.handleClose();
                this.addToList();
              }}
              color="primary"
            >
              Add to List for {this.props.docid}
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default AddAlbumModal;
