---
theme: beige
---

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2000px-Unofficial_JavaScript_logo_2.svg.png" height="300" style="border: 1px solid gray" />

# Fundamentals

---

### Learning Objectives

- **Introduction**
- Statements and Expressions
- Values & Types
- Operators & Conditionals
- Functions and Scope
- Objects
- Loops

---

## Introduction

- Creation vs Consumption

- Computers and Machine Code

- Speaking Machine Code

---

## Programming Languages

- Translate human readable text instructions into machine code

---

### Learning Objectives

- **Introduction**
- **Statements and Expressions**
- Values & Types
- Operators & Conditionals
- Functions and Scope
- Objects
- Loops

---

## Statements and Expressions

- Commenting
- Declaring Variables
- Assignment Operator
- Case Sensitive Names
- Casing Standards
- Addition
- Re-assignment
- Compound Assignment
- Math Operations

---

## Commenting

> Add notes/documentation to your code

<iframe src="https://repl.it/I6dF/1" width="1280" height="540"  />

---

## Declaring Variables

> Store data that can be resued later in your program

<iframe src="https://repl.it/I6dF/2" width="1280" height="540"  />

---

## Assignment Operator

> Assign values to variables

<iframe src="https://repl.it/I6dU" width="1280" height="540"  />

---

## Case Sensitive Names

> firstName != FirstName

<iframe src="https://repl.it/I6d3" width="1280" height="540"  />

---

## Casing Standards

```
camelCase (firstName, lastName, dayOfWeek)

UpperCase (FirstName, LastName, DayOfWeek)

snake_case (first_name, last_name, day_of_week)

kebab-case (first-name, last-name, day-of-week)
```

---

## Addition

> Use the + operator against two operands.

<iframe src="https://repl.it/I6d6" width="1280" height="540"  />

---

## Expressions

- You've learned about two kinds of expressions:

```
// Assignment expression
var x = 10;
var y = 15;

// Addition expression
var total = x + y + 8; // 33
```

---

## Managing Variables

> Often we need to change the value of variables.

<iframe src="https://repl.it/I6d9" width="1280" height="540"  />

---

## Compound Assignment

> Increase/decrease the value stored in a variable by a certain amount.

<iframe src="https://repl.it/I6dk" width="1280" height="540"  />

---

## Math Operations

Arithmetic operations are always evaluated in a specific order, called the order of operations. 

The PEMDAS acronym is an easy way to remember the order of operations for almost all programming languages.

---

## Math Operations

1. Parentheses
2. Exponents 
3. Multiplication
4. Division
5. Addition
6. Subtraction

---

### Code Challenges

1 hour - complete first 9 exercises in the following repl.it classroom:

https://rebrand.ly/node100

- If you finish early, read first two chapters of You Don't Know JavaScript by Kyle Simpson (Free on GitHub)

---

### Learning Objectives

- **Introduction**
- **Statements and Expressions**
- **Values & Types**
- Operators & Conditionals
- Functions and Scope
- Objects
- Loops

---

### Values & Types

- Numbers
- Strings
- Arrays
- Functions and Scope
- Booleans
- Null & Undefined

---

## Numbers

> Humans use Base 10, Computers use Base 2/8/16

<table>
    <tbody>
        <tr>
            <td>
                <strong>Base 10</strong><br />
                1<br />
                2<br />
                3<br />
                10<br />
                20<br />
                30<br />
            </td>
            <td>
                <strong>Base 2 (Binary)</strong><br />
                0b000001<br />
                0b000010<br />
                0b000011<br />
                0b001010<br />
                0b010100<br />
                0b011110
            </td>
            <td>
                <strong>Base 16 (Binary)</strong><br />
                0x000001<br />
                0x000002<br />
                0x000003<br />
                0x0000a0<br />
                0x000014<br />
                0x00001e
            </td>
        </tr>
    </tbody>
</table>

---

## Numbers

<iframe src="https://repl.it/languages/javascript" width="1280" height="540" />

---

## Strings

> Strings are alphanumerical characters surrounded by either single or double quotes.

<iframe src="https://repl.it/I7Er" width="1280" height="540" />

---

## Strings: Escape Sequences

> Watch out for special characters!

<iframe src="https://repl.it/I7FC" width="1280" height="540" />

---

## Strings: Concatenation

> Adding two strings together

<iframe src="https://repl.it/languages/javascript" width="1280" height="540" />

---

## Strings: Length

> Find out how many characters make up a string

<iframe src="https://repl.it/languages/javascript" width="1280" height="540" />

---

