---
theme: sky
highlightTheme: atom-one-dark
---

<style>
   pre {
    font-size: 50% !important;
   }
   code {
    padding: 24px !important;
   }
</style>

<img src="https://camo.githubusercontent.com/02ed3f6695f288aedec24c2a329c667281efef5f/687474703a2f2f707265636973696f6e2d736f6674776172652e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031342f30342f6a5175726572792e676966" height="350" style="border: none; box-shadow: none" />

### WEB-101 - jQuery and the DOM

---

# Topics

- **What is jQuery?**
- Selecting Elements
- Handling Events
- DOM Manipulation
- Effects
- Chaining
- AJAX
- Project: Astro Weight Calculator

----

## What is jQuery?

- A fast, small (86KB) and feature-rich JavaScript library to help you easily manipulate your HTML/CSS using JavaScript.

- A JavaScript file that you include in your web pages.

----

## Why use jQuery?

- Simple, yet powerful

- Cross Browser Compatibility

- Great Documentation

- Lots of plugins

----

## How does it work?

- CSS: If you are this element, you should _look_ like this.
- jQuery: If you are this element, you should _behave_ like this.

----

## Example

```html
<p>This text is about to be red</p>
```
```javascript
$('p').addClass('red');
```
```html
<p class="red">This text is about to be red</p>
```

----

## Example

```html
<p style="display: none">Hello!</p>
```
```javascript
$('p').fadeIn();
```
```html
<p>Hello!</p>
```

---

# Topics

- **What is jQuery?**
- **Selecting Elements**
- Handling Events
- DOM Manipulation
- Effects
- Chaining
- AJAX
- Project: Astro Weight Calculator

----

## Selecting Elements

- Basic Selectors
- Descendant Selector
- Child Selector
- Sibling Selector
- Selection Filters
- Attribute Filters
- Form Filters

----

### Basic Selectors

```javascript
$('p');         // Element selectors
$('#page');     // ID selectors
$('.btn');      // Class selectors
```

----

### Descendant Selectors

> Used when you want to select ancestors of a given element

```javascript
$('div#ancestor div.descendant');
```

----

### Descendant Selectors

<iframe src="https://codepen.io/pen?template=XgmGeQ?" width="1280" height="540" />

----

### Child Selector

> Used when you want to select children of an element

```javascript
$('ul > li');
```

----

### Child Selector

<iframe src="https://codepen.io/pen?template=XgmGeQ?editors=1010" width="1280" height="540" />

----

### Sibling Selector

> Used when you want to select the next sibling of an element

```javascript
$('li#foo + li#bar');
```

----

### Sibling Selector

<iframe src="https://codepen.io/pen?template=XgmGeQ&editors=1010" width="1280" height="540" />

----

### Selection Filters

```javascript
$('li:first')          // Select the first element in a jQuery set
$('li:last')           // Select the last element in a jQuery set
$('li:even')           // Select every even element in a jQuery set
$('li:odd')            // Select every odd element in a jQuery set
$('li:eq(n)')          // Select the nth element in a jQuery set
$('li:gt(n)')          // Select elements indexed greater than n
$('li:lt(n)')          // Select elements indexed lower than n
$('ul > li:nth-child(n)');
$('ul > li:first-child');
$('ul > li:last-child');
```

----

### Selection Filters

<iframe src="https://codepen.io/pen?template=xrwezr&editors=1010" width="1280" height="540" />

----

### Attribute Filters

> Used to select elements in the DOM based on their attributes. (Usually to grab inputs by their name)

```javascript
$('input[name=email]');         // Get inputs where name == email
$('input[name!=password]');     // Get inputs where name != email
$('input[name^=e]');            // Get inputs where name begins with e
$('input[name$=l]');            // Get inputs where name ends with l
$('input[name*=mail]');         // Get inputs where name contains mail
```

----

### Attribute Filters

<iframe src="https://codepen.io/pen?template=awvMgv&editors=1010" height="540" width="1280" />

----

### Form Filters

> Used to select input elements based on their type

```javascript
$('input:text')         // Select text elements
$('input:password')     // Select password elements
$('input:checkbox')     // Select checkbox elements
```

----

### Form Filters

<iframe src="https://codepen.io/pen?template=awvMgv&editors=1010" height="540" width="1280" />

----

### Exercises (30 minutes)

Complete all exercises beginning with **Selecting Elements**.

