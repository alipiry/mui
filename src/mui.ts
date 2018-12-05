#!/usr/bin/env node

import chalk from 'chalk';
import * as figlet from 'figlet';
import program from 'commander';
import inquirer from 'inquirer';

const log = console.log;
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

program
  .version('1.0.0', '-v, --version')
  .parse(process.argv);

inquirer
  .prompt([
    {
      type: 'input',
      name: 'q1',
      message: 'Are you enjoy it?'
    }
  ])
  .then(answers => {
    log(answers);
  });
