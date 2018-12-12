import fs from "fs";
import inquirer from "inquirer";

const question: object = {
  type: 'confirm',
  name: 'deploy',
  message: 'Do you wanna deploy?',
  default: true
};

const deploy: any = () => {
  inquirer
    .prompt(question)
    .then(answers =>
      answers === true ? console.log('Deploy') : console.log('shit')
    );
};

const showConfig: any = () => {
  let config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
  console.log('The compiled code will deploy with this config: \n');
  console.log(config);
  console.log('\n');
};
