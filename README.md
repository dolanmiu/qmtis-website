<p align="center">
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Queen_Mary%2C_University_of_London_logo.svg/1280px-Queen_Mary%2C_University_of_London_logo.svg.png" height="120">
</p>

[![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

---

# Queen Mary Trading & Investment Society Website

> The official QMTIS Website, made in Angular.
It is automatically deployed to Heroku [here](https://qmtis.herokuapp.com/) and [qmtis.com](http://qmtis.com/).

> This project has unit tests and uses Travis-CI for automated testing. Check it out [here](https://travis-ci.org/dolanmiu/qmtis-website).
Once all the unit tests have passed, it will deploy to the [Heroku](https://qmtis.herokuapp.com/) app.

## Technologies
<p>
    <img src="https://angular.io/assets/images/logos/angular/angular.png" height="120">
    <img src="https://avatars1.githubusercontent.com/u/3284117" height="120">
    <img src="https://worldvectorlogo.com/logos/heroku.svg" height="120">
    <img src="https://worldvectorlogo.com/logos/travis-ci-icon.svg" height="120">
    <img src="http://getbootstrap.com/assets/brand/bootstrap-solid.svg" height="120">
    <img src="https://strongloop.com/wp-content/uploads/2015/12/nodejs-logo.png" height="120">
</p>

## Usage
Simple clone the repo, and in the command line, type:

1. `npm install`
2. `npm start`
3. Navigate to `http://localhost:4200/`

The app will automatically reload if you change any of the source files.

## Add Committee Members
1. Navigate to `/src/assets/committee/details.json`
2. Follow the format:
```
"pattawia": {
    "name": "Pattawia Supradit",
    "slug": "pattawia",
    "position": "Vice President",
    "linkedIn": " https://www.linkedin.com/in/pattawias",
    "facebook": "https://www.facebook.com/pattawias",
    "email": "pattawias@yahoo.com",
    "photoUrl": "pattawia.jpg",
    "description": "Pattawia is a 3rd year student..."
}
```
3. Add a picture inside `/src/assets/committee`, in this example, it would be `/src/assets/committee/pattawia.jpg`
4. Save, commit and push to `origin/master`. Everything should deploy automatically if your tests pass, and you should see your change within minutes.

## Add Reports
Please refer to the [Wiki](https://github.com/dolanmiu/qmtis-website/wiki/How-to-create-a-Report) for more details

## Misc help for developers and contributors
Please refer to the [Wiki](https://github.com/dolanmiu/qmtis-website/wiki/Developers-and-contributors) for more details

---

Made with ♥ by Dolan Miu

[travis-image]: https://travis-ci.org/dolanmiu/qmtis-website.svg?branch=master
[travis-url]: https://travis-ci.org/dolanmiu/qmtis-website
[daviddm-image]: https://david-dm.org/dolanmiu/qmtis-website.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/dolanmiu/qmtis-website
