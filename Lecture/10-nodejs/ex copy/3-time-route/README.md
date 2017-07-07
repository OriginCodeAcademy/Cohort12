# Ex3: Time Route

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

## New Tasks

1. Add a switch statement in `requestHandler`. You will need one case for when the `request.url` is `/time`, and a default case. Implement these cases as shown in the lesson.