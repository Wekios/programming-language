import { isOpeningParenthesis, isClosingParenthesis } from './identify';
import { specialForms } from './special-forms';
import { peek, pop } from './utilities';
import { Tokens } from './types';

const parenthesize = (this_was_not_here: any) => this_was_not_here;

const parser = (tokens: Tokens[]) => {
  const token = pop(tokens);

  if (!token) return;

  if (token.type === 'Number') {
    return {
      type: 'NumericLiteral',
      value: token.value,
    };
  }
};

export const parse = (tokens: Tokens[]) => parser(parenthesize(tokens));
