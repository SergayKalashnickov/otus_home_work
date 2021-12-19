import { action } from "@storybook/addon-actions";
import React, { FC, ReactElement } from "react";
import "./Cell.css";
import type { CellProps } from "./interfaces";

export function Cell(props: CellProps) {
    
    if (props.active){
        return (
            <button className="cell cell-active" onClick={()=> props.onClick(props.x || 0, props.y || 0)}>
                {props.x}{props.y}
            </button>
        )
    }
    else {
        return (
            <button className="cell cell-noActive">
                {" "}
            </button>
        )
    }
  }
  