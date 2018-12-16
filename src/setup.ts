import inquirer from "inquirer";
import fs from "fs";

import {
  codeConfig,
  colors,
  locations,
  robots,
  teamsPlain,
  wirelessProfiles
} from "./values";

const questions: Array<object> = [
  { type: 'list', name: 'team', message: 'Choose your team', choices: teamsPlain, default: 'MRL-SPL: 26' },
  { type: 'checkbox', name: 'robots', message: 'Choose your robots', choices: robots },
  { type: 'list', name: 'color', message: 'Choose your color', choices: colors, default: 'blue' },
  { type: 'list', name: 'location', message: 'Choose your location', choices: locations, default: 'Lab' },
  { type: 'list', name: 'wireless', message: 'Choose your wireless profile', choices: wirelessProfiles, default: 'naoLab.wpa' },
  { type: 'list', name: 'config', message: 'Choose your code config', choices: codeConfig, default: 'Develop' },
  { type: 'input', name: 'magicNumber', message: 'Choose your magic number:', default: 85 },
];

const showConfig = (): void => {
  let config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
  console.log('\nThe compiled code will deploy with this config: \n');
  console.log(config);
};

export const setup = (): void => {
  inquirer.prompt(questions).then(answers =>
    fs.writeFileSync(
      'config.json',
      JSON.stringify(
        answers,
        null,
        '  '
      )
    )
  ).then(() => showConfig());
};
