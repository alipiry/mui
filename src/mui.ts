import './pollyfills';
import chalk from 'chalk';
import * as figlet from 'figlet';

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
