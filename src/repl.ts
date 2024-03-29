import { prompt, QuestionCollection } from 'inquirer';
import chalk from 'chalk';

import { parseAndEvaluate } from './parse-and-evaluate';

const askQuestions = () => {
  const questions: QuestionCollection = [
    {
      name: 'COMMAND',
      type: 'input',
      message: chalk.blue('> '),
    },
  ];

  return prompt(questions);
};

const repl = async () => {
  try {
    const answers = await askQuestions();
    const command = answers.COMMAND as string;

    if (command.trim()) {
      console.log(chalk.yellow(parseAndEvaluate(command)));
    }
  } catch (error) {
    console.error(error);
  }

  repl();
};

if (require.main === module) {
  console.log(
    chalk.red(
      `Welcome to the ${chalk.bgYellow('Dropbear')} Programming Language`,
    ),
  );
  repl();
}

export default repl;
