# Portfolio | EJILANE Jarod

Portfolio made in angular 11. This is basically intended for my school project (PP in BTS SIO option SLAM). I just wished to learn deeply Angular, Nest and Nx through this school project, so I made this. Hope it can be useful.

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

**_Following lines are auto-generated_**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/nx-community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@portfolio/mylib`.
