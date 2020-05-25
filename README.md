# Portfolio | EJILANE Jarod

Portfolio made in angular 9 and providing a technological watch on angular. This is basically intended for my academic project (PP, BTS SIO, option SLAM). I just wished to learn deeply Angular through this school environment, so I made this. Hope it can be useful.

## See the website

Navigate to [this url](https://e-jarod.github.io/portfolio/). Thanks for seeing and sharing.

## [Dev] Run the app

### Install the dependencies

A classic angular project. So I am using npm and angular CLI.

`npm i`

### Serve the app

Using basic angular's `http://localhost:4200/` is a problem when we want to run various apps at the same time. I personally prefer to assign a specific port to serve my app.

`ng serve ng serve --port 7777 --poll=2000`

(Or simply, via a npm script in package.json...)

`npm start`

When navigating to localhost:7777, we can see the home page.

## [Pre-prod] Test and run the app

_..._

### Build the app

_..._

### Serve with Node.js

_..._

## [Prod] Deploy on Gitub Pages

I use `npx angular-cli-ghpages --dir=dist/portfolio` for deploy and update my portfolio.
On Linux/UNIX system, I need to use `sudo` before this command.

On linux:
`sudo npx angular-cli-ghpages --dir=dist/portfolio`

(But I prefer...)

`sudo npm run ngh`
