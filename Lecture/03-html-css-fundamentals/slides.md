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

<img src="http://www.bobbyberberyan.com/wp-content/uploads/2012/03/HTML5CSS3Logos.svg" height="350" style="border: none; box-shadow: none" />

### WEB-100 - HTML and CSS

---

# Topics

- **What is HTML?**
- HTML: Elements
- HTML: Attributes
- What is CSS?
- CSS: Rules & Selectors
- CSS: Specificity
- CSS: Properties
- CSS: Positioning
- CSS: Filters

---

## What is HTML?

> **H**yper**T**ext **M**arkup **L**anguage

- HTML is the content of your website

- A website is HTML files delivered over the internet.

---

## A typical website

```
/                       <- Project root
    |_ img              <- Image Folder
        |_ logo.jpg     
    |_ css              <- CSS Folder
        |_ styles.css
    |_ js               <- JavaScript Folder
        |_ app.js
    |_ index.html       <- Home page
    |_ about.html       <- About page
    |_ contact.html     <- Contact page
```

---

## `index.html`

```html
<!doctype html>
<html>
    <head>
        <title>Origin Code Academy</title>
    </head>
    <body>
        <nav>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </nav>
        <header class="jumbotron">
            <h1>Welcome to my site!</h1>
        </header>
    </body>
</html>
```

---

# Topics

- **What is HTML?**
- **HTML: Elements**
- HTML: Attributes
- What is CSS?
- CSS: Rules & Selectors
- CSS: Specificity
- CSS: Properties
- CSS: Positioning
- CSS: Filters

----

## HTML: Elements

- Elements
- Meta Tags
- Content Tags
- Nested Elements
- Semantic Markup

----

### HTML Elements

```html
<div>
    <h1>Hello</h1>
</div>
```

- HTML Elements are used to show content on a web page.

- An HTML Element consists of an **opening tag** and a **closing tag**, and can contain text or other HTML Elements.

----

### Meta Tags

- Meta tags are invisible, typically used for communicating information to the browser.

----

### Meta Tags

- `<html>`: The browser uses this to recognize an HTML document is being loaded

- `<head>`: Used to store metadata about the website. Nothing is displayed.

- `<body>`: Used to store content to be displayed.

----

### Meta Elements

```html
<html>
    <head>
        <!-- The browser will not display anything in head -->
    </head>
    <body>
        <!-- The browser will attempt to display everything in body -->
    </body>
</html>
```

----

### Content Tags

- There are over 100 different HTML content Tags. 

- Like the English language, you don't need to memorize every single tag.

- Let's take a tour around 7 of the most common content tags.

----

### `<h1>, <h2>, .. <h6>`

```
<h1>Largest title</h1>
<h6>Smallest title</h6>
```

- Heading elements are used to create titles ranging anywhere within 6 levels.

- `<h1>` is the largest/most important looking title.
- `<h6>` is the smallest/least important looking title.

----

### `<p>`

```
<p>
    Paragraph one
</p>
<p>
    Paragraph two
</p>
```

- `<p>` elements are for containing paragraphs of text.

----

### `<ul>` and `<li>`

```html
<ul>
    <li>ul is used to create lists where the order is not significant.</li>
    <li>li is used to define a list item.</li>
</ul>
```

- `<ul>` is used to contain list items where the order is not significant.
- `<li>` is used to define a list item

----

### `<ol>`

```
<ol>
    <li>Toast the bread</li>
    <li>Butter the toast</li>
    <li>Eat the toast</li>
    <li>...</li>
    <li>Profit!</li>
</ol>
```

- Ordered lists are used to create lists where this an implied order, like numbered lists (e.g. rankings, or steps in a recipe)

- By default, numbers are used in place of bullet points.

----

### `<div>`

```html
<div>
    <img src="title.jpg" />
    <h1>Lorem ipsum dolor sit amet..</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a molestie turpis.</p>
</div>
```

- Divider elements are invisible containers that give you a way to group other related elements together. (Example, articles, twitter posts)

----

### `<span>`

```html
<p>Hello, my name is <span>Cameron</span></p>
```

- Span elements are like `<div>` in that they are also invisible containers, but for text instead of other elements. (Useful when we start in jQuery/Angular).

----

### And 100 more..

- The [MDN HTML Element Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) is a great reference for all available tags.

----

### Exercises (20 minutes)

https://rebrand.ly/web100

- HTML: Elements       
- HTML: Content Tags   
- HTML: Nested Elements
- HTML: Semantic Markup
- HTML: More Content Tags      

---

# Topics

- **What is HTML?**
- **HTML: Elements**
- **HTML: Attributes**
- What is CSS?
- CSS: Rules & Selectors
- CSS: Specificity
- CSS: Properties
- CSS: Positioning
- CSS: Filters

----

### HTML: Attributes

- Anatomy of an HTML Attribute
- The `id` attribute
- The `href` attribute
- The `class` attribute

----

### Anatomy of an HTML Attribute

