#!/usr/bin/env node

import commander from 'commander';
import chalk from "chalk";

import { banner } from "./banner";
import { setup } from "./setup";
import { deploy } from "./deploy";
import { isInRightDir } from "./rightDir";

if (isInRightDir) {
  banner();

  commander
    .command('--help')
    .alias('-h')
    .description('Usage information')
    .action(() => console.log('Usage: mui [options]\n' +
      '\n' +
      'An application for deploying on NAO robot\n' +
      '\n' +
      'Options:\n' +
      '  -h, --help           output usage information\n' +
      '  -s, --setup          setup your configuration\n' +
      '  -d, --deploy         deploy your code'));

  commander
    .command('--setup')
    .alias('-s')
    .description('Setup your config to deploy')
    .action(() => setup());

  commander
    .command('--deploy')
    .alias('-d')
    .description('Deploy code')
    .action(() => deploy());

  commander.parse(process.argv);

} else {
  console.log(chalk.white.bgRed.bold(
    'You are not in the Right Directory!!!\nYour working dir must have "Make, Config and Install" dirs!'
  ));
}
