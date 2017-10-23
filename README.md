# Queue Application

### by Team For Hire: Aaron Ofengender, Devon Brosch, Kaylea Britton

The Queue Application is a ticket queue system website using [Angular 4](https://angular.io/) and [Firebase](https://firebase.google.com/).

The purpose of this website is to allow instructors to manage student questions in a timely fashion.

Students can view the student ticket queue and history of tickets, create tickets, update tickets, delete tickets, search closed tickets and mark tickets as closed.

Instructors can view the student and admin ticket queue and history of tickets, create tickets, update tickets, delete tickets, search closed tickets, mark tickets as closed, suggest solutions for tickets and claim ownership of tickets.

## View a deployed version

See a [deployed version](https://help-me-queue.firebaseapp.com/).

## View user manual

View an in-depth [user manual]().

## Cloning this repository

Clone this Github repository, run npm install to install the dependencies, and then ng serve to build the app. Navigate to http://localhost:4200/ to view the website.

## Deploying this website

Ensure you have [Firebase Tools](https://github.com/firebase/firebase-tools) installed globally on your system. Deploy to Firebase - [this is a good tutorial](https://alligator.io/angular/deploying-angular-app-to-firebase/). The relevant commands are:

- `ng build`
- `firebase init`
    - You will have to login with your Firebase credentials, and choose/create a Firebase project
    - Choose the Hosting option
    - When it asks about the public, enter dist instead
    -Edit the firebase.json file to include the '*rewrites*' section:
        - ``` {
            {
            "hosting": {
                "public": "dist",
                "ignore": [
                "firebase.json",
                "**/.*",
                "**/node_modules/**"
                ],
                "rewrites": [
                {
                    "source": "/dist/**",
                    "destination": "/index.html"
                },
                {
                    "source": "**",
                    "destination": "/index.html"
                }
                ]
            }
            }
 - `firebase deploy`

# .
# .
# .



## Angular CLI References


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.3.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
