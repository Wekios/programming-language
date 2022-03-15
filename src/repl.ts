// import { prompt } from 'inquirer';
import chalk from 'chalk';

// import { parseAndEvaluate } from './parse-and-evaluate';

const repl = async () => {};

if (require.main === module) {
  console.log(
    chalk.red(
      `Welcome to the ${chalk.bgYellow('Dropbear')} Programming Language`,
    ),
  );
  repl();
}

module.exports = repl;
