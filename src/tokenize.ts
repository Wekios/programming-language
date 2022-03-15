import type { Tokens } from './types';

import {
  isLetter,
  isWhitespace,
  isNumber,
  isParenthesis,
  isQuote,
} from './identify';

export const tokenize = (input: string) => {
  const tokens: Tokens[] = [];
  let cursor = 0;

  while (cursor < input.length) {
    const character = input[cursor];

    if (isParenthesis(character)) {
      tokens.push({
        type: 'Parenthesis',
        value: character,
      });
      cursor++;
      continue;
    }

    if (isWhitespace(character)) {
      cursor++;
      continue;
    }

    if (isLetter(character)) {
      let symbol = character;

      while (isLetter(input[++cursor])) {
        symbol += input[cursor];
      }

      tokens.push({
        type: 'Name',
        value: symbol,
      });

      continue;
    }

    if (isQuote(character)) {
      let string = '';

      while (!isQuote(input[++cursor])) {
        string += input[cursor];
      }

      tokens.push({
        type: 'String',
        value: string,
      });

      cursor++;
      continue;
    }

    if (isNumber(character)) {
      let current = character;

      while (isNumber(input[++cursor])) {
        current += input[cursor];
      }

      tokens.push({
        type: 'Number',
        value: parseInt(current, 10),
      });

      continue;
    }

    throw new Error(`${character} is not allowed`);
  }

  return tokens;
};
