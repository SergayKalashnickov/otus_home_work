// eslint-disable-next-line no-unused-vars
export type ScalarOperationType = (first: number, second: number) => number;
// eslint-disable-next-line no-unused-vars
export type UnaryOperationType = (first: number) => number;

export const mul: ScalarOperationType = (
  first: number,
  second: number
): number => first * second;

export const div: ScalarOperationType = (
  first: number,
  second: number
): number => first / second;

export const add: ScalarOperationType = (
  first: number,
  second: number
): number => first + second;

export const minus: ScalarOperationType = (
  first: number,
  second: number
): number => first - second;

export const pwr: ScalarOperationType = (
  first: number,
  second: number
): number => {
  return first ** second;
}

export const exp: UnaryOperationType =(
  first: number
): number => {
  return first * first;
}

export const fact: UnaryOperationType = (first: number) =>{
  let result : number = 1;
  for(let i=1; i<=first;i++){
    result *= i
  }
  return result
}

export const unaryOperators: { [key: string]: UnaryOperationType } = {
  "**": exp,
  "!": fact
}

export const binaryOperators: { [key: string]: ScalarOperationType } ={
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "^": pwr,
}

export const mathOperators: { [key: string]: ScalarOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "^": pwr,
  "**": exp,
  "!": fact
};

export const mathPriorities: number[] = [1, 2];

const [FIRST, SECOND] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "*": FIRST,
  "/": FIRST,
  "^": FIRST,
  "**": FIRST,
  "+": SECOND,
  "-": SECOND,
  "!": FIRST,
};
