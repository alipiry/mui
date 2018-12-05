#!/usr/bin/env node

import chalk from 'chalk';
import * as figlet from 'figlet';
import program from 'commander';
import inquirer from 'inquirer';
const log = console.log;

const banner = () => {
  log(
    chalk.yellow(
      figlet.textSync(
        'M U I',
        {
          horizontalLayout: 'full',
        }
      )
    )
  );
};

const showVersion = () => {
  program
    .version('1.0.0', '-v, --version')
    .parse(process.argv);
  return true;
};

const q = () => {
inquirer
  .prompt([
    {
      type: 'input',
      name: 'q1',
      message: 'Are you enjoy it?'
    }
  ])
  .then(() => {
    log(':)');
  });
};

if(!showVersion()) {
  banner();
  q();
}
banner();
q();