## Strings: Bracket Notation

- Strings are indexed in most programming languages.

- We can access individual characters in a string using bracket notation

- In bracket notation, we provide the index of the character we'd like to pull out.

```
'Hello!'
 ^^^^^^
 ||||||
 012345
```

---

## Strings: Bracket Notation

<iframe src="https://repl.it/languages/javascript" width="1280" height="540" />

---

## Arrays

> Arrays are a way to store a list of variables in JavaScript. 

<iframe src="https://repl.it/I7FC/1" width="1280" height="540" />

---

## Functions

- A function is a reusable block of code.

- The function keyword.

- The function name.

- The function parameters

- The block of code.

---

## Functions

<iframe src="https://repl.it/languages/javascript" width="1280" height="540" /> 

---

## Booleans

<iframe width="1280" height="540" src="https://www.youtube.com/embed/nyOepG93wSI" frameborder="0" allowfullscreen></iframe>

---

## Booleans

> A boolean can hold one of two possible values: True or false.

```js
var isLightbulbOn = true;

isLightbulbOn = false;
isLightbulbOn = true;
isLightbulbOn = false;
isLightbulbOn = true;
```

---

## Null & Undefined

> There are two main value types to represent an empty value.

- Null: This variable is empty for a reason.
- Undefined: This variable is empty due to an absence of definition.

---

## Null & Undefined

<iframe src="https://repl.it/languages/javascript" width="1280" height="540" />

---

## Code Exercises

30 minutes - complete the next 10 exercises in the repl.it classroom (Everything prefixed with `Types`)

https://rebrand.ly/node100

---

### Learning Objectives

- **Introduction**
- **Statements and Expressions**
- **Values & Types**
- **Operators & Conditionals**
- Functions and Scope
- Objects
- Loops

---

### Operators & Conditionals

- Comparison
- Equality
- Logical Operators
- If Statements
- Switch Statement

---

### Operators & Conditionals

- Math operators compute numerical values.

- Boolean operators compute boolean values.

- We will now focus on Boolean computation - also known as *_Conditions_*.

---

### Comparison Operators

<iframe src="https://repl.it/languages/javascript" width="1280" height="540" />

--- 

### Equality

- Two types of equality

- Loose Equality (`==`) checks if the values of two operands are equal.
- Strict Equality (`===`) checks if the values and types of operands are equal.

---

### Equality

<iframe src="https://repl.it/languages/javascript" width="1280" height="540" />

---

### Logical Operators

- There are two logical operators: AND / OR.

- AND (`&&`) checks if two booleans are TRUE
- OR (`||`) checks if at least one boolean is TRUE.

---

### Logical Operators

<iframe src="https://repl.it/languages/javascript" width="1280" height="540" />

---

### If Statements

> If statements allow us to execute one of two blocks of code depending on the result of a boolean condition.

<img src="https://s3-us-west-1.amazonaws.com/oca-start-now/curriculum/images/NODE100-IfElse.png" height="400" />

---

### If Statements

<iframe src="https://repl.it/languages/javascript" height="540" width="1280" />

---

### Switch Statement

<iframe src="https://repl.it/languages/javascript" height="540" width="1280" />

---

### Learning Objectives

- **Introduction**
- **Statements and Expressions**
- **Values & Types**
- **Operators & Conditionals**
- **Functions and Scope**
- Objects
- Loops

---

### Functions and Scope

- Defining functions
- Invoking functions
- Function parameters
- Scope

---

### Defining Functions

> Functions allow you to create a block of code that can be called at any time.

```js
function sayHello() {
    console.log('Hello');
}
```

---

### Invoking Functions

> Invoking a function is telling JavaScript to run the code block associated with that function.

```js
// Function definition
function sayHello() {
    console.log('Hello');
}

// Function invoke
sayHello();
```

---

### Function parameters

> Parameters are values to be passed into a function.

```js
function addTwoNumbers(a, b) {
    return a + b;
}

var x = addTwoNumbers(2, 2);
var y = addTwoNumbers(5, 5);
```

---

### Scope

- Mo variables, Mo problems.

- We need to start considering scope.

---

### Scope

> In JavaScript, a scope is created anytime we define a new function.

---

### Scope

> JavaScript will take an "inside-out" approach to find the value of a variable.

<img src="https://s3-us-west-1.amazonaws.com/oca-start-now/curriculum/images/NODE100-functions-scope-1.png" height="300" />

---

### Scope

<iframe src="https://repl.it/languages/javascript" height="540" width="1280" />

---

### Hoisting

- JavaScript code for the most part is interpreted line-by-line as the program executes.

