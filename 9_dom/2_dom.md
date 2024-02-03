# Understanding the DOM Tree and Nodes
The DOM is often referred to as the `DOM tree`, and consists of a tree of objects called `nodes`. In the [Introduction to the DOM](./1_dom.md), we went over what the Document Object Model (DOM) is, how to access the document object and modify its properties with the console, and the difference between HTML source code and the DOM.

In this tutorial, we will review HTML terminology, which is essential to working with JavaScript and the DOM, and we will learn about the DOM tree, what nodes are, and how to identify the most common node types. Finally, we will move beyond the console and create a JavaScript program to interactively modify the DOM.

# HTML Terminology
Understanding HTML and JavaScript terminology is essential to understanding how to work with the DOM. Let’s briefly review some HTML terminology.

To begin, let’s take a look at this HTML element.

```html
<a href="index.html">Home</a>
```

Here we have an anchor element, which is a link to `index.html`.
- `a` is the **tag**
- `href` is the **attribute**
- `index.html` is the **attribute value**
- `Home` is the **text**.

Everything between the opening and closing tag combined make the entire HTML element.

We’ll be working with the index.html:
```html
<!DOCTYPE html>
<html lang="en">

  <head>
    <title>Learning the DOM</title>
  </head>

  <body>
    <h1>Document Object Model</h1>
  </body>

</html>
```
The simplest way to access an element with JavaScript is by the `id` attribute. Let’s add the link we have above into our `index.html` file with an i`d of `nav`.

```html index.html
...
<body>
  <h1>Document Object Model</h1>
  <a id="nav" href="index.html">Home</a>
</body>
...
```
Load or reload the page in your browser window and look at the DOM to ensure that the code has been updated.

We’re going to use the `getElementById()` method to access the entire element. In the console, type the following:

```js
document.getElementById('nav');
```
Output:

```js
<a id="nav" href="index.html">Home</a>
```
We have retrieved the entire element using `getElementById()`. Now, instead of typing that object and method every time we want to access the `nav` link, we can place the element into a variable to work with it more easily.

```js
let navLink = document.getElementById('nav');
```
The `navLink` variable contains our anchor element. From here, we can easily modify attributes and values. For example, we can change where the link goes by changing the `href` attribute:

```js
navLink.href = 'https://www.wikipedia.org';
```

We can also change the text content by reassigning the `textContent` property:
```js
navLink.textContent = 'Navigate to Wikipedia';
```