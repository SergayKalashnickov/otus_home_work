import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import {Cell} from "./Cell";
export default {
  title: "GameOfLife / Cell",
  decorators: [withKnobs],
};


export const nonActive = () => [
    <Cell
    active={false}
    x={1}
    y={1}
    onClick={action("Cell clicked(jsx")}
    />,
  ];
  export const active = () => [
    <Cell
    active={true}
    x={1}
    y={1}
    onClick={action("Cell clicked(jsx")}
    />,
  ];
  // export const filledWithX = () => [
  //   getCellElement({
  //     filled: text("filled with", "x"),
  //     onClick: action("Cell clicked"),
  //     x: number("x", 1),
  //     y: number("y", 2),
  //   }),
  //   <Cell
  //     onClick={action("Cell clicked(jsx")}
  //     filled={text("filled with", "x")}
  //     x={number("x", 1)}
  //     y={number("y", 2)}
  //     key="jsx"
  //   />,
  // ];
  
  // export const filledWithY = () => [
  //   getCellElement({
  //     filled: text("filled with", "y"),
  //     onClick: action("Cell clicked"),
  //     x: number("x", 1),
  //     y: number("y", 2),
  //   }),
  //   <Cell
  //     onClick={action("Cell clicked(jsx")}
  //     filled={text("filled with", "y")}
  //     x={number("x", 1)}
  //     y={number("y", 2)}
  //     key="jsx"
  //   />,
  // ];
  