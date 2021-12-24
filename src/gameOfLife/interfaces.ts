export interface CellProps {
    x?: number,
    y?: number,
    active: boolean
    onClick: (x: number, y:number) => void
  }

export interface FieldProps {
  fieldArr: boolean[][];
  onClick: (x: number, y: number) => void;
}
