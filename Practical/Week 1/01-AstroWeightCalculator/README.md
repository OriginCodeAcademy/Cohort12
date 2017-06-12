# Astro Weight Calculator

![](http://i.imgur.com/x189kBb.png)
(An example mockup of the finished project)

Welcome to your first jQuery project!

Consider a scenario where you've been hired by NASA to build an internal tool. Their engineers would like a way to calculate the weight of their various instruments on different planets in our solar system.

This information will be used by the engineers to plan out how much equipment can be transported while still being able to depart the destination planet.

### Prerequisite software

Make sure you have the following software installed on your machine:

- [ ] [Visual Studio Code](https://code.visualstudio.com)
- [ ] [NodeJS](https://nodejs.org)
- [ ] [Git](https://git-scm.com)

## Walkthrough

### 1. Sign up for GitHub

* [ ] [GitHub](https://www.github.com) - You will use this to store your assignments.

### 2. Install the necessary tools
* [ ] [Git command line utility](https://www.git-scm.com) - You will use this in command prompt to backup your work to GitHub.
* [ ] [Visual Studio Code](https://code.visualstudio.com/) - You will use this to edit HTML, CSS and JavaScript files.
* [ ] [Chrome](https://www.google.com/chrome/) - This is the primary browser we will be using for web development.

### 3. Setup the project

First, open a command prompt and run the following command:

**If you have a MacBook (macOS + Terminal)**<br />
`$ mkdir ~/dev`

**If you have a PC (Windows + Command Prompt)**<br />
`> mkdir C:\dev`

This `dev` folder is where you'll store this project and all future projects. It's a good idea to have a central folder where you keep all your development folders and files, not just to keep them seperate from your personal files but also to keep your workstation clean and organized. As a mechanic keeps their tools organized, so should you.

Next, type the following command to create a new development folder.

**Mac**
> `cd ~/dev && mkdir 01-AstroWeightCalculator && cd 01-AstroWeightCalculator`

**Windows**
> `cd C:\dev && mkdir 01-AstroWeightCalculator && cd 01-AstroWeightCalculator`

This will open the dev folder, and (&&) make a folder called 01-AstroWeightCalculator, and (&&) open that folder.

Next, let's setup `git` - a command line utility to backup/create a history of the code you're about to write. Open the terminal, and run the following command

**Mac and Windows**
> `git init`

### 4. Create the necessary files

Next, open Visual Studio Code and create two files in your project: `index.html` and `astro-weight.js`.

Fill in the index.html with a simple version of the screenshot seen above. (Focus on functionality first, styling can come later.)

### 5. Previewing your HTML

While building the project, you will want to be able to view your work in a browser, similar to how CodePen and Repl.it allow you to see the output of your code. Here's how we'll do that on our local machine.

First, we need to install a lightweight HTTP server called `reload`. Open up a terminal and type the following command followed by return:

`npm install -g reload`

Next, `cd` into your project

**macOS**<br />
`$ cd ~/dev/01-AstroWeightCalculator`

**Windows**<br />
`> cd C:\dev\01-AstroWeightCalculator`

Then run `reload .` to start a HTTP web server on port 8080, which can be viewed by going to `http://localhost:8080` in Chrome/Firefox.

Note: reload is a program that keeps running so it can answer all requests. To stop the server, use the keyboard shortcut `Ctrl + C`.

### Store information about the planets in a JavaScript 2D Array

Ok, let's switch gears for a moment and open up `index.js`.

Use this code as your starting point:

```js
$(document).ready(function() {
  // your code goes here
});
```

First, you need to add the following two-dimensional array to hold the values of each planet's surface gravity multiplier in relation to Earth's surface gravity. 

We will use this array to dynamically populate the select dropdown for planets, and use as a reference when calculating user weight.

Add and complete the following code in `index.js`.

```js
var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn': 1.139],
  // Use the data from the table below to fill in the rest of the planets
];
```

<table>
  <thead>
    <tr>
      <th>Planet Name</th>
      <th>Gravity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Pluto</td>
      <td>0.06</td>
    </tr>
    <tr>
      <td>Neptune</td>
      <td>1.148</td>
    </tr>
    <tr>
        <td>Uranus</td>
        <td>0.917</td>
    </tr>
    <tr>
        <td>Saturn</td>
        <td>1.139</td>
    </tr>
    <tr>
        <td>Jupiter</td>
        <td>2.640</td>
    </tr>
    <tr>
        <td>Mars</td>
        <td>0.3895</td>
    </tr>
    <tr>
        <td>Moon</td>
        <td>0.1655</td>
    </tr>
    <tr>
        <td>Earth</td>
        <td>1</td>
    </tr>
    <tr>
        <td>Venus</td>
        <td>0.9032</td>
    </tr>
    <tr>
        <td>Mercury</td>
        <td>0.377</td>
    </tr>
    <tr>
        <td>Sun</td>
        <td>27.9</td>
    </tr>
  </tbody>
</table>

Once you've finished off the array, let's commit what we've done so far using Git. Open up a terminal and navigate to your project using `cd`.

```
$ git add .
$ git commit -m "Added planets array"
```

Notice the use of past tense in commit messages. You're summarizing what changed between this commit you're making and the previous commit made earlier. In this case, we added a planets array.

### Challenge: Dynamically generate the planets dropdown

The challenge here is to use the data in the 2D array to populate the select element you made earlier with options for each planet. 


- [ ] You will need to use the `.reverse` JavaScript method to reverse the array before generation
- [ ] You will need to perform DOM Manipulation using jQuery to create and append `<option>` elements to the `<select>` element in `index.html`.

Once you finish, go ahead and commit your progress to git.

```
$ git add .
$ git commit -m "Added code to dynamically generate planets dropdown"
```

### Handle the click event fired when the user clicks calculate weight.

The final phase of this project is to write JavaScript that will listen for events fired by the user (such as a button click event) and change the state of the DOM accordingly. Here's a visual representation of what needs to happen.

![](http://i.imgur.com/XTgOyCc.png)

Add the following code to `index.js` as a starting point and complete the 4 challenges highlighted in comments, running unit tests along the way.

```js
$('button').on('click', calculateWeight);
function calculateWeight(ev) {

  // 1. Assign the value property of the userWeight input element to a variable called userWeight.
  // Hint: research and use the `.val` function.

  // 2. Assign the selected option text of the planets select element to a variable called planetName.
  // Hint: use Google to search "how to grab the text of a selected option using jQuery" 

  // 3. Assign the selected option value of the planets select element to a variable called planetMultiplier.
  // Hint: use Google to search "how to grab the value of a selected option using jQuery"

  // 4. Calculate the users weight and store in a variable called userWeight.
  // Hint: use the * operator

  // 5. Set the text of your output element to be the value of the planetWeight variable.
  // Hint: use the `.text` function.
}
```

### Project Submission

Before submitting, commit your latest changes if you haven't already. Here's an example:

```
$ git add .
$ git commit -m "Added click handler and finished project"
```

Next, go to GitHub, click on the `+` icon in the top right of the menu bar and select _New Repository_.

![](http://i.imgur.com/qFLxpA3.png)

Name your repository `01-AstroWeightCalculator` and enter a unique description. Here's what you should have filled out on the screen before clicking _Create repository_.

![](http://i.imgur.com/AZ82e2U.png)

Once the repository is created, open up a terminal and navigate to your project using `cd`. Enter the commands shown under _Or push your existing repository from the command line_. See the example below, making sure to replace `cameronwilby` for your username in the `git remote add origin` command.

![](http://i.imgur.com/XKrIcoj.png)

Finally, create an issue in GitHub to let your instructor know that you've finished by [clicking here](https://www.github.com/OriginCodeAcademy/Cohort12/issues/new?title=Astro%20Weight%20Calculator&body=1.%20Where%20can%20I%20find%20your%20repository%3F%20(Paste%20a%20link%20below)%0A%0A2.%20How%20difficult%20did%20you%20find%20this%20project%3F%20(1-10)%0A%0A3.%20What%20was%20the%20best%20thing%20you%20learned%20in%20this%20project%3F%0A%0A4.%20Did%20you%20run%20into%20any%20trouble%20using%20the%20%60oca-cli%60%20tool%3F).

### Celebrate!

Congratulations, you completed this assignment! Go do something fun to celebrate :)
