"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var inquirer_1 = __importDefault(require("inquirer"));
var question = {
    type: 'confirm',
    name: 'deploy',
    message: 'Do you wanna deploy?',
    default: true
};
var deploy = function () {
    inquirer_1.default
        .prompt(question)
        .then(function (answers) {
        return answers === true ? console.log('Deploy') : console.log('shit');
    });
};
var showConfig = function () {
    var config = JSON.parse(fs_1.default.readFileSync('config.json', 'utf8'));
    console.log('The compiled code will deploy with this config: \n');
    console.log(config);
    console.log('\n');
};
