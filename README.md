# Browser handler
![Build Status](https://travis-ci.org/twbs/bootstrap-rubygem.svg?branch=master) ![Current Version](https://img.shields.io/badge/version-1.0.0-green.svg)

Simple browser handler created with Node.js for training

## Setup
Clone this repo to your desktop and to install all dependencies, run: 
- `npm install`
- `npm i puppeteer`
- `npm install nodemon --save-dev`
 
You might want to look into `server.json` to make change the port you want to use and set up a SSL certificate.

## Usage
After you clone this repo to your desktop, go to its root directory and run `npm install` to install its dependencies.

Once the dependencies are installed, you can run  `npm start` to start the application. You will then be able to access it at http://localhost:8080/ (default port)

After this, you can POST from your browser to URL http://localhost:8080/
and GET to localhost too.

## Running Tests

``` 
$ npm testLog
```
or 

```
$ node log_test.js
``` 
