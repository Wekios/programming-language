import { isOpeningParenthesis, isClosingParenthesis } from './identify';
import { specialForms } from './special-forms';
import { peek, pop } from './utilities';
import type { Token, AST, CallOperationName } from './types';

const parenthesize = (tokens: Token[]): any => {
  const token = pop(tokens);

  if (!token) {
    throw new Error(
      'Something went wrong. Did you forget to close the parenthesis?',
    );
  }

  if (isOpeningParenthesis(token.value)) {
    const expression: Token[] = [];

    while (!isClosingParenthesis(peek(tokens)?.value)) {
      expression.push(parenthesize(tokens));
    }

    pop(tokens);
    return expression;
  }

  return token;
};

const parser = (tokens: Token[] | Token): AST => {
  if (Array.isArray(tokens)) {
    const [first, ...rest] = tokens;
    return {
      type: 'CallExpression',
      name: `${first.value as CallOperationName}`,
      arguments: rest.map((r) => parser(r)),
    };
  }

  const token = tokens;

  switch (token.type) {
    case 'Number':
      return {
        type: 'NumericLiteral',
        value: token.value,
      };

    case 'String':
      return {
        type: 'StringLiteral',
        value: token.value,
      };

    case 'Name':
      return {
        type: 'Identifier',
        name: token.value,
      };

    default:
      throw new Error(`${token} as token is not allowed or identified`);
  }
};

export const parse = (tokens: Token[]) => parser(parenthesize(tokens));
