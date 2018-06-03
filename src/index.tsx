import * as React from "react";
import * as ReactDOM from "react-dom";

import Drawer from "./Drawer";
import SlideDialog from "./SlideDialog";
import Slider from "./Slider";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <>
    <Slider />
    <Drawer />
    <SlideDialog />
  </>,

  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
