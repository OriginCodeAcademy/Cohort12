---
theme: beige
highlightTheme: github
---

<style>
img {
	border: 0 !important;
	box-shadow: none !important;
}
</style>

<img src="http://toolsqa.com/wp-content/uploads/2016/10/software-Testing.png" />

### Automated Testing in JavaScript

---

### Contents

- **Introduction to Testing**
- TDD vs BDD
- Demo: Mocha/Chai
- Demo: Supertest

Note:
- Introduction to testing
	- What is testing?
	- What are the immediate benefits?
	- What are the long term benefits?
	- TDD vs BDD
- TDD vs BDD
	- TDD
	- BDD
	- BDD Example
- Testing Best Practices
- Demo: Mocha/Chai
- Demo: Supertest 

---

### What is Testing?

Checking that software does what it's supposed to

---

### Immediate Benefits

- Gives Confidence
- Enables Change
- Is Documentation
- Provides Rapid Feedback
- Requires more Discipline

Note:
## Gives confidence

When you've been writing your code, you haven't had any real way to check that it does what it's supposed to.

When I give you assignments that rely on unit tests, those had a sense of professionalism, and you likely felt you had a direction to go in.

It's the same thing in the real world - tests give you direction and confidence in a software project.

## Enables Change

Imagine two apps in the app store that are about to publish their first version.

APP A has tests written for it and it's good to go.

APP B has no tests written, but one of the devs checked it over last night at 2AM and says it's good to go.

APP A gets a bug report. Ah! no test for _that_ case! I'll go ahead and fix the bug.. run the tests.. oops I broke something.. go fix it.. yay tests pass! push new version.

APP B gets a bug report. Ah! I knew that might be an issue. Let me fix and push. The first bug was fixed, but it created 5 more bugs that leaked out into production.

Which app do you think has a better reputation?

Which app has happier developers?

## Is Documentation

This speaks for itself, testing provides a form of documentation, because people can learn what your codebase is supposed to do by looking at the tests.

As you get better and better at reading code, you find that looking at the tests for a particular library/framework is just as good if not better than looking at the documentation.

## Provides Rapid Feedback

Once you've automated the tasks, and you're no longer responsible for holding all the business requirements in your head, you can use your brainpower to read your tests and critically evaluate the way you've coded your solution.

This is one of the reason people say testing helps you build software faster in the long run. Lots of small changes like this, and documentation, and confidence.

## Requires more Discipline

We've talked before about how people tend to do things for one of two reasons. To "Avoid Pain" or to "Gain Pleasure".

Testing is one of those things that most people avoid, because they associate testing with pain!

"I don't wanna do testing, that seems hard and not as fun as the thing I want to do. Can't somebody else do this?"

Most people just need to shift their thinking when it comes to testing. I think testing is fun! I like having empirical proof that I'm a disciplined badass.


---

### Long Term Benefits

- Higher quality
- More flexibility
- Better readability
- Easier maintainability
- A well designed application.

---

### Long Term Benefits

**Reduced cost over time**

<img src="https://raygun.com/blog/wp-content/uploads/2013/11/Screen-Shot-2014-01-16-at-2.48.56-pm.png" height="540" />

---

### Long Term Benefits

<img src="http://www.ambysoft.com/artwork/comparingTechniques.jpg" height="540" />

Note:
Coffee boss owner - "Always be proactive about refilling beans."
Be proactive, rather than reactive.

---

### Long Term Benefits

<img src="http://www.softwaretestinggenius.com/photos/1211-1.jpg" height="540" />

Note:
Manual vs Automated Testing

---

### Long Term Benefits

<img src="http://www.fsc-consultants.de/assets/Grafiken-Web_Englisch_2-031.png" height="540" />

Note:
I can make it a lot quicker if it doen't have to work!

---

### Statistics

**When building a project using TDD..**

- It can take 15-30% longer to build the project.
- There are 45-90% fewer bugs.
- It can take 10x as long to fix bugs in production vs development (See, JavaScript).

---

### Introduction - Summary

- Testing ensures your code works.
- Testing statstically saves your company money.
- Testing makes you a badass.

---

### Contents

- **Introduction to Testing**
- **TDD vs BDD**
- Demo: Mocha/Chai
- Demo: Supertest

---

### Two Approaches to Testing

- Test Driven Development (TDD)
- Behavior Driven Development (BDD)

---

### Test Driven Development

<img src="http://www.agilenutshell.com/assets/test-driven-development/tdd-circle-of-life.png" height="540" />

---

### The Three Golden Rules of TDD

1. You may not write production code until you have written a failing test.
2. You may not write a test that is more complex than is needed.
3. You may not write more production code than is necessary for the test to pass.

---

### Behavior Driven Development

- Emerged from TDD
- TDD tells you *when* to write tests.
- BDD tells you *how* to write tests.

---

### BDD

```js
describe('The computer', function() {

	it('should turn on', () => {});
	it('should turn off', () => {});
	it('should restart', () => {});
	it('should start up within 10 seconds', () => {});

});
```

- The computer should turn on.
- The computer should turn off.
- The computer should restart.
- The computer should start up within 10 seconds.

---

### Arrange, Act, Assert

> The computer should turn on.

```js
const Computer = require('computer');
const expect = require('chai').expect;

describe('The computer', function () {
	it('should turn on', () => {
		// ARRANGE
		const computer = new Computer();
		
		// ACT
		computer.turnOn();
		
		// ASSERT
		expect(computer.isPoweredOn).to.equal(true);
	});
});
```

---

### Testing Best Practices

```js
describe('Tests for your app', () => {
	it('should be fully automated', () => {});
	it('should be decoupled from IDE', () => {});
	it('should be easy to run the tests', () => {});
});
```

---

### Contents

- **Introduction to Testing**
- **TDD vs BDD**
- **Demo: Mocha/Chai**
- Demo: Supertest

---

- **Introduction to Testing**
- **TDD vs BDD**
- **Demo: Mocha/Chai**
- **Demo: Supertest**