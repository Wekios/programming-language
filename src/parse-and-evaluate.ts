import { tokenize } from './tokenize';
import { parse } from './parse';
import { evaluate } from './evaluate';
import { log, pipe } from './utilities';
import { parseProgram } from './parse-program';
import { transform } from './transform';

// transform,
export const parseAndEvaluate = pipe(tokenize, parse, evaluate);

export const tokenizeAndParse = pipe(tokenize, parse);

export const parseAndEvaluateProgram = pipe(tokenize, parseProgram, evaluate);
