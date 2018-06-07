import {
  createStyles,
  Theme,
  Typography,
  WithStyles,
  withStyles
} from "@material-ui/core";
import * as React from "react";

interface IBook {
  category: "book";
  author: string;
}

interface IPainting {
  category: "painting";
  artist: string;
}

type BookOrPainting = IBook | IPainting;
type Props = BookOrPainting & WithStyles<typeof styles>;

const styles = (theme: Theme) =>
  createStyles({
    root: {
      color: "#F00"
    }
  });

export default withStyles(styles)<BookOrPainting>(
  class extends React.Component<Props> {
    public render() {
      return (
        <Typography classes={this.props.classes}>
          {this.props.category === "book"
            ? this.props.author
            : this.props.artist}
        </Typography>
      );
    }
  }
);