- An attribute is "extra" information about an HTML element.

- An attribute has a **key** and a **value**.

```
<p id="your-name"></p>
   ^    ^  
   |    |
   key  value
   ^________^
       |
    attribute
```

----

### HTML Attributes: `id`

- The `id` attribute is a one-use-only label for an HTML element.

- You cannot re-use an id value.

```html
<div id="site-logo">
    <img src="logo.jpg" />
</div>

<div id="site-logo"> <!-- re-use! -->
    ...
</div>
```

----

### HTML Attributes: `class`

- The `class` attribute is a multi-use label for an HTML element.

- You can re-use a class value.

```html
<div class="menu">
    <h1 class="menu-title">Drinks</h1>
    <ul class="menu-list">
        <li class="menu-item">Water</li>
        <li class="menu-item">Lemonade</li> <!-- reuse is fine -->
        <li class="menu-item">Soda</li> <!-- reuse is fine -->
    </ul>
</div>
```

----

### Exercises (20 minutes)

https://rebrand.ly/web100

- HTML: Void Tags
- HTML: Grouping
- HTML: Classes
- HTML: IDs
- HTML: Complete

---

# Topics

- **What is HTML?**
- **HTML: Elements**
- **HTML: Attributes**
- **What is CSS**?
- CSS: Rules & Selectors
- CSS: Specificity
- CSS: Properties
- CSS: Positioning
- CSS: Filters

----

## What is CSS?

<img src="https://i.imgur.com/Q3cUg29.gif" height="300" />

> **C**ascading **S**tyle **S**heets

----

## CSS Is

- A method of changing how our elements look

- A file that is included in your web project

- "If you are this element, obey these styling rules"

----

## styles.css

```css
p {
    color: red;
}

#site-logo {
    background-color: red;
}

.menu {
    width: 640px;
    padding: 8px;
}
```

----

## Let's jump in!

---

# Topics

- **What is HTML?**
- **HTML: Elements**
- **HTML: Attributes**
- **What is CSS**?
- **CSS: Rules & Selectors**
- CSS: Specificity
- CSS: Properties
- CSS: Positioning
- CSS: Filters

----

### CSS: Rules & Selectors

> If you are this kind of content, you need to look like this.

- In CSS, we call these kinds of statements rules.

----

### CSS: Rules & Selectors

<img src="http://www.littlewebhut.com/images/css_declaration.gif" height="200" />

----

### CSS: Rules & Selectors

```css
p {
    color: blue;
    background-color: gray;
}
```

1. Select all `<p>` elements
2. Apply a rule which sets the `color` property to `blue`, and the `background-color` to `gray`.

----

### CSS: Rules & Selectors

- Element Selectors
- ID Selector
- Class Selectors

----

### Element Selectors

> Selects all elements matching the specified tag

```css
p {
    color: blue;
}
```

```html
<p>I am blue</p>
<div>
    <p>I am also blue</p>
</div>
```

----

### ID Selector

> Selects all elements where the the id attribute matches the selector

```css
#call-to-action {
    width: 100%;
    color: white;
}
```

```html
<section id="cta">
    <img src="logo.jpg" />
    <h1>Acme Inc</h1>
    <p>We sell classic Acme products</p>
</section>
```

----

### Class Selectors

> Selects all elements where the class attribute matches the selector

```css
.text-danger { color: red; }
.text-success { color: green; }
```

```html
<div>
    <p class="text-danger">Oops! Something went wrong.</p>
</div>
<div>
    <p class="text-success">Your driver is on the way!</p>
    <small class="text-success">Your bill is in your email</small>
</div>
```

----

### Summary

- Element Selectors (`p`, `div`, `h1`)
- ID Selectors (`#element-id`)
- Class Selectors (`.class-name`)

---

# Topics

- **What is HTML?**
- **HTML: Elements**
- **HTML: Attributes**
- **What is CSS**?
- **CSS: Rules & Selectors**
- **CSS: Specificity**
- CSS: Properties
- CSS: Positioning
- CSS: Filters

----

### CSS: Specifity

- Specificity is when browsers decide which CSS rule gets priority in case of a conflict.

```css
p {
    color: red;
}
p {
    color: blue;
}
```
```html
<p>What color is this element?</p>
```

----

### CSS: Specificity

- The best way to avoid CSS specificity conflicts is to be as specific as possible!

----

### Specificity: Element vs ID

<iframe src="https://codepen.io/pen?editors=1100" width="1280" height="540" />

----

### Specificity: Nested Elements

<iframe src="https://codepen.io/pen?editors=1100" width="1280" height="540" />

----

### Specificity: Filter Selectors

<iframe src="https://codepen.io/pen?editors=1100" width="1280" height="540" />

----

### Exercises (20 minutes)

https://rebrand.ly/web100

- CSS: Rules
- CSS: Specificity
- CSS: Specificity II
- CSS: Class Selector
- CSS: Id Selector

---

# Topics

