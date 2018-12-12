"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = __importDefault(require("inquirer"));
var questions = [
    { type: 'input', name: 'name', message: 'Enter your robot name:' },
    { type: 'input', name: 'number', message: 'Enter your robot number:' },
];
exports.addRobot = function () {
    inquirer_1.default
        .prompt(questions)
        .then(function (answers) { return console.log(arr.push({ A: 2 })); });
};