```js
var a = 1;

var b = a + 2;

console.log(b);
```

---

### Hoisting

- What happens with this code?

```js   
b();    

function b() {
    a = 2;
}       

var a;

console.log(a);
```

---

### Hoisting

- Step 1: Move all functions to the top of the current scope

```js
function b() {
    a = 2;
}

b();    

var a;

console.log(a);
```

---

### Hoisting

- Step 2: Move all variable declarations to the top of the current scope

```js
var a;

function b() {
    a = 2;
}

b();    

console.log(a);
```

---

### Hoisting

- Hoisting is now complete

<iframe src="https://repl.it/I89P" width="1280" height="540" />

---

### Exercises

- In 20 minutes, complete the next 4 exercises

- Functions: Defining
- Functions: Invoking
- Functions: Parameters
- Functions: Scope

---

### Learning Objectives

- **Introduction**
- **Statements and Expressions**
- **Values & Types**
- **Operators & Conditionals**
- **Functions and Scope**
- **Objects**
- Loops

---

### Objects

- What are objects?
- Creating objects
- Object properties
- Setting object properties
- Getting object properties

---

### What are objects?

> Objects are simply containers for JavaScript values.

```js
var school = {
    name: 'Origin Code Academy',
    city: 'San Diego'
};
```

---

### Creating Objects

> You can create an object using the Object function, or more commonly with the object literal syntax

```js
var student = Object();   // The object function
var car = {};             // An object literal
```

---

### Object properties

> A property is a value contained inside of an Object.

```js
var school = {
    name: 'Origin Code Academy', // property
    city: 'San Diego'            // property
};
```

---

### Getting object properties

> You can read the properties of an object using bracket notation or dot notation.

```js
var car = {
    make: 'Honda',
    model: 'Civic',
    year: 2017
};

car['make'];     // => Honda
car.make;        // => Honda
```

---

### Setting object properties

> You can set the properties of an object using an assignment expression.

```js
var car = {
    make: 'Honda',
    model: 'Civic',
    year: 2017
};

car['make'] = 'Ford';
car.model = 'Focus'; 
car.year = 2018;
```

---

### Creating Objects

### Learning Objectives

- **Introduction**
- **Statements and Expressions**
- **Values & Types**
- **Operators & Conditionals**
- **Functions and Scope**
- **Objects**
- **Loops**

---

### Loops

> Loops help us run a block of code multiple times as long as a condition is met.

- While Loop
- For Loop

---

### While Loop

<img src="https://s3-us-west-1.amazonaws.com/oca-start-now/curriculum/images/NODE100-WhileLoop.png" height="540" />

---

### While Loop

```js
var count = 0;

while(count < 5) {
    console.log('Hello world!');
    count += 1;
}
```

---

### For Loop

<img src="https://s3-us-west-1.amazonaws.com/oca-start-now/curriculum/images/NODE100-ForLoop.png" height="540" />

---

### For Loop

```js
for(var i = 0; i < 5; i++) {
    console.log('Hello world!');
}
```

---

### For Loop

- Declaration component: `var i = 0;`
- Conditional component: `i < 5;`
- Post-iteration component: `i++`

```js
for(var i = 0; i < 10; i++) {
    console.log(i);
}
```

---

### Exercises

Spend 20 minutes on the final exercises of `NODE100`.

---

### Summary

- Variables
- Values & Types
- Operators & Conditionals
- Functions and Scope
- Objects
- Loops

---

## Q: What are the 6 main types in JavaScript?

---

## A: `Boolean`, `Null`, `Undefined`, `Number`, `String`, `Object`

---

## Q: What are 4 examples of compound assignment operators?

---

## A: `+=`, `-=`, `*=`, `/=`

---

## Q: What does use of the `/=` operator result in?

---

## A: A division of the LH value by the RH value

```
var x = 10;     // => 10
x /= 2;         // => 5
```

---

## Q: What are the 4 comparison operators?

---

## A: `<`, `<=`, `>`, `>=`

---

## Q: What is a function?

---

## A: A named block of reusable code

---

## Q: What will this code log?

```js
function log(message) {
    console.log(message);
}

sayHello(name);

var name = 'Jennifer';

function sayHello(name) {
    log('Hello ' + name);
}
```

---

## A: 'Hello Jennifer' - Remember hoisting

---

### Summary

- Variables
- Values & Types
- Operators & Conditionals
- Functions and Scope
- Objects
- Loops

---

## What's next?

- Tomorrow we start using jQuery

- Catch up on outstanding exercises