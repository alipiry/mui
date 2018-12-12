"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var values_1 = require("./values");
var inquirer_1 = __importDefault(require("inquirer"));
var fs_1 = __importDefault(require("fs"));
var questions = [
    { type: 'list', name: 'team', message: 'Choose your team', choices: values_1.teamsPlain, default: 'MRL-SPL (26)' },
    { type: 'checkbox', name: 'robots', message: 'Choose your robots', choices: values_1.robots },
    { type: 'list', name: 'color', message: 'Choose your color', choices: values_1.colors, default: 'blue' },
    { type: 'list', name: 'location', message: 'Choose your location', choices: values_1.locations, default: 'Lab' },
    { type: 'list', name: 'wireless', message: 'Choose your wireless profile', choices: values_1.wirelessProfiles, default: 'naoLab.wpa' },
    { type: 'list', name: 'config', message: 'Choose your code config', choices: values_1.codeConfig, default: 'Develop' },
    { type: 'input', name: 'magicNumber', message: 'Choose your magic number:', default: 85 },
];
exports.setup = function () {
    inquirer_1.default
        .prompt(questions)
        .then(function (answers) {
        return fs_1.default.writeFileSync('config.json', JSON.stringify(answers, null, '  '));
    });
};
