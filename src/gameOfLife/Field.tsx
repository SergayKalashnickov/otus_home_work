import React, { FC } from "react";
import {Cell} from "./Cell";
import "./Field.css";
import type { FieldProps } from "./interfaces";

const Field: FC<FieldProps> = ({ fieldArr, onClick }) => (
  <div className="field">
    {fieldArr.map((row, y) => [
      ...row.map((active: boolean, x) =>(
        <Cell y={y} x={x} active={active} onClick={onClick}/>
      )),
      y !== row.length - 1 ? <br/>: null,
    ])}
  </div>
);

export default Field;

export const getField = (props: FieldProps) => <Field {...props} />;
