<h1 align="center">
  <br />
  <img src="https://user-images.githubusercontent.com/25138854/49395835-d0f39680-f74c-11e8-94ad-c248f9141dad.png" width="320" alt="mui"  >
  <br />
</h1>


> MRL User Interface for deploying code on NAO Robot

## Requirements

Make sure you have installed `nodejs and npm` on your machine:

macOS:
```bash
  brew install node
```

Linux: 
```bash
  sudo apt install nodejs npm 
```

##Usage 
Install globally `mui-nao` package: 

```bash
  npm i mui-nao -g
```

then simply run `mui` in your command line:
```bash
  > mui
```

## Development
### Installation
First of all, clone the project and change your working directory to it:

```bash
  git clone git@github.com:alipiry/mui.git && cd mui
```

Install dependencies and devDependencies:

```bash
  npm i chalk commander inquirer figlet -S
  npm i ts-node typescript nodemon @types/inquirer @types/figlet -D
```
## License

[MIT](http://vjpr.mit-license.org)
