"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
// import shelljs from "shelljs";
exports.deploy = function () {
    var config = JSON.parse(fs_1.default.readFileSync('config.json', 'utf8'));
    var team = config.team.split(': ')[1];
    var robots = config.robots
        .toString()
        .match(/:\d*/mg)
        .toString()
        .split(':')
        .join('')
        .split(',');
    // console.log(team);
    // console.log(robots);
};