https://rebrand.ly/web101

---

# Topics

- **What is jQuery?**
- **Selecting Elements**
- **Handling Events**
- DOM Manipulation
- Effects
- Chaining
- AJAX
- Project: Astro Weight Calculator

----

## Handling Events

- What is an event?
- Event examples

----

## What is an event?

- Every HTML element is capable of emitting events.

- All elements are capable of emitting the `click` event.

- You can use jQuery to run a function when a event is emitted for a specific event.

----

## Event examples

- Click
- Change
- Focus
- Blur
- Keydown
- Ready
- Load

----

## Event examples

<iframe src="https://codepen.io/pen?template=XgmGeQ&editors=1010" width="1280" height="540" />


----

### Exercises (15 minutes)

Complete all exercises beginning with **Events**.

https://rebrand.ly/web101

---


# Topics

- **What is jQuery?**
- **Selecting Elements**
- **Handling Events**
- **DOM Manipulation**
- Effects
- Chaining
- AJAX
- Project: Astro Weight Calculator

----

## DOM Manipulation

- Creating Elements
- Reading Elements
- Updating Elements
- Deleting Elements

----

### Creating Elements

```html
<ul id="todo-list"></ul>
```
```javascript
// Create a list item element
var $newMovie = $('<li>The Dark Knight</li>');

// Add the list item to the end of the list
$('#todo-list').append($newMovie);

// Add another list item to the beginning of the list
$('#todo-list').prepend('<li>Dr Dolittle</li>');
```
```html
<ul id="todo-list">
    <li>Dr Dolittle</li>
    <li>The Dark Knight</li>
</ul>
```

----

### Reading Elements

```html
<input type="text" name="firstName" />
<input type="text" name="lastName" />
<p>42</p>
```
```javascript
var firstName = $('input[name=firstName]').val();
var lastName = $('input[name=lastName]').val();
var mol = $('p').text();

alert(`${firstName} ${lastName}, the meaning of life is ${mol}`);
```

----

### Updating Elements

```html
<textarea id="code-editor" placeholder="Enter your HTML" />
<button id="run-code">Run Code</button>
<div id="output"></div>
```
```javascript
$('#run-code').on('click', function() {
    var html = $('#code-editor').val();

    $('#output').html(html);
});
```

----

### Deleting Elements

```html
<ul>
    <li>Shawshank Redemption</li>
    <li>Man of Steel (2013)</li>
    <li>The Dark Knight</li>
</ul>
```
```javascript
$('ul > li:eq(2)').remove(); // because it's an awful movie.
```

----

### Exercises (15 minutes)

Complete all exercises beginning with **DOM**.

https://rebrand.ly/web101

---

# Topics

- **What is jQuery?**
- **Selecting Elements**
- **Handling Events**
- **DOM Manipulation**
- **Effects**
- Chaining
- AJAX
- Project: Astro Weight Calculator

----

## Effects

- Basic Effects
- Fading
- Sliding

----

## Basic Effects

- hide
- show
- toggle

----

## Basic Effects

<iframe src="https://codepen.io/pen?template=XgmGeQ&editors=1010" width="1280" height="540" />

----

## Fading

- fadeIn
- fadeOut
- fadeToggle

----

## Fading

<iframe src="https://codepen.io/pen?template=XgmGeQ&editors=1010" width="1280" height="540" />

----

## Sliding

- slideIn
- slideOut
- slideToggle
- delay

----

## Sliding

<iframe src="https://codepen.io/pen?template=XgmGeQ&editors=1010" width="1280" height="540" />

----

### Exercises (15 minutes)

Complete all exercises beginning with **Events**.

https://rebrand.ly/web101

---

# Topics

- **What is jQuery?**
- **Selecting Elements**
- **Handling Events**
- **DOM Manipulation**
- **Effects**
- **Chaining**
- AJAX
- Project: Astro Weight Calculator

----

## Chaining

---

# Topics

- **What is jQuery?**
- **Selecting Elements**
- **Handling Events**
- **DOM Manipulation**
- **Effects**
- **Chaining**
- **AJAX**
- Project: Astro Weight Calculator

----

## AJAX

---

# Topics

- **What is jQuery?**
- **Selecting Elements**
- **Handling Events**
- **Chaining**
- **DOM Manipulation**
- **Effects**
- **AJAX**
- **Project: Astro Weight Calculator**

----

## Project: Astro Weight Calculator

---
