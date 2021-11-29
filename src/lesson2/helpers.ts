import { binaryOperators, unaryOperators } from "./mathOperators";
export const isNumber = (item: string): boolean => !isNaN(Number(item));
// eslint-disable-next-line no-prototype-builtins
export const isUnary = (item: string): boolean => unaryOperators.hasOwnProperty(item)
// eslint-disable-next-line no-prototype-builtins
export const isBinary = (item: string): boolean => binaryOperators.hasOwnProperty(item)