import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Icon from "@material-ui/core/Icon";

import { withStyles } from "@material-ui/core/styles";
import * as React from "react";

const styles = {
  list: {
    width: 250
  },
  listIcon: {
    marginLeft: "8px"
  },
  listItem: {
    alignItems: "center",
    display: "flex",
    padding: "12px 8px"
  }
};

interface IProps {
  classes: any;
}

class TemporaryDrawer extends React.Component<IProps> {
  public state = {
    bottom: false,
    left: false,
    right: false,
    top: false
  };

  public toggleDrawer = (side: any, open: any) => () => {
    this.setState({
      [side]: open
    });
  };

  public render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <div className={classes.listItem}>
          <Icon className={classes.listIcon} color="primary">
            home
          </Icon>
          <span>Home</span>
        </div>
        <Divider />
        <div className={classes.listItem}>
          <Icon className={classes.listIcon} color="primary">
            add_circle
          </Icon>
          <span>Add</span>
        </div>
        <Divider />
        <div className={classes.listItem}>
          <Icon className={classes.listIcon} color="primary">
            bookmark
          </Icon>
          <span>Bookmark</span>
        </div>
        <Divider />
      </div>
    );

    const fullList = (
      <div>
        <div className={classes.listItem}>
          <Icon className={classes.listIcon} color="primary">
            home
          </Icon>
          <span>Home</span>
        </div>
        <Divider />
        <div className={classes.listItem}>
          <Icon className={classes.listIcon} color="primary">
            add_circle
          </Icon>
          <span>Add</span>
        </div>
        <Divider />
        <div className={classes.listItem}>
          <Icon className={classes.listIcon} color="primary">
            bookmark
          </Icon>
          <span>Bookmark</span>
        </div>
        <Divider />
        <div className={classes.listItem}>
          <Icon className={classes.listIcon} color="secondary">
            grade
          </Icon>
          <span>star</span>
        </div>
        <Divider />
        <div className={classes.listItem}>
          <Icon className={classes.listIcon} color="secondary">
            adb
          </Icon>
          <span>ADB</span>
        </div>
        <Divider />
      </div>
    );

    return (
      <div>
        <Button onClick={this.toggleDrawer("left", true)}>Open Left</Button>
        <Button onClick={this.toggleDrawer("right", true)}>Open Right</Button>
        <Button onClick={this.toggleDrawer("top", true)}>Open Top</Button>
        <Button onClick={this.toggleDrawer("bottom", true)}>Open Bottom</Button>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            {sideList}
          </div>
        </Drawer>
        <Drawer
          anchor="top"
          open={this.state.top}
          onClose={this.toggleDrawer("top", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("top", false)}
            onKeyDown={this.toggleDrawer("top", false)}
          >
            {fullList}
          </div>
        </Drawer>
        <Drawer
          anchor="bottom"
          open={this.state.bottom}
          onClose={this.toggleDrawer("bottom", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("bottom", false)}
            onKeyDown={this.toggleDrawer("bottom", false)}
          >
            {fullList}
          </div>
        </Drawer>
        <Drawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer("right", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("right", false)}
            onKeyDown={this.toggleDrawer("right", false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(TemporaryDrawer as any);
