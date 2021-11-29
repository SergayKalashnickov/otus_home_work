import { isNumber, isUnary, isBinary } from "./helpers";

export type ParsedLineType = (number | string)[];

export const parser = (line: string): ParsedLineType | null => {
  const stack = line.split(" ");

  return stack.reduce<ParsedLineType>((result, item, key) => {
    const prevItem = stack[key - 1];

    const isValidNumberPush = !isNumber(prevItem) && isNumber(item);

    const operatorNexsNumber = isNumber(prevItem) && (isBinary(item) || isUnary(item))

    const binaryOperatorsAfterUnary = isUnary(prevItem) && isNumber(item)

    // eslint-disable-next-line no-prototype-builtins
    const isValidOperatorPush = operatorNexsNumber || binaryOperatorsAfterUnary

    if (isValidNumberPush) {
      result.push(Number(item));
    } else if (isValidOperatorPush) {
      result.push(item);
    } else {
      throw new TypeError("Unexpected string");
    }
    return result;
  }, []);
};
