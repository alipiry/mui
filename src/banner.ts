import chalk from "chalk";
import * as figlet from "figlet";

export const banner = (): void => {
  console.log(
    chalk.yellow(
      figlet.textSync(
        'M U I',
        {
          horizontalLayout: 'full',
        }
      )
    )
  );
};
