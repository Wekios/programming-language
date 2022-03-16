import type { AST } from '../src/types';
import { evaluate } from '../src/evaluate';

describe(evaluate, () => {
  it('should fall back to returning a primitive numeric value', () => {
    const ast: AST = { type: 'NumericLiteral', value: 2 };

    expect(evaluate(ast)).toBe(2);
  });

  it('should fall back to returning a primitive string value', () => {
    const ast: AST = { type: 'StringLiteral', value: 'Hello' };

    expect(evaluate(ast)).toBe('Hello');
  });

  it('should be able to evaluate a single expression', () => {
    const ast: AST = {
      type: 'CallExpression',
      name: 'add',
      arguments: [
        { type: 'NumericLiteral', value: 2 },
        { type: 'NumericLiteral', value: 3 },
      ],
    };

    const result = evaluate(ast);

    expect(result).toBe(5);
  });

  it('should be able to evaluate a nested expression', () => {
    const ast: AST = {
      type: 'CallExpression',
      name: 'add',
      arguments: [
        { type: 'NumericLiteral', value: 2 },
        { type: 'NumericLiteral', value: 3 },
        {
          type: 'CallExpression',
          name: 'subtract',
          arguments: [
            { type: 'NumericLiteral', value: 5 },
            { type: 'NumericLiteral', value: 4 },
          ],
        },
      ],
    };

    const result = evaluate(ast);

    expect(result).toBe(6);
  });

  it('should be able to lookup identifiers in the environment', () => {
    const ast: AST = { type: 'Identifier', name: 'pi' };
    expect(evaluate(ast)).toBe(Math.PI);
  });

  it('should be able to determine the highest number in a range', () => {
    const ast: AST = {
      type: 'CallExpression',
      name: 'max',
      arguments: [
        { type: 'NumericLiteral', value: 2 },
        { type: 'NumericLiteral', value: 3 },
        { type: 'NumericLiteral', value: 10 },
      ],
    };

    expect(evaluate(ast)).toBe(10);
  });

  it('should be able to determine the lowest number in a range', () => {
    const ast: AST = {
      type: 'CallExpression',
      name: 'min',
      arguments: [
        { type: 'NumericLiteral', value: 2 },
        { type: 'NumericLiteral', value: 1 },
        { type: 'NumericLiteral', value: 10 },
      ],
    };

    expect(evaluate(ast)).toBe(1);
  });
});
