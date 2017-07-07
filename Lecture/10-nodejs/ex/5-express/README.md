# Ex5: Express

## Tasks

1. In the command line, run `npm install express --save` to install Express.
2. In app.js, require the `express` and `fs` modules, storing them in newly defined constant variables named `express` and `fs` respectively.
3. Create a new express app by defining a constant variable called `app` and assigning the return value from calling `express()`.
4. Create the following three routes:

- `/`: Responds with "Hello world!"
- `/topspots`: Responds with contents of `topspots.json` file
- `/time`: Responds with the current date and time.