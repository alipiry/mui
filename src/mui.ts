#!/usr/bin/env node

import { banner } from "./banner";
import { setup } from "./setup";
import { isInRightDir } from "./rightDir";
import chalk from "chalk";

if (isInRightDir) {
  banner();
  setup();
} else {
  console.log(chalk.white.bgRed.bold(
    'You are not in Right Directory!!!\nYour working dir must have "Make" and "Config" dirs!'
  ));
}
