const all =
  (fn: any) =>
  (...list: any) =>
    list.reduce(fn);

const add = all((a: any, b: any) => a + b);
const subtract = all((a: number, b: number) => a - b);
const multiply = all((a: number, b: number) => a * b);
const divide = all((a: number, b: number) => a / b);
const modulo = all((a: number, b: number) => a % b);
const log = console.log;

const environment = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  log,
  pi: Math.PI,
};

export { environment };
