#  [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
# Queen Mary Trading & Investment Society Website

> The official QMTIS Website, made in Angular.
It is automatically deployed to Heroku [here](https://qmtis.herokuapp.com/) and [qmtis.com](http://qmtis.com/).

> This project has unit tests and uses Travis-CI for automated testing. Check it out [here](https://travis-ci.org/dolanmiu/qmtis-website).
Once all the unit tests have passed, it will deploy to the [Heroku](https://qmtis.herokuapp.com/) app.

## Technologies
<p>
    <img src="https://angular.io/resources/images/logos/angular/angular.png" height="120">
    <img src="https://avatars1.githubusercontent.com/u/3284117" height="120">
    <img src="https://worldvectorlogo.com/logos/heroku.svg" height="120">
    <img src="https://worldvectorlogo.com/logos/travis-ci-icon.svg" height="120">
    <img src="http://getbootstrap.com/assets/brand/bootstrap-solid.svg" height="120">
    <img src="https://strongloop.com/wp-content/uploads/2015/12/nodejs-logo.png" height="120">
</p>

## Usage
Simple clone the repo, and type:

1. `npm install`
2. `npm start`
3. Navigate to `http://localhost:4200/`

The app will automatically reload if you change any of the source files.

## Add Committee Members
1. Navigate to `/src/app/committee/committee-members.ts`
2. Follow the format:
```
{
    name: 'Pattawia Supradit',
    description: 'Hello, I am a student at QM',
    facebook: 'http://www.facebook.com/pattawias',
    linkedIn: 'http://www.linkedin.com/pattawias',
    photoUrl: 'http://www.facebook.com/pattawias.png'
}
```
3. Save, commit and push to `origin/master`. Everything should deploy automatically and you should see your change within minutes.

# Misc help for developers and contributors
> Don't worry about the below unless you want to edit and contribute to this project.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `npm build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Travis CI

Tests are run automatically with Travis CI.
Travis CI is a hosted, distributed continuous integration service used to build and test software projects hosted at GitHub. You can check my Travis CI build here:

[https://travis-ci.org/dolanmiu/qmtis-website](https://travis-ci.org/dolanmiu/qmtis-website)

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `npm start`.

## Deployments

### Heroku

This project is automatically deployed to Heroku here:

[https://qmtis.herokuapp.com](https://qmtis.herokuapp.com/).

To make this work on Heroku, I had to create a simple Express server to serve the static files.
It uses a `Procfile`, which launches the tiny Express server `server.js`, which serves the `/dist` folder
I would not use this in practice, but for this project, Heroku works nicely.

### Deploying to Github Pages

This requires `angular-cli`. Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Made with ♥ by Dolan Miu

[travis-image]: https://travis-ci.org/dolanmiu/qmtis-website.svg?branch=master
[travis-url]: https://travis-ci.org/dolanmiu/qmtis-website
[daviddm-image]: https://david-dm.org/dolanmiu/qmtis-website.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/dolanmiu/qmtis-website
