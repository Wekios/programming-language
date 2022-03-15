import { tap } from 'lodash';

const pipe =
  (...fns: any) =>
  (value: any) =>
    fns.reduce((value: any, func: any) => func(value), value);

const log = (value: any) => tap(value, console.log);

const peek = (array: any) => array[0];
// const pop = (array: Array<>) => array.shift();

function pop<T>(array: T[]) {
  return array.shift();
}

export { pipe, log, peek, pop, tap };
