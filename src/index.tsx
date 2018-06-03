import * as React from "react";
import * as ReactDOM from "react-dom";

import Drawer from "./Drawer";
import Slider from "./Slider";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <>
    <Slider />
    <Drawer />
  </>,

  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
