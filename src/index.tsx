import React from "react";
import { render } from "react-dom";

import Field from "./lesson4/Field";
import InteractiveField from "./lesson4/InteractiveField";

render(
  <InteractiveField
    xSize={3}
    ySize={3}
    playerMarks={["playerMarks"]}
    fieldComponent={Field}
  />,
  document.getElementById("root")
);
