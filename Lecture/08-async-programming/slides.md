---
theme: white
highlightTheme: agate
revealOptions:
    transition: zoom
---

<style>
img {
    border: 0 !important;
    box-shadow: none !important;
    height: 8em;
}

h4, span.objective, p {
    color: orange !important;
}
pre, code {
    font-size: 65% !important;
    line-height: 1.2em !important;
}
</style>

<img src="https://cdn2.iconfinder.com/data/icons/flat-icons-19/512/Burger.png" />

#### Async Programming in JavaScript
<small>(Or, three ways to order a cheeseburger..)</small>

Note:
- Thanks for coming to listen to my talk! 
- Hopefully you guys got some food before this talk
- JavaScript is everywhere today

---

## Questions to be Answered

1. <span class="objective">What's the deal with the cheeseburger?</span>
2. <span class="objective">What are callbacks?</span>
3. <span class="objective">What are promises?</span>
4. <span class="objective">What is async/await?</span>
5. <span class="objective">How does all this relate to cheeseburgers?</span>

----

#### What's the deal with the cheeseburger?

```js
let burger = {
    name: 'Cheeseburger',
    eat: () => alert('delicious')
//  eat: function() { alert('delicious'); }
}

burger.eat();
```

Note:
- It's getting toward the end of the day
- We need to learn more
- But we need to have some fun.
- I like burgers
- Ordering a cheeseburger is a great analogy for async.

----

#### What is async programming?

<img src="https://savingmoney.thefuntimesguide.com/files/check-out-line-by-Zeetz-Jones.jpg" height="540" />

Note:
- One of the most important things to know about JS is how to handle async operations correctly.
- Downloading data from an API? That's an async operation.
- Waiting for user input? That's an async operation.
- Ordering a cheeseburger? That's an async operation.
- I'm going to cover three ways you can perform async operations in JavaScript.
- Callbacks, Promises, and the Async/Await keywords.

----

#### What are callbacks?

```js
// Callback function
function foo(callback) {
    let bar = 'hello';

    callback(bar);
}

// Invoking callback function
foo(function(err, bar) {
    alert(bar);
});
```

Note:
- A callback is simply passing a function into another function.
- Callbacks are one way to perform async operations.
- In this example.. (explain)

----

#### Ordering a Cheeseburger using a callback

```js
// Callback function
function orderBurger(giveBurger) {
    let burger = {
        name: 'Cheeseburger',
        eat: () => alert('delicious')
    };

    giveBurger(burger);
}

// Invoking callback function
giveBurger(function(burger) {
    burger.eat();
});
```

Note:
- In this example, we are using callbacks to order a burger.
- Explain the code
- What are the downsides?

----

#### Chaining Callbacks (Callback Hell)

<img src="http://jonmircha.github.io/eit-nodejs-2015/img/callback-hell.png" height="540" />

Note:
- Well, the first problem is when we chain callbacks.
- It works well, don't get me wrong
- But it looks ugly as heck..


----

#### Callback Hell

<img src="http://icompile.eladkarako.com/wp-content/uploads/2016/01/icompile.eladkarako.com_callback_hell.gif" height="540" />

Note:
- .. and looks like Ryu is punching your code.

----

#### Uncertainty

```js
// Callback Function
function orderBurger(giveBurger) {
    let burger = {
        name: 'Cheeseburger',
        eat: () => alert('delicious')
    };

    giveBurger(burger);
    giveBurger(burger); // <--- oops!
    giveBurger(burger); // <--- oops!
}

giveBurger(function(burger) {
    burger.eat();
});
```

Note:
- The second problem is uncertainty.
- There's no way to assure a callback is only called once.
- I personally try to avoid eating 4 burgers in one sitting.
- This has caused some serious bugs. So a few years ago we were introduced to this concept of Promises, to avoid callback hell and provide certainty in our async ops.

----

#### What are promises?

