import fs from "fs";

export const isInRightDir: boolean =
  fs.existsSync('Make/')
  && fs.existsSync('Config/')
  && fs.existsSync('Install/');
