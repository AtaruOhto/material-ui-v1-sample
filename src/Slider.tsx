import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/lab/Slider";
import * as React from "react";

const styles = {
  container: {
    width: 300
  }
};

interface IProps {
  classes: any;
}

interface IState {
  value: number;
}

class SimpleSlider extends React.Component<IProps, IState> {
  public state = { value: 50 };
  public handleChange = (event: any, value: number) => this.setState({ value });

  public render() {
    return (
      <>
        <h1>Slider</h1>
        <div className={this.props.classes.container}>
          <Slider value={this.state.value} onChange={this.handleChange} />
        </div>
      </>
    );
  }
}

export default withStyles(styles)(SimpleSlider);
