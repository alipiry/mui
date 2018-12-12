import chalk from "chalk";
import * as figlet from "figlet";

export const banner: any = () => {
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
