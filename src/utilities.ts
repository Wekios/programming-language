import { tap } from 'lodash';

const pipe =
  (...fns: any) =>
  (value: any) =>
    fns.reduce((value: any, func: any) => func(value), value);

const log = (value: any) => tap(value, console.log);

const peek = <T>(array: T[]) => array[0];
const pop = <T>(array: T[]) => array.shift();

export { pipe, log, peek, pop, tap };
