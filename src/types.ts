import { environment, identifiers } from './standard-library';
export type ParenthesisValue = '(' | ')';
export type WhitespaceValue = ' ';
export type NumberValue = string;
export type LetterValue = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z" | "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z" // prettier-ignore

export type ParenthesisToken = {
  type: 'Parenthesis';
  value: ParenthesisValue;
};

export type NumberToken = {
  type: 'Number';
  value: number;
};

export type LetterToken = {
  type: 'Name';
  value: keyof typeof identifiers;
};

export type StringToken = {
  type: 'String';
  value: string;
};

export type Token = ParenthesisToken | NumberToken | LetterToken | StringToken;

export type CallOperationName = keyof typeof environment;
export type IdentifierName = keyof typeof identifiers;

export type CallExpression = {
  type: 'CallExpression';
  name: CallOperationName;
  arguments: AST[];
};

export type Literals = {
  type: 'StringLiteral' | 'NumericLiteral';
  value: string | number;
};

export type Identifier = {
  type: 'Identifier';
  name: IdentifierName;
};

export type AST = Literals | CallExpression | Identifier;
