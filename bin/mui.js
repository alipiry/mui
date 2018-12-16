#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = __importDefault(require("commander"));
var chalk_1 = __importDefault(require("chalk"));
var banner_1 = require("./banner");
var setup_1 = require("./setup");
var deploy_1 = require("./deploy");
var rightDir_1 = require("./rightDir");
if (rightDir_1.isInRightDir) {
    banner_1.banner();
    commander_1.default
        .command('--help')
        .alias('-h')
        .description('Usage information')
        .action(function () { return console.log('Usage: mui [options]\n' +
        '\n' +
        'An application for deploying on NAO robot\n' +
        '\n' +
        'Options:\n' +
        '  -h, --help           output usage information\n' +
        '  -s, --setup          setup your configuration\n' +
        '  -d, --deploy         deploy your code'); });
    commander_1.default
        .command('--setup')
        .alias('-s')
        .description('Setup your config to deploy')
        .action(function () { return setup_1.setup(); });
    commander_1.default
        .command('--deploy')
        .alias('-d')
        .description('Deploy code')
        .action(function () { return deploy_1.deploy(); });
    commander_1.default.parse(process.argv);
}
else {
    console.log(chalk_1.default.white.bgRed.bold('You are not in the Right Directory!!!\nYour working dir must have "Make, Config and Install" dirs!'));
}
