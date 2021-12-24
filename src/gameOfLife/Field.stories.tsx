import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";
import Field from "./Field";

export default {
  title: "GameOfLife / Field",
  decorators: [withKnobs],
};

export const emptyField = () => [
  <Field
    onClick={action("Cell clicked (jsx")}
    fieldArr={object("field", [
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ])}
  />,
];

export const nonEmptyField = () => [
  <Field
    onClick={action("Cell clicked (jsx")}
    fieldArr={[
      [true, true, true],
      [true, true, true],
      [true, true, true],
    ]
    }
  />,
];
