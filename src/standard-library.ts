type Operation = (a: number, b: number) => number;

const all =
  (fn: Operation) =>
  (...list: number[]) =>
    list.reduce(fn);

const add = all((a: number, b: number) => a + b);
const subtract = all((a: number, b: number) => a - b);
const multiply = all((a: number, b: number) => a * b);
const divide = all((a: number, b: number) => a / b);
const max = all((a: number, b: number) => Math.max(a, b));
const min = all((a: number, b: number) => Math.min(a, b));
const modulo = all((a: number, b: number) => a % b);
const log = console.log;

const identifiers = {
  pi: Math.PI,
} as const;

const environment = {
  add,
  subtract,
  multiply,
  divide,
  max,
  min,
  modulo,
  log,
} as const;

export { identifiers, environment };
