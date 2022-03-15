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
  value: string;
};

export type StringToken = {
  type: 'String';
  value: string;
};

export type Tokens = ParenthesisToken | NumberToken | LetterToken | StringToken;
