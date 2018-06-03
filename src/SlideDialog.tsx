import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import * as React from "react";

const styles = {
  paper: {
    backgroundColor: "#C5CAE9"
  }
};

interface IProps {
  classes: {
    paper: any;
  };
}

class AlertDialogSlide extends React.Component<IProps> {
  public state = {
    open: false
  };

  public handleClickOpen = () => {
    this.setState({ open: true });
  };

  public handleClose = () => {
    this.setState({ open: false });
  };

  public render() {
    return (
      <div>
        <h1>Dialog</h1>
        <Button onClick={this.handleClickOpen}>Slide in alert dialog</Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={this.renderTransition}
          keepMounted={true}
          onClose={this.handleClose}
          classes={{ paper: this.props.classes.paper }}
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  private renderTransition = (props: IProps) => (
    <Slide direction="up" {...props} />
  );
}

export default withStyles(styles)(AlertDialogSlide as any);
