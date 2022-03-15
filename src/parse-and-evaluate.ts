import { tokenize } from './tokenize';
import { parse } from './parse';
import { evaluate } from './evaluate';
import { log, pipe } from './utilities';
import { parseProgram } from './parse-program';
import { transform } from './transform';

const parseAndEvaluate = pipe(
  tokenize,
  parse,
  transform,
  evaluate,
);

const tokenizeAndParse = pipe(
  tokenize,
  parse,
);

const parseAndEvaluateProgram = pipe(
  tokenize,
  parseProgram,
  evaluate,
);



export = {
  parseAndEvaluate,
  tokenizeAndParse,
  parseAndEvaluateProgram,
};
