import type { AST, CallExpression, Identifier } from './types';
import { environment, identifiers } from './standard-library';

const last = (collection: any) => collection[collection.length - 1];

const apply = (node: CallExpression) => {
  const fn = environment[node.name];
  const args = node.arguments.map(evaluate);

  if (typeof fn !== 'function') {
    throw new TypeError(`${node.name} is not a function`);
  }

  return fn(...args);
};

const getIdentifier = (node: Identifier) => {
  const fn = identifiers[node.name];

  if (!fn) throw new ReferenceError(`${node.name} is not defined`);

  return fn;
};

export const evaluate = (node: AST): any => {
  switch (node.type) {
    case 'CallExpression': {
      return apply(node);
    }

    case 'Identifier': {
      return getIdentifier(node);
    }

    case 'StringLiteral':
    case 'NumericLiteral': {
      return node.value;
    }

    default:
      throw new Error(`${node} is not a valid type`);
  }
};
