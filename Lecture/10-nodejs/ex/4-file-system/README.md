# Ex4: File System

## Repeated Tasks

1. Require the `http` module.
2. Define a constant variable called `port` and assign it any numerical value between 1-65335
3. Define a function called `requestHandler` that accepts two parameters called `request` and `response`. Add this code to the body of this function:

```js
console.log(request.url);
response.end('Hello World!');
```

4. Define another function called `serverHandler` that simply logs `Server is listening on port ${port}` - using string interpolation to print the value of your `port` variable as part of the message being printed to the console.

5. Define a constant variable called `server` and assign it the return value given by calling the `http.createServer` function, passing `requestHandler` as an argument.

6. Start your server by calling the `listen` function on the `server` object, passing `port` and `serverHandler` as arguments.

7. Handle the following cases with a switch statement:

```
/topspots   (see task 1 under new tasks)
/time       return the current time
default     return Hello world!
```

## New Tasks

1. Require the `fs` module
2. In your switch case for `/topspots`, use the `fs.readFile` function to read the contents of the provided `topspots.json` file.
3. In the callback provided to `fs.readFile`, use `response.end` to respond with the contents of `topspots.json`.