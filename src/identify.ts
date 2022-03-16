import type {
  LetterValue,
  NumberValue,
  ParenthesisValue,
  WhitespaceValue,
} from './types';

const LETTER = /[a-zA-Z]/;
const WHITESPACE = /\s+/;
const NUMBER = /^[0-9]+$/;
const OPERATORS = ['+', '-', '*', '/', '%'];

const isLetter = (character: string | LetterValue): character is LetterValue =>
  LETTER.test(character);

const isWhitespace = (
  character: string | WhitespaceValue,
): character is WhitespaceValue => WHITESPACE.test(character);

const isNumber = (character: string | NumberValue): character is NumberValue =>
  NUMBER.test(`${character}`);

const isOpeningParenthesis = (character: any) => character === '(';

const isClosingParenthesis = (character: any) => character === ')';

function isParenthesis(
  character: string | ParenthesisValue,
): character is ParenthesisValue {
  return isOpeningParenthesis(character) || isClosingParenthesis(character);
}

const isQuote = (character: string) => character === '"';

const isOperator = (character: string) => OPERATORS.includes(character);

export {
  isLetter,
  isWhitespace,
  isNumber,
  isOpeningParenthesis,
  isClosingParenthesis,
  isParenthesis,
  isQuote,
  isOperator,
};