- **What is HTML?**
- **HTML: Elements**
- **HTML: Attributes**
- **What is CSS**?
- **CSS: Rules & Selectors**
- **CSS: Specificity**
- **CSS: Properties**
- CSS: Positioning
- CSS: Filters

----

### CSS: Properties

- CSS has over 300 properties that you can modify for an element.

- Some of these properties are really new and work in older browsers.

- Similar to HTML, learn the essential ones, then look up the rest online.

----

### CSS: Properties

```text
color:              Sets the font color
font-weight:        Sets the font line width (Mostly used for bold)
font-style:         Sets special font styles (Mostly used for italic)
text-align:         Aligns text in a specific direction
text-indent:        How much to indent the first line of a paragraph.
font-size:          Sets the font size
background-color:   Sets the background color of an element
width:              Forces a width on the element
height:             Forces a height on the element
```

[More on W3Schools](https://www.w3schools.com/cssref/)

----

### Exercises (20 minutes)

https://rebrand.ly/web100

- CSS Property: font-weight
- CSS Property: font-style
- CSS Property: text-align
- CSS Property: text-indent
- CSS Property: font-size
- CSS: Measurements

---

# Topics

- **What is HTML?**
- **HTML: Elements**
- **HTML: Attributes**
- **What is CSS**?
- **CSS: Rules & Selectors**
- **CSS: Specificity**
- **CSS: Properties**
- **CSS: Positioning**
- CSS: Filters

----

### CSS: Positioning

- Height and Width
- Borders
- Padding + Margin
- Positioning

----

### Height and Width

- There are six main properties used when setting height/width.

```
height:         Explicitly sets the height of an element
width:          Explicitly sets the width of an element
min-height:     Sets the minimum height of an element
min-width:      Same, for width
max-height:     Sets the maximum height of an element
max-width:      Same, for width
```

----

### Height and Width

<iframe src="https://codepen.io/pen?editors=1100" width="1280" height="540" />

----

### Borders

- You can create and modify borders around your elements using these properties.

```
border-width:       Sets the border thickness
border-color:       Sets the border color
border-style:       Changes the border pattern
                        solid|dotted|dashed
```

----

### Borders

<iframe src="https://codepen.io/pen?editors=1100" width="1280" height="540" />

----

### Padding + Margin

- Padding is creating space inside of the selected element.
- Margin is creating space outside of the selected element.

----

### Padding + Margin

<iframe src="https://codepen.io/pen?editors=1100" width="1280" height="540" />

----

### Positioning

> You can use the `position` property to manipulate where the elements end up on the screen.

----

### Positioning

- `position: static` - Default value for all elements
- `position: absolute` - Position the element relative to the browser window.
- `position: fixed` - Same as absolute, except will not scroll with the rest of the content. (An ad agencies best friend)
- `position: relative` - Position element relative to it's parent.

----

### Positioning

<iframe src="https://codepen.io/pen?editors=1100" width="1280" height="540" />

----

### Exercises (15 minutes)

- CSS Box: border
- CSS Box: width & height
- CSS Box: background-color
- CSS Box: content-box vs border-box
- CSS Position: absolute
- CSS Position: fixed
- CSS Position: relative
- CSS Shorthand: padding
- CSS Shorthand: border

---

# Topics

- **What is HTML?**
- **HTML: Elements**
- **HTML: Attributes**
- **What is CSS**?
- **CSS: Rules & Selectors**
- **CSS: Specificity**
- **CSS: Properties**
- **CSS: Positioning**
- **CSS: Filters**

----

### CSS: Filters

- `:hover`
- `:first-child`
- `:last-child`
- `:nth-child`

----

### CSS: `:hover`

```css
li {
    background-color: blue;
}
li:hover {
    background-color: red;
}
```

```html
<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>
```

----

### CSS: `:hover`

<iframe src="https://codepen.io/pen?editor=1100" width="1280" height="540" />

----

### CSS: `:first-child`

```css
ul.menu li.menu-item:first-child { 
    background-color: blue; 
}
```

```html
<ul class="menu">
    <li class="menu-item">Water</li>
    <li class="menu-item">Iced Tea</li>
    <li class="menu-item">Coffee</li>
</ul>
```

----

### CSS: `:last-child`

```css
ul.menu li.menu-item:last-child { 
    background-color: brown;
}
```

```html
<ul class="menu">
    <li class="menu-item">Water</li>
    <li class="menu-item">Iced Tea</li>
    <li class="menu-item">Coffee</li>
</ul>
```

----

### CSS: `:nth-child`

```css
ul.menu li.menu-item:nth-child(2) { 
    background-color: blue; 
}
```

```html
<ul class="menu">
    <li class="menu-item">Water</li>
    <li class="menu-item">Iced Tea</li>
    <li class="menu-item">Coffee</li>
</ul>
```

----

### CSS: `:nth-child`

<iframe src="https://codepen.io/pen?editor=1100" width="1280" height="540" />

----

### Project: Chessboard

https://rebrand.ly/html-challenges