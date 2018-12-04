"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./pollyfills");
var chalk_1 = require("chalk");
var figlet = require("figlet");
var log = console.log;
log(chalk_1.default.yellow(figlet.textSync('M U I', {
    horizontalLayout: 'full',
})));
