import * as React from "react";
import * as ReactDOM from "react-dom";

import Drawer from "./Drawer";
import SlideDialog from "./SlideDialog";
import Slider from "./Slider";
import WithStyleSample from "./WithStyle";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <>
    <Slider />
    <Drawer />
    <SlideDialog />
    <WithStyleSample category={"book"} author={"middle"} />
  </>,

  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
