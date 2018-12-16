"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var teams = [
    { name: 'Invisibles', number: 0 },
    { name: 'UT Austin Villa', number: 1 },
    { name: 'Austrian Kangaroos', number: 2 },
    { name: 'Bembelbots', number: 3 },
    { name: 'Berlin United', number: 4 },
    { name: 'B-Human', number: 5 },
    { name: 'Cerberus', number: 6 },
    { name: 'DAInamite', number: 7 },
    { name: 'Dutch Nao Team', number: 8 },
    { name: 'Edinferno', number: 9 },
    { name: 'Kouretes', number: 10 },
    { name: 'MiPal', number: 11 },
    { name: 'Nao Devils Dortmund', number: 12 },
    { name: 'Nao-Team HTWK', number: 13 },
    { name: 'Northern Bites', number: 14 },
    { name: 'NTU RoboPAL', number: 15 },
    { name: 'RoboCanes', number: 16 },
    { name: 'RoboEireann', number: 17 },
    { name: 'UNSW Sydney', number: 18 },
    { name: 'SPQR Team', number: 19 },
    { name: 'TJArk', number: 20 },
    { name: 'UChile Robotics Team', number: 21 },
    { name: 'UPennalizers', number: 22 },
    { name: 'Crude Scientists', number: 23 },
    { name: 'HULKs', number: 24 },
    { name: 'MRL-SPL', number: 26 },
    { name: 'Philosopher', number: 27 },
    { name: 'Rimal Team', number: 28 },
    { name: 'SpelBots', number: 29 },
    { name: 'Team-NUST', number: 30 },
    { name: 'UnBeatables', number: 31 },
    { name: 'UTH-CAR', number: 32 },
    { name: 'NomadZ', number: 34 },
    { name: 'SPURT', number: 33 },
    { name: 'Blue Spider', number: 35 },
    { name: 'Camellia Dragons', number: 36 },
    { name: 'JoiTech-SPL', number: 37 },
    { name: 'Linköping Humanoids', number: 38 },
    { name: 'WrightOcean', number: 39 },
    { name: 'Mars', number: 40 },
    { name: 'Aztlan', number: 41 },
    { name: 'CMSingle', number: 42 },
    { name: 'TeamSP', number: 43 },
    { name: 'Luxembourg United', number: 44 },
    { name: 'Naova ETS', number: 45 },
    { name: 'Recife Soccer', number: 46 },
    { name: 'Rinobot', number: 47 }
];
exports.teamsPlain = teams.map(function (team) {
    return team.name + ": " + team.number;
});
exports.robotNames = (fs_1.default.readFileSync('Config/Robots/robots.cfg', 'utf8')
    .match(/"\b(?:(?!AL)\w)+\b"/g) || '')
    .toString()
    .split('"')
    .join('')
    .split(',');
// @ts-ignore
exports.robotNumbers = [].concat.apply([], exports.robotNames.map(function (name) {
    return (fs_1.default.readFileSync("Config/Robots/" + name + "/network.cfg", 'utf8')
        .match(/\.\d*"/) || '')
        .toString()
        .split('.')
        .join('')
        .split('"')
        .join('')
        .split(',');
}));
var r = [];
for (var i = 0; i < exports.robotNumbers.length; i++)
    r.push({
        name: exports.robotNames[i],
        number: exports.robotNumbers[i]
    });
exports.robots = r.map(function (robot) {
    return robot.name + " :" + robot.number;
});
exports.colors = [
    'blue',
    'red',
    'yellow',
    'black',
    'white',
    'orange',
    'purple',
    'brown',
    'gray'
];
exports.locations = fs_1.default.readdirSync('Config/Locations');
exports.wirelessProfiles = fs_1.default.readdirSync('Install/Network/Profiles');
exports.codeConfig = [
    'Develop',
    'Debug',
    'Release'
];