```js
// Promise function
function foo() {
    return new Promise((fulfill, reject) => {
        let bar = 'hello';

        fulfill(bar);
    });
}

// Invoking promise function
let promise = foo();

promise
    .then(function(bar) {
        alert(bar);
    })
    .catch(function(err) {
        alert(err);  
    });
```

Note:
- A promise is an upgrade to the concept of callbacks.
- A promise represents the eventual completion or failure of an async operation and it's resulting value.
- In this example.. (explain)

----

#### Ordering a Cheeseburger using Promises

```js
// Promise function
function orderCheeseburger() {
    return new Promise((fulfill, reject) => {
        let burger = {
            name: 'Cheeseburger',
            eat: () => alert('delicious')
        };

        fulfill(burger);
    })
}

// Invoking cheeseburger function
orderCheeseburger().then(function(cheeseburger) {
    cheeseburger.eat();
});
```

Note:
- Explain the code

----

#### No more uncertainty!

```js
function orderCheeseburger() {
    return new Promise((fulfill, reject) => {
        let burger = {
            name: 'Cheeseburger',
            eat: () => alert('delicious')
        };

        fulfill(burger);
        fulfill(burger); // won't work
    })
}

orderCheeseburger().then(function(cheeseburger) {
    cheeseburger.eat();
});
```

Note:
- Once a promise has been fulfilled or rejected, it becomes immutable (frozen solid)
- A promise cannot be fulfilled or rejected once it becomes immutable.
- Hurray! No more surplus burgers!

----

#### Chaining Promises

```js
// Functions that return promises
function downloadData() { }
function cleanData(data) { }
function analyzeData(data) { }
function publishData(analyzedData) { }

// Promise chain
downloadData() 
    .then(cleanData)
    .then(analyzeData)
    .then(publishData);
```

Note:
- Explain the code
- Chaining async ops together, think of it as the phone game.

----

#### Promise Hell

<img src="https://cdn.meme.am/cache/instances/folder901/63888901.jpg" height="540" />

Note:
- Kind of like the phone game, it gets messy when you're trying to work with data along a promise chain.
- Promises get the concept right
- Promises don't get the syntax right
- It's still possible to mess up
- Murphys law: Anybody that can mess up, will mess up.
- Big believer in holistic frameworks and guided programming.
- Reduces bugs, increases readability.
- Use the language!

----

#### Async/Await

```js
let futureBar = await foo();

async function foo() {
    let bar = 'hello';

    return bar;
}
```

Note:
- Async functions are sweet.
- Explain the code
- We still have certainty, because we can only return once
- This looks more like native JavaScript.
- No chance of callback hell.
- You can only use the await keyword inside of an async function
- So we need to make one small change.

----

#### Async/Await

```js
(async function () {
    let futureBar = await foo();

    async function foo() {
        let bar = 'hello';

        return bar;
    }
})();
```

Note:
- We've wrapped this entire bit of code in an async function.
- I call this an IIAFE. Immediately Invoked Async Function Expression.
- Explain what an IIFE is
- Explain what an IIAFE is.

----

#### Ordering a Cheeseburger

```js
(async function() {
    let futureCheeseburger = await orderCheeseburger();

    async function orderCheeseburger() {
        let burger = {
            name: 'Cheeseburger',
            eat: () => alert('delicious');
        };

        return burger;
    }
})();
``` 

----

#### Chaining Async

```js
(async function() {

    let rawData = await downloadData();
    let cleanData = await cleanData(data);
    let analyzedData = await analyzeData(cleanData);
    let result = await publishData(analyzedData);

    // Functions that return promises
    async function downloadData() { }
    async function cleanData(data) { }
    async function analyzeData(data) { }
    async function publishData(analyzedData) { }

})();
```

----

#### Summary

- Level One: **Callbacks** - Avoid when possible.
- Level Two: **Promises** - Use when possible.
- Level Three: **async/await** - Not ready yet, but use when standardized.