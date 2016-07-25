# Wallapop Item Manager


## Overview

This application takes the developer through the process of building a web-application using
AngularJS. The application is loosely based on the **Google Phone Gallery**, which no longer exists. Elements
like the animations used have been taken from https://github.com/angular/angular-phonecat.


### Running the Application

```
http-server ./app -a localhost -p 8000 -c-1
```


### Running the Application with Unit Tests (via Node)

Prerequisites:

- Get [Node.js][node-download]. 
- Install the tool dependencies: `npm install`

- Only 2 unit tests have been added, because of the short time that was reserved for the assignment.
- Steps to see them passing:

- Run `npm start`.
- Navigate your browser to [http://localhost:8000/](http://localhost:8000/) to see the application 
- running.

- Start Karma with `npm test` from another Terminal Window.
- A browser will start and connect to the Karma server. Chrome and Firefox are the default browsers,
  others can be captured by loading the same URL or by changing the `karma.conf.js` file.
- Karma will sit and watch your application and test JavaScript files. To run or re-run tests just
  change any of your these files.

## Application Directory Layout

```
app/                     --> all the source code of the app (along with unit tests)
  assets/...             --> image files
  bower_components/...   --> 3rd party JS/CSS libraries, including Angular and jQuery
  core/                  --> all the source code of the core module (stuff used throughout the app)
    items/...            --> files for the `core.itemsService` submodule, including JS source code, specs
    core.module.js       --> the core module
  directives/...         --> files for the `itemsDirectives` module, including JS source code, HTML templates, specs
  favorites-modal/...    --> files for the `favoritesModal` module, including JS source code, HTML templates, specs
  items-list/...         --> files for the `itemsList` module, including JS source code, HTML templates, specs
  data/...               --> static JSON files with items data (used to fake a backend API) and images
  app.animations.css     --> hooks for running CSS animations with `ngAnimate`
  app.animations.js      --> hooks for running JS animations with `ngAnimate`
  app.config.js          --> app-wide configuration of Angular services
  app.css                --> default stylesheet
  app.module.js          --> the main app module
  index.html             --> app layout file (the main HTML template file of the app)

node_modules/...         --> development tools (fetched using `npm`)

bower.json               --> Bower specific metadata, including client-side dependencies
karma.conf.js            --> config file for running unit tests with Karma
package.json             --> Node.js specific metadata, including development tools dependencies
```