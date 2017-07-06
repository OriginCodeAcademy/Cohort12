# Zero to Forevernote

## High Level Steps

1. Initialize the App
2. Install Initial Dependencies
3. Boilerplate Files
4. Check the app works
5. Initialize Sequelize
6. Modify Sequelize Configuration
7. Create Sequelize Model
8. Create a MySQL Database
9. Run Sequelize Migration
10. Use Sequelize in Express Routes

## Step 1 - Initialize the App

First, we need to perform the usual, repeatable steps to start a new project.

```sh
$ mkdir <DEV_FOLDER>/forevernote
$ cd <DEV_FOLDER>/forevernote
$ git init
$ yarn init                         # Accept defaults for all questions
```

## Step 2 - Install Initial Dependencies

Next, here are some dependencies that you'll need in your project and how you install them.

```sh
$ yarn add express dotenv body-parser
```

<table style="width: 100%">
    <thead>
    	<tr>
    		<th>Package Name</th>
    		<th>Description</th>
    	</tr>
    </thead>
    <tbody>
    	<tr>
    		<td><code>express</code></td>
    		<td>A fast un-opinionated framework for building web applications/APIs</td>
    	</tr>
    	<tr>
    		<td><code>dotenv</code></td>
    		<td>Loads environment variables from a <code>.env</code> file into <code>process.env</code></td>
    	</tr>
    	<tr>
    		<td><code>body-parser</code></td>
    		<td>Parses incoming request bodies in middleware and exposes them via <code>req.body</code> in your route handlers.</td>
    	</tr>
    </tbody>
</table>


## Step 3 - Boilerplate Files

Next, we need to do some gruntwork to get the project off the ground. Add the following files to the project, paying close attention to both the file path and the file name.

Example:

- `/.gitignore` means put a file called `.gitignore` in the root of your project.
- `/server/models/note.js` means put a file called `note.js` in the `models` folder, which is a child to the `server` folder, which is a child to the root of your project.

### /.gitignore
Used to tell Git to exclude certain files/folders from being tracked in version history.

```
Use this .gitignore file provided by GitHub.
https://github.com/github/gitignore/blob/master/Node.gitignore
```


### /.editorconfig
Used to create whitespace/styling consistency between developers

```yaml
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

### /.env
Used to store [environment variables]() which will later be read into `process.env` by the `dotenv` package.

```yaml
MYSQL_HOST=127.0.0.1
MYSQL_USER=root
MYSQL_PASS=[your password]
MYSQL_DATABASE=forevernote
```

### /index.js
The entry point to the whole application. This is the first JavaScript file that will be executed.

```js
require('dotenv').config();
const server = require('./server/app.js');

const port = process.env.PORT || 8080;

server.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
```

### /server/app.js

# WARNING!

> _Watch out!_ We're making files in the `server` folder now!

```js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.send('It works!');
});

module.exports = app;
```

## Step 4 - Check that your app works

You should now be able to start the server without errors. It doesn't do very much now, but it's good to check your work as you progress.

### Start the server
First, add a start script to the `scripts` section of `package.json` as below:

```js
{
    ...
    "scripts": {
        "start": "node index.js"
    }
    ...
}
```

Then, run the following command to start the server.

```sh
$ yarn run start
```

### Check the server works

Navigate to `http://localhost:8080/` in your web browser of choice - you should see the words `It works!` in the window.

If you see the message, great! If not, ask an instructor for help before moving on.

## Step 5 - Initialize Sequelize

Now is a good time to get started defining the models/tables that will eventually make up the app.

Open the command line and enter the following commands:

```sh
$ cd <DEV_FOLDER>/forevernote
$ yarn add sequelize mysql2
$ yarn add sequelize-cli --dev
$ cd server								# <---- VERY IMPORTANT
$ ../node_modules/sequelize-cli/bin/sequelize init
```

> ***Hold up, what's that last line about?***

Sequelize is both a **package** which you can `require()` into your NodeJS application, and a **CLI tool** that can be run from the command line.

For the **CLI tool**, we _could_ have:

**a)** Run `npm install -g sequelize-cli`, then run `sequelize init`..

**b)** Add and execute sequelize-cli as a dev dependency in the project by running `yarn add sequelize-cli --dev` followed by `../node_modules/sequelize-cli/bin/sequelize init`.

The reason we went with **b)** is down to best practice. Installing sequelize-cli as a dependency rather than a global package ensures that other developers will be able to clone the project and run migrations without having to install it as a global CLI tool.

## Step 6 - Modify Sequelize Configuration

After running `sequelize init`, you will notice that 4 new folders were created.

```
server
|_ config
|_ migrations
|_ models
|_ seeders
```

Modify the settings for `"development"` and `"test"` in `config/config.json` to reflect your local database settings, and copy the `"production"` section to your file.

Here's what ours looks like:

```js
{
  "development": {
    "username": "root",
    "password": null,
    "database": "forevernote",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "forevernote",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "DATABASE_URL"
  }
}
```

> Note: We've told sequelize to get it's configuration from the `DATABASE_URL`  **environment variable** when in production. This is a security measure to make sure we don't leak production credentials via GitHub.


## Step 7 - Create Sequelize Models

Next, it's time to start adding models (representations of our MySQL tables in code).

Open up the command line and run the following command:

```sh
$ sequelize model:create --name Note --attributes title:string,body:text,category:string
```

This will automatically:

- [ ] Generate `/server/models/note.js` containing the note model.
- [ ] Generate a migration to convert the note model into a MySQL table.

As this is the only model we need - step 7 is complete!

## Step 8 - Create a MySQL Database

Time for some :sparkle: magic :sparkle:! We're now going to ask `sequelize-cli` to generate a table in MySQL based on the note model we just created.

However - it won't perform all the magic. It will generate **tables** for us, but not **databases**.

- [ ] Open MySQL Workbench and create a blank database called `forevernote`.

## Step 9 - Run Sequelize Migration

Once you've done that, run the migration with the following command:

```sh
$ cd <DEV_FOLDER>/forevernote/server      # skip if you are already at this folder
$ ../node_modules/sequelize-cli/bin/sequelize db:migrate
```

Now.. go checkout MySQL Workbench and your new, shiny, JS-generated MySQL database!

## Step 10 - Setup the Express Routes

```
<Coming Soon>
```
