## Week 8 - MedAgenda Group Project

<img src="http://www.gridgit.com/postpic/2009/08/agile-software-development-life-cycle_279700.jpg" />

In this project you will be working as part of a team to help a local hospital improve and automate their processes for better patient care.

This project will be managed in an Agile fashion, meaning your team has been given full autonomy on this project to deliver a solution that meets the specifications put forth by the client. We do ask that you facilitate Scrum to maintain open communication with eachother, and the Product Owner.

## Introduction

At a high level, the goal of the project is to build the following set of applications:

1. A web app for patients to check in when they arrive at the ER.
2. A web app for doctors to check in for a shift and receive patients.
3. An admin app that provides access to patient, doctor and appointment data.

The details for how these interact must be extrapolated from the Product Owner during the initial requirements meeting.

## Schedule
### Week 7
#### Monday
- Initial Requirements Meeting / Release Planning Meeting
- Sprint Planning Meeting
- First Sprint Begins

#### Tuesday
- Standup Meeting

#### Wednesday
- Standup Meeting
- Sprint 1 Ends
- Review
- Retrospective
- Planning
- Sprint 2 Starts

#### Thursday
- Standup Meeting

#### Friday
- Standup Meeting

### Week 8
#### Monday
- Sprint 2 Ends
- Review
- Retrospective
- Planning
- Sprint 3 Begins

#### Tuesday
- Standup Meeting

#### Wednesday
- Standup Meeting

#### Thursday
- Standup Meeting

#### Friday
- Standup Meeting
- Sprint 3 Ends
- Retrospective
- Project Demonstration

## Implementation

### Project Setup

Create a Repository on GitHub, and ensure that everybody on the team has access to the repository by adding them as a collaborator. **Take the time here to read [A successful Git branching model](http://nvie.com/posts/a-successful-git-branching-model/). Seriously, spend a whole day here if you have to. It'll help.**

### Mob the Database

Before you begin coding - take some time to discuss your data model by drawing Entity Relation Diagrams on [Draw.io](https://www.draw.io). Save these to the Trello board created during the Release planning meeting.

Once you are satisfied with your data model, have an instructor check it over and go through any additional rounds of design that are needed.

Once a satisfactory design has been reached, start building the REST API using mob programming. Use a timer [like this one](http://oss.jahed.io/agility/timer.html) to keep things moving. This is a chance for the whole team to distribute knowledge about the core of the application, so make sure communication is open and loud during this time.

### Divide and Conquer the API

You should now break away from mob programming to focus effort on building out the routes/tests for the models you created during mob programming. The important task to get right here is how you interact with Git.

Try to stick with the following process and the advice afterward, and you should be ok.

1. When starting on your route: `git checkout -b feature-route-name`
2. Done with a feature? `git push origin feature-route-name` and create a PR on GitHub.
3. Assign somebody to review your code and make sure it:
  - Has tests, and that they pass.
  - Implements the required route.
4. Merge the Pull Request.

Additionally, you should make regular commits while on your branch, and be sure to pull down changes that may have been merged in since the last time you pulled. (Pulling is like checking for updates to an app you use regularly.)

To pull the latest changes, **make sure to commit outstanding work** before running `git pull origin master`.

### Mob the UX

You should now come together to collaborate in designing the user experience of the MedAgenda system. Choose a color scheme, a preferred CSS framework etc. 

First, create wireframes of all the screens in your application, then draw how the user will navigate between these pages, refactoring your design to accomodate user efficiency as needed.

### Mob the UI

As a team, quickly create the foundation for the client-side application (written in AngularJS) before pushing to the master branch.

### Divide and Conquer the rest of the application

After this point, work will be done in single units or in pairs. Divide the remaining work into tickets in Trello and assign them to members of the team. Use source control (Git) as before and regularly communicate progress via Trello as much as you can.

### Continually integrate changes until a release is ready.

As long as you are writing tests, regularly merging pull requests, and pushing new features, eventually you will have merged together a working MVP ready for demonstration to the instruction team and your peers.
	
### Demo your application

Create a short presentation (no more than 10 minutes) to demo your project. Your presentation should be composed of the following topics:

- What the project is and the problem it solves
- Technologies used
- Project management processes
- Live project demonstration
- Q+A

### Recommended Roles

The roles that you must all share as a team in this project are:

- `Project Management` - Regularly updating project management tools and communicating with the team regularly.
- `Testing` - Writing tests in a TDD/BDD fashion, using mocha/chai/supertest for backend development, as well as automated ui tests using Selenium.
- `Database Development` - Designing and implementing a MySQL database suitable for purpose.
- `Microservice Development` - Implementing microservices in NodeJS to interact with third party services such as Twilio.
- `User Experience Design` - Designing the interactions between human and computer.
- `User Interface Design` - Designing the visual appeal of the application.
- `Web Application Development` - Implementing applications using JavaScript libraries such as AngularJS, React or Vue to a set of requirements.
- `DevOps` - Maintaining discipline in processes to ensure regular, smooth deployment.

### Mockups
Old mockups from a previous attempt of this project have been supplied by the Product Owner for the benefit of the development team, [which you can view here](https://onedrive.live.com/redir?resid=6CB256973F4115B3!22713&authkey=!ADAZ9LlpofXShsU&ithint=file%2cpdf). Note that the mockups are only pertinent to the administrative application and do not represent the desired requirements of the rest of the project.