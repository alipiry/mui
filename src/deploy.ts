import fs from "fs";
// import shelljs from "shelljs";

export const deploy = () => {
  let config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
  let team = config.team.split(': ')[1];
  let robots = config.robots
    .toString()
    .match(/:\d*/mg)
    .toString()
    .split(':')
    .join('')
    .split(',');
  // console.log(team);
  // console.log(robots);
};
