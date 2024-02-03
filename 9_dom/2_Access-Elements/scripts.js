// 1. Accessing Elements by ID
// Accessing an element by ID is an effective way to get an element quickly in the DOM.
// However, it has drawbacks: an ID must always be unique to the page, 
// and therefore you will only ever be able to access a single element at a time with the getElementById() method.
// If you wanted to add a function to many elements throughout the page,
// your code would quickly become repetitious.

const demoId = document.getElementById('demo');
console.log(demoId);
demoId.style.border = '10px solid purple'


// 2. Accessing Elements by Class
// The class attribute is used to access one or more specific elements in the DOM.
// You can get all the elements with a given class name with the getElementsByClassName() method.

const demoClass = document.getElementsByClassName('demo');

// demoClass.style.border = '10px solid orange'
// Output
// Uncaught TypeError: Cannot set property 'border' of undefined
// The reason this doesn’t work is because instead of just getting one element,
// you have an array-like object of elements.

console.log(demoClass); 
// Output
// (2) [div.demo, div.demo]

// JavaScript arrays must be accessed with an index number.
// You can change the first element of this array by using an index of 0.
// demoClass[0].style.border = '10px solid orange';

// Generally when accessing elements by class,
// we want to apply a change to all the elements in the document with that particular class, not just one.
// You can do this by creating a for loop,
// and looping through every item in the array.
for (i = 0; i < demoClass.length; i++) {
    demoClass[i].style.border = '10px solid orange';
}
// You have now selected every element on the page that has a demo class,
// and changed the border property to orange.

// 3. Accessing Elements by Tag
// A less specific way to access multiple elements on the page would be by its HTML tag name.
// You access an element by tag with the getElementsByTagName() method.

// Just like accessing an element by its class, getElementsByTagName() will return an array-like object of elements,
// and you can modify every tag in the document with a for loop.
const demoTag = document.getElementsByTagName('article');
// The loop changed the border property of all article elements to blue.
for (i = 0; i < demoTag.length; i++) {
    demoTag[i].style.border = '10px solid blue';
}

// 4. Query Selectors | Selector (single) = querySelector() | Selector (all) = querySelectorAll()
// To access a single element, you can use the querySelector() method.
// In our HTML file, we have a demo-query element
const demoQuery = document.querySelector('#demo-query');
demoQuery.style.border = '10px solid pink'

// In the case of a selector with multiple elements, such as a class or a tag, querySelector() will return the first element that matches the query.
// You can use the querySelectorAll() method to collect all the elements that match a specific query.
// The selector for a class attribute is a period or full stop (.), so you can access the class with '.<class_name>'.
const demoQueryAll = document.querySelectorAll('.demo-query-all');

// Using the forEach() method, you can apply the color green to the border property of all matching elements.
demoQueryAll.forEach(query => {
    query.style.border = '10px solid green';
});

// With querySelector(), comma-separated values function as an OR operator. For example, querySelector('div, article') will match div or article, whichever appears first in the document.
// With querySelectorAll(), comma-separated values function as an AND operator, and querySelectorAll('div, article') will match all div and article values in the document.

// Using the query selector methods is extremely powerful,
// as you can access any element or group of elements in the DOM the same way you would in a CSS file.
// For a complete list of selectors, review CSS Selectors on the Mozilla Developer Network.