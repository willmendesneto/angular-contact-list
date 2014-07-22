ANGULAR-CONTACT-LIST
=================
Contact list application using AngularJS, providing CRUD (Create, Retrieve, Update, Delete) functionality for the contacts.

### How to Use

1 - Clone this repository and access the generated folder

```bash
$ git clone git@github.com:willmendesneto/angular-contact-list.git [project-name]
$ cd [project-name]
```

2 - Run the commands for download application dependencies

```bash
$ npm install #install node dependencies
$ bower install #install bower dependencies
```

OBS: To verify if all modules that this app has dependency are installed. The list of all them are in package.json file.

3 - Run grunt serve command for run local server command
```bash
$ grunt serve
```

After this, access http://localhost:9000 for use this app

4 - Run application tests
```bash
$ grunt test # runn karma tests
$ grunt watch:jsTest # watch tests and scripts folder and run karma tests if these files will be modified
```

5 - Run application E2E tests
In you first terminal tab run the command

```bash
$ ./node_modules/protractor/bin/webdriver-manager start # start webdriver
```

Now, open a new terminal tab and run the command

```bash
$ ./node_modules/protractor/bin/protractor protractor_conf.js # runn protractor tests
```

6 - Build application
```bash
$ grunt
```

7 - Run server based in dist folder
```bash
$ grunt serve:dist
```

## 3rd party dependencies ##

This project use (actually globally): 

###Ruby
- ```sass``` and ```compass``` for stylesheets;

###NodeJS
- ```karma``` like test runner;
- ```protractor``` for e2e tests;
- ```grunt-cli``` for run grunt commands in CLI;
- ```bower``` like package manager for the web;
- ```yo``` and ```generator-angular``` for code/scaffolding generator;
- ```jshint``` for lint script files;

###Frontend

All list of frontend dependencies are in ```bower.json``` file.

###Backend

All list of backend dependencies are in ```package.json``` file.
