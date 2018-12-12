#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var banner_1 = require("./banner");
var setup_1 = require("./setup");
var rightDir_1 = require("./rightDir");
var chalk_1 = __importDefault(require("chalk"));
if (rightDir_1.isInRightDir) {
    banner_1.banner();
    setup_1.setup();
}
else {
    console.log(chalk_1.default.white.bgRed.bold('You are not in Right Directory!!!\nYour working dir must have "Make" and "Config" dirs!'));
}
