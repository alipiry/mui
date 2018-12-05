#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var figlet = __importStar(require("figlet"));
var commander_1 = __importDefault(require("commander"));
var inquirer_1 = __importDefault(require("inquirer"));
var log = console.log;
log(chalk_1.default.yellow(figlet.textSync('M U I', {
    horizontalLayout: 'full',
})));
commander_1.default
    .version('1.0.0', '-v, --version')
    .parse(process.argv);
inquirer_1.default
    .prompt([
    {
        type: 'input',
        name: 'q1',
        message: 'Are you enjoy it?'
    }
])
    .then(function (answers) {
    log(answers);
});
