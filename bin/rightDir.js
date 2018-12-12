"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
exports.isInRightDir = fs_1.default.existsSync('Make/')
    && fs_1.default.existsSync('Config/')
    && fs_1.default.existsSync('Install/');
