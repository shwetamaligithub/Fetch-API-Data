# AngularExample
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.5.
# Project overview
## Demo videos for reference:
<a href="https://drive.google.com/file/d/1dkvCnBiWE-5MuciHRvhymXkvEsfB7aim/view?usp=drive_link">Desktop video</a><br>
<a href="https://drive.google.com/file/d/1ejqJp9bJ4mr4vDl1hBdIXUF4ig7SIQo8/view?usp=drive_link">Mobile video</a>
## Fetching Events:
As shown in the images above, there are two types of events. Recommended shows and upcoming events.
## Deliverables:
- A link to the live site, hosted on platforms like Netlify, or Vercel.
- The source code in a GitHub repository, with a README.md that includes:
   - Project overview.
   - Setup and local run instructions.
   - Explanation of design and technical decisions.
## Evaluation Criteria:
- Responsiveness: The website should work on both Desktop and Mobile browser.
- API Integration: Effective fetching, usage, and display of data from a REST API.
- Horizontal scrolling: Recommended events should support horizontal scroll.
- Lazy loading: Upcoming events should be fetched page by page. The next page of events should be fetched
from the API only when the user has scrolled to the end of the website.
- CSS: Usage of color and fonts as provided in the instructions.
- Performance: Optimization techniques for fast loading times.
- Code Quality: Cleanliness, organization, and documentation of code.

# Setup and local run instructions.

## 1.Prerequisites
- NodeJs Installed
- Basic Angular Knowledge
- Angular CLI installed

## 2.Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## 3.Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## 4.Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## 5.Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

# Explanation of design and technical decisions.
- ## Creating service:
An Angular service class provides reusable functionality to your Angular application. Services typically handle data access, business logic, and other tasks not specific to a particular component.
Services are defined using the @Injectable() decorator, which tells Angular that the class can be injected into other classes as a dependency. This allows you to easily share code and data between different parts of your application.

- ## Rendering Data:
Now, let's render the fetched joke in our app's component. Open the src/app.component.ts file.
The Data property is a string that will hold the Data that is fetched from the API. The constructor method takes an instance of the DataService class as a dependency. The DataService class is used to fetch Data from an API. The fetchData() method calls the getData() method on the DataService class and subscribes to the returned Observable.
