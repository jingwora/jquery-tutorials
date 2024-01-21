# jquery-tutorials

## Overall

What is jQuery

jQuery is a fast, small, and feature-rich JavaScript library.

The primary features of jQuery include:

- DOM Manipulation: Easier to access and manipulate HTML elements.
- Event Handling: Simplified way to handle various user-driven events.
- AJAX: Streamlines the process of asynchronous requests with less code.
- Animations and Effects: Predefined methods for creating animations and handling visual effects.
- Utilities: Various utility functions for common tasks in JavaScript.
- Extensibility: Ability to create custom plugins extending jQuery's features.

## Add jQuery

1. Download jQuery locally
   https://jquery.com/

- Download the compressed, production
- Download the uncompressed, development
- Add below script to html

```
<script src="jQuery.js"></script>
```

2. Use CDN link

- Add below script to html

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
```

## Syntax of jQuery

`$(selector).action()`

| Syntax       | Meaning                | Sample    |
| ------------ | ---------------------- | --------- |
| `$`          | Sign for access jQuery | `$`       |
| `(selector)` | Define the element     | `("p")`   |
| `.action()`  | Action                 | `.hide()` |

## Best practise

- Running functions after "document ready" ensures that the web page has fully loaded, preventing issues with manipulating elements before they exist in the DOM.

```
$(document).read(function() {

})
```

or

```
$(function() {

})
```

## Selectors

Selectors are powerful expressions used to identify and target specific HTML elements within a web page, enabling developers to manipulate, style, or interact with those elements using jQuery.

| Selector               | Description                                                  | Example Usage                       |
| ---------------------- | ------------------------------------------------------------ | ----------------------------------- |
| `*`                    | Selects all elements                                         | `$("*")`                            |
| `#id`                  | Selects a single element with the specified id               | `$("#myId")`                        |
| `.class`               | Selects all elements with the specified class                | `$(".myClass")`                     |
| `element`              | Selects all elements of the specified type                   | `$("p")`                            |
| `selector1, selector2` | Selects all elements that match either selector              | `$("div, span")`                    |
| `parent > child`       | Selects all direct child elements of the parent              | `$("ul > li")`                      |
| `ancestor descendant`  | Selects all descendants of the ancestor                      | `$("div p")`                        |
| `prev + next`          | Selects the next element directly following the prev element | `$("div + p")`                      |
| `prev ~ siblings`      | Selects all siblings after the prev element                  | `$("h2 ~ p")`                       |
| `:first`               | Selects the first element of a specific type                 | `$("li:first")`                     |
| `:last`                | Selects the last element of a specific type                  | `$("li:last")`                      |
| `:not(selector)`       | Selects all elements that do not match the selector          | `$(":not('.myClass')")`             |
| `:contains(text)`      | Selects all elements that contain the specified text         | `$(":contains('Hello')")`           |
| `[attribute]`          | Selects all elements with a specific attribute               | `$("[href]")`                       |
| `[attribute=value]`    | Selects all elements with a specific attribute value         | `$("[href='https://example.com']")` |

### HTML elements

HTML elements are the fundamental building blocks of a web page, representing various components such as text, images, links, forms, and more, which are structured using tags and attributes to define their content and behavior within a web document.

| Selector                           | Description                                     | Example Usage              |
| ---------------------------------- | ----------------------------------------------- | -------------------------- |
| `a`                                | Selects all `<a>` (anchor) elements             | `$("a")`                   |
| `div`                              | Selects all `<div>` elements                    | `$("div")`                 |
| `p`                                | Selects all `<p>` (paragraph) elements          | `$("p")`                   |
| `span`                             | Selects all `<span>` elements                   | `$("span")`                |
| `ul`                               | Selects all `<ul>` (unordered list) elements    | `$("ul")`                  |
| `ol`                               | Selects all `<ol>` (ordered list) elements      | `$("ol")`                  |
| `li`                               | Selects all `<li>` (list item) elements         | `$("li")`                  |
| `table`                            | Selects all `<table>` elements                  | `$("table")`               |
| `tr`                               | Selects all `<tr>` (table row) elements         | `$("tr")`                  |
| `td`                               | Selects all `<td>` (table cell) elements        | `$("td")`                  |
| `th`                               | Selects all `<th>` (table header) elements      | `$("th")`                  |
| `input`                            | Selects all `<input>` elements                  | `$("input")`               |
| `button`                           | Selects all `<button>` elements                 | `$("button")`              |
| `select`                           | Selects all `<select>` (dropdown) elements      | `$("select")`              |
| `textarea`                         | Selects all `<textarea>` elements               | `$("textarea")`            |
| `form`                             | Selects all `<form>` elements                   | `$("form")`                |
| `img`                              | Selects all `<img>` (image) elements            | `$("img")`                 |
| `h1`, `h2`, `h3`, `h4`, `h5`, `h6` | Selects heading elements of the specified level | `$("h1")`, `$("h2")`, etc. |
| `header`                           | Selects all `<header>` elements                 | `$("header")`              |
| `footer`                           | Selects all `<footer>` elements                 | `$("footer")`              |
| `section`                          | Selects all `<section>` elements                | `$("section")`             |
| `article`                          | Selects all `<article>` elements                | `$("article")`             |
| `nav`                              | Selects all `<nav>` elements                    | `$("nav")`                 |
| `iframe`                           | Selects all `<iframe>` elements                 | `$("iframe")`              |

## Actions

Actions are functions and methods provided by the jQuery library that allow developers to interact with HTML elements, manipulate the DOM, handle events, and perform various operations to create dynamic and responsive web pages.

| Category               | Description                                    | Example Actions                         |
| ---------------------- | ---------------------------------------------- | --------------------------------------- |
| DOM Manipulation       | Modify the structure of the DOM                | `.append()`, `.remove()`, `.html()`     |
| CSS Manipulation       | Change the style of elements                   | `.css()`, `.addClass()`, `.hide()`      |
| Event Handling         | Manage user interactions                       | `.click()`, `.on()`, `.hover()`         |
| Effects and Animations | Add dynamic effects and animations to elements | `.fadeIn()`, `.slideUp()`, `.animate()` |
| AJAX                   | Perform asynchronous HTTP requests             | `$.ajax()`, `$.get()`, `$.post()`       |
| Traversal              | Navigate through the DOM elements              | `.find()`, `.closest()`, `.children()`  |
| Attribute Manipulation | Get or set attributes of elements              | `.attr()`, `.removeAttr()`, `.val()`    |
| Form Methods           | Handle form elements and their data            | `.serialize()`, `.submit()`             |
| Utilities              | Miscellaneous helper functions                 | `$.each()`, `$.trim()`, `$.extend()`    |
| Filtering              | Reduce or filter the set of matched elements   | `.filter()`, `.not()`, `.eq()`          |

### DOM Manipulation

DOM (Document Object Model) manipulation in web development involves dynamically interacting with and modifying the structure, content, and behavior of web page elements using JavaScript or jQuery, enabling dynamic and interactive web experiences.

| Action           | Description                                               | Example Usage                                     |
| ---------------- | --------------------------------------------------------- | ------------------------------------------------- |
| `.append()`      | Inserts content at the end of the selected elements       | `$(parent).append(child)`                         |
| `.prepend()`     | Inserts content at the beginning of the selected elements | `$(parent).prepend(child)`                        |
| `.after()`       | Inserts content after the selected elements               | `$(element).after(content)`                       |
| `.before()`      | Inserts content before the selected elements              | `$(element).before(content)`                      |
| `.html()`        | Gets or sets the HTML content of the selected element     | `$(element).html()` or `$(element).html(newHtml)` |
| `.text()`        | Gets or sets the text content of the selected elements    | `$(element).text()` or `$(element).text(newText)` |
| `.remove()`      | Removes the selected elements from the DOM                | `$(element).remove()`                             |
| `.empty()`       | Removes all child nodes of the selected elements          | `$(element).empty()`                              |
| `.replaceWith()` | Replaces the selected elements with new content           | `$(element).replaceWith(newContent)`              |
| `.clone()`       | Creates a deep copy of the selected elements              | `$(element).clone()`                              |
| `.detach()`      | Removes the selected elements but keeps data and events   | `$(element).detach()`                             |
| `.wrap()`        | Wraps the selected elements with new structure            | `$(element).wrap(wrapper)`                        |
| `.unwrap()`      | Removes the parent elements of the selected elements      | `$(element).unwrap()`                             |

### CSS Manipulation

CSS manipulation actions in jQuery allow you to dynamically change the style and appearance of HTML elements on a web page, enhancing their visual presentation and interactivity.

| Category           | Actions                                                                                                  | Description                                      | Example Usage                                                 |
| ------------------ | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------- |
| Basic Styling      | `.css()`                                                                                                 | Change CSS properties of elements                | `$("#elementId").css("color", "red");`                        |
| Class Manipulation | `.addClass()`, `.removeClass()`, `.toggleClass()`                                                        | Add, remove, or toggle CSS classes               | `$("#elementId").addClass("newClass");`                       |
| Visibility Control | `.show()`, `.hide()`, `.toggle()`                                                                        | Show, hide, or toggle the visibility of elements | `$("#elementId").hide();`                                     |
| Dimension Control  | `.height()`, `.width()`, `.innerHeight()`, `.innerWidth()`, `.outerHeight()`, `.outerWidth()`            | Get or set the dimensions of elements            | `$("#elementId").height(100);`                                |
| Positioning        | `.offset()`, `.position()`, `.scrollTop()`, `.scrollLeft()`                                              | Get or set the position of elements              | `$("#elementId").offset({top: 10, left: 30});`                |
| Animation          | `.slideDown()`, `.slideUp()`, `.slideToggle()`, `.fadeIn()`, `.fadeOut()`, `.fadeToggle()`, `.animate()` | Apply animations to elements                     | `$("#elementId").fadeIn();`                                   |
| Scrolling          | `.scrollTop()`, `.scrollLeft()`                                                                          | Control the scroll position of elements          | `$("#elementId").scrollTop(100);`                             |
| Advanced Styling   | `.css()` with multiple properties                                                                        | Apply multiple style changes at once             | `$("#elementId").css({"color": "red", "font-size": "14px"});` |

| Category     | Example Usage                                              | Description                                  |
| ------------ | ---------------------------------------------------------- | -------------------------------------------- |
| Font Styling | `$("#elementId").css("color", "red");`                     | Change the font color to red.                |
| Font Styling | `$("#elementId").css("font-size", "16px");`                | Set the font size to 16 pixels.              |
| Font Styling | `$("#elementId").css("font-weight", "bold");`              | Make the font weight bold.                   |
| Font Styling | `$("#elementId").css("font-style", "italic");`             | Change the font style to italic.             |
| Font Styling | `$("#elementId").css("text-decoration", "underline");`     | Underline the text.                          |
| Font Styling | `$("#elementId").css("text-align", "center");`             | Align the text to the center.                |
| Font Styling | `$("#elementId").css("line-height", "1.5");`               | Set the line height.                         |
| Font Styling | `$("#elementId").css("letter-spacing", "2px");`            | Increase the letter spacing.                 |
| Font Styling | `$("#elementId").css("text-transform", "uppercase");`      | Transform the text to uppercase.             |
| Font Styling | `$("#elementId").css("font-family", "Arial, sans-serif");` | Change the font family to Arial, sans-serif. |

Other .css

| Category               | Example Usage                                              | Description                                   |
| ---------------------- | ---------------------------------------------------------- | --------------------------------------------- |
| Color & Background     | `$("#elementId").css("background-color", "blue");`         | Change the background color to blue.          |
| Color & Background     | `$("#elementId").css("border-color", "green");`            | Set the border color to green.                |
| Layout & Position      | `$("#elementId").css("margin-top", "20px");`               | Set the top margin of an element.             |
| Layout & Position      | `$("#elementId").css("padding", "15px");`                  | Set padding for all sides of an element.      |
| Layout & Position      | `$("#elementId").css("position", "absolute");`             | Set the position property to absolute.        |
| Size & Dimension       | `$("#elementId").css("width", "100%");`                    | Set the width of an element to 100%.          |
| Size & Dimension       | `$("#elementId").css("min-height", "50px");`               | Set the minimum height of an element.         |
| Display & Visibility   | `$("#elementId").css("display", "none");`                  | Hide an element (similar to `.hide()`).       |
| Display & Visibility   | `$("#elementId").css("visibility", "hidden");`             | Make an element invisible but keep its space. |
| Border & Outline       | `$("#elementId").css("border-style", "dashed");`           | Set the border style to dashed.               |
| Border & Outline       | `$("#elementId").css("border-width", "5px");`              | Set the border width.                         |
| Border & Outline       | `$("#elementId").css("outline", "2px solid red");`         | Add a solid red outline.                      |
| Box Model              | `$("#elementId").css("box-shadow", "10px 10px 5px #888");` | Add a box shadow.                             |
| Box Model              | `$("#elementId").css("overflow", "hidden");`               | Set the overflow property to hidden.          |
| Opacity & Filters      | `$("#elementId").css("opacity", "0.5");`                   | Set the opacity level.                        |
| Opacity & Filters      | `$("#elementId").css("filter", "blur(5px)");`              | Apply a blur filter.                          |
| Transform              | `$("#elementId").css("transform", "rotate(45deg)");`       | Rotate the element by 45 degrees.             |
| Transition & Animation | `$("#elementId").css("transition", "all 0.5s ease");`      | Set a transition effect.                      |
| Custom Properties      | `$("#elementId").css("--my-variable", "100px");`           | Set the value of a CSS custom property.       |

### Event Handling Actions

These actions allow you to respond to various events such as clicks, mouse movements, key presses, and more, enhancing the interactivity of your web page.

| Action               | Description                                                                    | Example Usage                                                            |
| -------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `.click()`           | Attach a function to run when an element is clicked.                           | `$("#elementId").click(function() {...});`                               |
| `.dblclick()`        | Attach a function to run when an element is double-clicked.                    | `$("#elementId").dblclick(function() {...});`                            |
| `.hover()`           | Attach functions to run when the mouse pointer enters and leaves an element.   | `$("#elementId").hover(function() {...}, function() {...});`             |
| `.mousedown()`       | Attach a function to run when a mouse button is pressed on an element.         | `$("#elementId").mousedown(function() {...});`                           |
| `.mouseup()`         | Attach a function to run when a mouse button is released on an element.        | `$("#elementId").mouseup(function() {...});`                             |
| `.mouseenter()`      | Attach a function to run when the mouse pointer enters an element.             | `$("#elementId").mouseenter(function() {...});`                          |
| `.mouseleave()`      | Attach a function to run when the mouse pointer leaves an element.             | `$("#elementId").mouseleave(function() {...});`                          |
| `.mousemove()`       | Attach a function to run when the mouse pointer moves over an element.         | `$("#elementId").mousemove(function() {...});`                           |
| `.keydown()`         | Attach a function to run when a key is pressed.                                | `$(document).keydown(function(event) {...});`                            |
| `.keyup()`           | Attach a function to run when a key is released.                               | `$(document).keyup(function(event) {...});`                              |
| `.keypress()`        | Attach a function to run when a key is pressed and released.                   | `$(document).keypress(function(event) {...});`                           |
| `.on()`              | Attach one or more event handlers for selected elements.                       | `$("#elementId").on("click", function() {...});`                         |
| `.off()`             | Remove an event handler attached with `.on()`.                                 | `$("#elementId").off("click", function() {...});`                        |
| `.trigger()`         | Trigger a specified event on selected elements.                                | `$("#elementId").trigger("click");`                                      |
| `.preventDefault()`  | Prevent the default action of an event.                                        | `$("#elementId").click(function(event) {event.preventDefault(); ...});`  |
| `.stopPropagation()` | Prevent the event from bubbling up the DOM tree.                               | `$("#elementId").click(function(event) {event.stopPropagation(); ...});` |
| `.focus()`           | Attach a function to run when an element receives focus.                       | `$("#elementId").focus(function() {...});`                               |
| `.blur()`            | Attach a function to run when an element loses focus.                          | `$("#elementId").blur(function() {...});`                                |
| `.change()`          | Attach a function to run when the value of an element changes.                 | `$("#elementId").change(function() {...});`                              |
| `.submit()`          | Attach a function to run when a form is submitted.                             | `$("#formId").submit(function(event) {...});`                            |
| `.resize()`          | Attach a function to run when the window is resized.                           | `$(window).resize(function() {...});`                                    |
| `.scroll()`          | Attach a function to run when an element is scrolled.                          | `$("#elementId").scroll(function() {...});`                              |
| `.unload()`          | Attach a function to run when the user leaves the page.                        | `$(window).unload(function() {...});`                                    |
| `.contextmenu()`     | Attach a function to run when the right mouse button is clicked on an element. | `$("#elementId").contextmenu(function(event) {...});`                    |

### Effects and Animations Actions

These actions provide a wide range of options for adding effects and animations to elements on a web page, enhancing user experience and interactivity.

| Action           | Description                                                       | Example Usage                                         |
| ---------------- | ----------------------------------------------------------------- | ----------------------------------------------------- |
| `.hide()`        | Hide selected elements with a sliding or fading effect.           | `$("#elementId").hide("slow");`                       |
| `.show()`        | Show hidden elements with a sliding or fading effect.             | `$("#elementId").show("fast");`                       |
| `.toggle()`      | Toggle the visibility of elements with an optional effect.        | `$("#elementId").toggle("blind", 1000);`              |
| `.fadeIn()`      | Fade in selected elements with adjustable opacity.                | `$("#elementId").fadeIn("slow");`                     |
| `.fadeOut()`     | Fade out selected elements with adjustable opacity.               | `$("#elementId").fadeOut(2000);`                      |
| `.fadeToggle()`  | Toggle the fading of elements with an optional duration.          | `$("#elementId").fadeToggle("fast");`                 |
| `.slideDown()`   | Slide down hidden elements with optional duration and easing.     | `$("#elementId").slideDown(1000, "linear");`          |
| `.slideUp()`     | Slide up visible elements with optional duration and easing.      | `$("#elementId").slideUp("slow", "swing");`           |
| `.slideToggle()` | Toggle the sliding of elements with optional duration and easing. | `$("#elementId").slideToggle("fast", "easeOutQuad");` |
| `.animate()`     | Animate selected elements with custom CSS properties and options. | `$("#elementId").animate({left: "200px"}, 1000);`     |
| `.stop()`        | Stop the currently-running animations on selected elements.       | `$("#elementId").stop();`                             |
| `.delay()`       | Delay the execution of subsequent items in the queue.             | `$("#elementId").delay(500).fadeIn("slow");`          |
| `.finish()`      | Stop all animations on selected elements and complete them.       | `$("#elementId").finish();`                           |
| `.slideDownUp()` | Toggle sliding down and up in a single call.                      | `$("#elementId").slideDownUp(1000);`                  |
| `.pulsate()`     | Create a pulsating effect on selected elements.                   | `$("#elementId").pulsate({times: 3}, 1500);`          |
| `.shake()`       | Make selected elements shake horizontally.                        | `$("#elementId").shake();`                            |
| `.highlight()`   | Highlight selected elements with a color animation.               | `$("#elementId").highlight("yellow", 1000);`          |
| `.size()`        | Resize elements with optional duration and easing.                | `$("#elementId").size(300, 500, "fast");`             |
| `.uiEffects()`   | Use jQuery UI effects such as "explode," "bounce," and more.      | `$("#elementId").effect("bounce", {times: 3}, 1000);` |

### AJAX actions

These actions provide a powerful way to interact with server-side data and services asynchronously, making your web applications more responsive and dynamic.

Loading data in the background and display it on the webpage, without reloading the whole page.

| Action             | Description                                                                                              | Example Usage                                                                                                                                                  |
| ------------------ | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.ajax()`          | Perform a low-level AJAX request with extensive customization options.                                   | `javascript $.ajax({ url: "data.json", type: "GET", success: function(data) { // Handle data }, error: function(xhr, status, error) { // Handle errors } }); ` |
| `.load()`          | Load HTML content from a URL and insert it into selected elements.                                       | `$("#elementId").load("data.html");`                                                                                                                           |
| `.get()`           | Perform an AJAX GET request and retrieve data.                                                           | `javascript $.get("data.json", function(data) { // Handle data }); `                                                                                           |
| `.post()`          | Perform an AJAX POST request and send data to the server.                                                | `javascript $.post("submit.php", { name: "John", age: 30 }, function(response) { // Handle response }); `                                                      |
| `.getJSON()`       | Retrieve JSON data using an AJAX GET request.                                                            | `javascript $.getJSON("data.json", function(data) { // Handle JSON data }); `                                                                                  |
| `.getScript()`     | Load and execute a JavaScript file dynamically.                                                          | `$.getScript("script.js", function() { // Script loaded and executed });`                                                                                      |
| `.ajaxSetup()`     | Set default values for AJAX requests, affecting all subsequent AJAX calls.                               | `javascript $.ajaxSetup({ timeout: 5000 }); // Set a default timeout `                                                                                         |
| `.ajaxPrefilter()` | Customize AJAX requests before they are sent.                                                            | `javascript $.ajaxPrefilter(function(options, originalOptions, jqXHR) { // Modify options }); `                                                                |
| `.ajaxStart()`     | Register a function to be executed when an AJAX request starts.                                          | `javascript $(document).ajaxStart(function() { // Show loading spinner }); `                                                                                   |
| `.ajaxStop()`      | Register a function to be executed when all AJAX requests are completed.                                 | `javascript $(document).ajaxStop(function() { // Hide loading spinner }); `                                                                                    |
| `.ajaxError()`     | Register a function to be executed when an AJAX request encounters an error.                             | `javascript $(document).ajaxError(function(event, jqXHR, settings, thrownError) { // Handle errors }); `                                                       |
| `.ajaxSuccess()`   | Register a function to be executed when an AJAX request is successful.                                   | `javascript $(document).ajaxSuccess(function(event, xhr, settings) { // Handle success }); `                                                                   |
| `.ajaxComplete()`  | Register a function to be executed when an AJAX request is completed (regardless of success or failure). | `javascript $(document).ajaxComplete(function(event, xhr, settings) { // Handle completion }); `                                                               |
| `.abort()`         | Cancel an ongoing AJAX request.                                                                          | `var xhr = $.ajax({ ... }); xhr.abort();`                                                                                                                      |

### Traversal actions

These traversal actions provide a powerful way to select and manipulate elements within the DOM based on their relationships to other elements, making it easier to work with complex web page structures.

| Action        | Description                                                                              | Example Usage                                                             |
| ------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `.find()`     | Find elements that match a selector within a selected element.                           | `$("#parentElement").find(".childClass");`                                |
| `.children()` | Get the immediate children of selected elements.                                         | `$("#parentElement").children();`                                         |
| `.parent()`   | Get the direct parent element of selected elements.                                      | `$("#childElement").parent();`                                            |
| `.parents()`  | Get all ancestor elements of selected elements.                                          | `$("#childElement").parents();`                                           |
| `.closest()`  | Get the first ancestor that matches a selector, starting from the selected elements.     | `$("#childElement").closest(".ancestorClass");`                           |
| `.next()`     | Get the next sibling element of selected elements.                                       | `$("#element").next();`                                                   |
| `.prev()`     | Get the previous sibling element of selected elements.                                   | `$("#element").prev();`                                                   |
| `.siblings()` | Get all sibling elements of selected elements.                                           | `$("#element").siblings();`                                               |
| `.first()`    | Get the first element within a selected set.                                             | `$(".elements").first();`                                                 |
| `.last()`     | Get the last element within a selected set.                                              | `$(".elements").last();`                                                  |
| `.eq()`       | Get the element at a specified index within a selected set.                              | `$(".elements").eq(2);`                                                   |
| `.filter()`   | Reduce the set of matched elements based on a filter function or selector.               | `$(".elements").filter(".filterClass");`                                  |
| `.not()`      | Remove elements from the set of matched elements based on a filter function or selector. | `$(".elements").not(".excludeClass");`                                    |
| `.has()`      | Reduce the set of matched elements to those that have a descendant matching a selector.  | `$(".parentElements").has(".childClass");`                                |
| `.add()`      | Add elements to the set of matched elements.                                             | `$(".elements").add(".additionalElements");`                              |
| `.end()`      | End the most recent filtering operation and return to the previous set of elements.      | `$(".elements").filter(".firstFilter").end().filter(".secondFilter");`    |
| `.contents()` | Get the child nodes (including text and comment nodes) of selected elements.             | `$("#element").contents();`                                               |
| `.each()`     | Iterate over a set of elements and apply a function to each one.                         | `$(".elements").each(function(index, element) { /* Your code here */ });` |

### Attribute Manipulation actions

These attribute manipulation actions provide a versatile way to work with attributes, properties, and content of HTML elements, making it easy to create dynamic and interactive web pages.

| Action           | Description                                                                         | Example Usage                                   |
| ---------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------- |
| `.attr()`        | Get or set the value of an attribute for selected elements.                         | `$("#elementId").attr("src", "new-image.jpg");` |
| `.removeAttr()`  | Remove one or more attributes from selected elements.                               | `$("#elementId").removeAttr("data-custom");`    |
| `.prop()`        | Get or set the value of a property for selected elements (e.g., checked, disabled). | `$("#checkbox").prop("checked", true);`         |
| `.removeProp()`  | Remove a property from selected elements.                                           | `$("#checkbox").removeProp("checked");`         |
| `.val()`         | Get or set the value of form elements like input, select, and textarea.             | `$("#inputField").val();`                       |
| `.data()`        | Get or set custom data attributes (data-\*) for selected elements.                  | `$("#elementId").data("customData", "value");`  |
| `.hasClass()`    | Check if selected elements have a specific class.                                   | `$("#elementId").hasClass("active");`           |
| `.addClass()`    | Add one or more classes to selected elements.                                       | `$("#elementId").addClass("newClass");`         |
| `.removeClass()` | Remove one or more classes from selected elements.                                  | `$("#elementId").removeClass("oldClass");`      |
| `.toggleClass()` | Toggle one or more classes on selected elements.                                    | `$("#elementId").toggleClass("toggleClass");`   |
| `.html()`        | Get or set the HTML content of selected elements.                                   | `$("#elementId").html();`                       |
| `.text()`        | Get or set the text content of selected elements.                                   | `$("#elementId").text("New Text");`             |
| `.is()`          | Check if any element in the set matches a selector or element.                      | `$("#elementId").is(":visible");`               |

### Form Methods actions

These form methods allow you to work with HTML forms, handle form submission, retrieve and manipulate form data, and respond to user interactions with form elements.

| Method              | Description                                                                     | Example Usage                                                          |
| ------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `.serialize()`      | Serialize form data into a query string.                                        | `$("#myForm").serialize();`                                            |
| `.serializeArray()` | Serialize form data into an array of objects.                                   | `$("#myForm").serializeArray();`                                       |
| `.val()`            | Get or set the value of form elements like input, select, and textarea.         | `$("#inputField").val();`                                              |
| `.submit()`         | Submit the form.                                                                | `$("#myForm").submit();`                                               |
| `.reset()`          | Reset the form to its initial state.                                            | `$("#myForm").reset();`                                                |
| `.prop()`           | Get or set the value of a property for form elements (e.g., checked, disabled). | `$("#checkbox").prop("checked", true);`                                |
| `.disable()`        | Disable form elements or form submission.                                       | `$("#myForm :input").prop("disabled", true);`                          |
| `.enable()`         | Enable form elements or form submission.                                        | `$("#myForm :input").prop("disabled", false);`                         |
| `.focus()`          | Focus on a form element.                                                        | `$("#inputField").focus();`                                            |
| `.blur()`           | Remove focus from a form element.                                               | `$("#inputField").blur();`                                             |
| `.select()`         | Select the text in a text input field.                                          | `$("#inputField").select();`                                           |
| `.change()`         | Trigger the change event on form elements.                                      | `$("#selectField").change();`                                          |
| `.keydown()`        | Trigger the keydown event on form elements.                                     | `$("#inputField").keydown();`                                          |
| `.keyup()`          | Trigger the keyup event on form elements.                                       | `$("#inputField").keyup();`                                            |
| `.keypress()`       | Trigger the keypress event on form elements.                                    | `$("#inputField").keypress();`                                         |
| `.on("submit")`     | Attach a function to run when the form is submitted.                            | `$("#myForm").on("submit", function(event) { /* Your code here */ });` |
| `.on("change")`     | Attach a function to run when the value of form elements changes.               | `$("#selectField").on("change", function() { /* Your code here */ });` |
| `.on("input")`      | Attach a function to run when the user inputs data into form elements.          | `$("#inputField").on("input", function() { /* Your code here */ });`   |
| `.on("focus")`      | Attach a function to run when a form element receives focus.                    | `$("#inputField").on("focus", function() { /* Your code here */ });`   |
| `.on("blur")`       | Attach a function to run when a form element loses focus.                       | `$("#inputField").on("blur", function() { /* Your code here */ });`    |
| `.off("submit")`    | Remove a function attached to the form submission event.                        | `$("#myForm").off("submit", functionName);`                            |
| `.off("change")`    | Remove a function attached to the change event of form elements.                | `$("#selectField").off("change", functionName);`                       |

### Utilities actions

These utility actions provide helpful functions and methods to simplify common tasks in web development, making it easier to work with data, objects, and various aspects of your web page.

| Action              | Description                                                                   | Example Usage                                                                    |
| ------------------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `$.each()`          | Iterate over a collection and apply a function to each element.               | `javascript $.each(array, function(index, element) { /* Your code here */ }); `  |
| `$.map()`           | Transform an array of elements into another array using a callback function.  | `javascript $.map(array, function(element, index) { /* Your code here */ }); `   |
| `$.grep()`          | Filter elements in an array using a callback function.                        | `javascript $.grep(array, function(element, index) { /* Your code here */ }); `  |
| `$.inArray()`       | Search for an element's index in an array.                                    | `javascript $.inArray(value, array); `                                           |
| `$.isArray()`       | Check if an object is an array.                                               | `javascript $.isArray(object); `                                                 |
| `$.isEmptyObject()` | Check if an object has no properties.                                         | `javascript $.isEmptyObject(object); `                                           |
| `$.isFunction()`    | Check if a variable is a JavaScript function.                                 | `javascript $.isFunction(variable); `                                            |
| `$.isNumeric()`     | Check if a variable is a numeric value.                                       | `javascript $.isNumeric(variable); `                                             |
| `$.isPlainObject()` | Check if an object is a plain JavaScript object (not a DOM element or array). | `javascript $.isPlainObject(object); `                                           |
| `$.isWindow()`      | Check if an object is the global window object.                               | `javascript $.isWindow(object); `                                                |
| `$.merge()`         | Merge two arrays into one.                                                    | `javascript $.merge(array1, array2); `                                           |
| `$.now()`           | Get the current timestamp in milliseconds.                                    | `javascript var timestamp = $.now(); `                                           |
| `$.parseHTML()`     | Parse HTML code and return an array of DOM elements.                          | `javascript var elements = $.parseHTML("<div>Hello</div>"); `                    |
| `$.parseJSON()`     | Parse a JSON string and return a JavaScript object.                           | `javascript var jsonData = $.parseJSON('{"name":"John","age":30}'); `            |
| `$.parseXML()`      | Parse an XML string and return an XML document.                               | `javascript var xmlData = $.parseXML('<root><element>Value</element></root>'); ` |
| `$.trim()`          | Remove leading and trailing whitespace from a string.                         | `javascript var trimmedString = $.trim("  Hello  "); `                           |
| `$.unique()`        | Remove duplicate elements from an array.                                      | `javascript var uniqueArray = $.unique(array); `                                 |
| `$.extend()`        | Merge the contents of two or more objects together into the first object.     | `javascript $.extend(targetObject, object1, object2, ...); `                     |
| `$.noConflict()`    | Relinquish control of the `$` variable to other libraries.                    | `javascript var jQuery = $.noConflict(); `                                       |
| `$.holdReady()`     | Delay the execution of jQuery's ready event.                                  | `javascript $.holdReady(true); // Delay ready event `                            |
| `$.ajaxSetup()`     | Set default values for AJAX requests.                                         | `javascript $.ajaxSetup({ timeout: 5000 }); `                                    |

### Filtering actions

These filtering actions allow you to select, exclude, and manipulate elements within a set of matched elements, providing flexibility and precision in your DOM manipulation tasks.

| Action        | Description                                                                                               | Example Usage                                                          |
| ------------- | --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `.filter()`   | Reduce the set of matched elements based on a selector, function, or another jQuery object.               | `$(".elements").filter(".filterClass");`                               |
| `.not()`      | Remove elements from the set of matched elements based on a selector, function, or another jQuery object. | `$(".elements").not(".excludeClass");`                                 |
| `.first()`    | Get the first element within a selected set of elements.                                                  | `$(".elements").first();`                                              |
| `.last()`     | Get the last element within a selected set of elements.                                                   | `$(".elements").last();`                                               |
| `.eq()`       | Get the element at a specified index within a selected set of elements.                                   | `$(".elements").eq(2);`                                                |
| `.slice()`    | Reduce the set of matched elements to a subset based on a start and end index.                            | `$(".elements").slice(1, 4);`                                          |
| `.has()`      | Reduce the set of matched elements to those that have a descendant matching a selector.                   | `$(".parentElements").has(".childClass");`                             |
| `.is()`       | Check if any element in the set matches a selector, element, or function.                                 | `$("#elementId").is(":visible");`                                      |
| `.hasData()`  | Check if any element in the set has associated data.                                                      | `$("#elementId").hasData();`                                           |
| `.contents()` | Get the child nodes (including text and comment nodes) of selected elements.                              | `$("#elementId").contents();`                                          |
| `.add()`      | Add elements to the set of matched elements based on a selector, element, or jQuery object.               | `$(".elements").add(".additionalElements");`                           |
| `.end()`      | End the most recent filtering operation and return to the previous set of elements.                       | `$(".elements").filter(".firstFilter").end().filter(".secondFilter");` |
| `.addBack()`  | Add the previous set of elements back to the current set.                                                 | `$(".elements").filter(".firstFilter").next().addBack();`              |

## Events

Events in jQuery are triggers that execute specified JavaScript functions in response to user interactions or browser manipulations, such as clicks, keypresses, or document loading.

### Mouse Events

These events are triggered by actions of the computer mouse or similar pointing devices.

| Mouse Event  | Description                                                  | Example Usage                                                              |
| ------------ | ------------------------------------------------------------ | -------------------------------------------------------------------------- |
| `click`      | Triggered when an element is clicked.                        | `$("#button").click(function() { alert('Clicked!'); });`                   |
| `dblclick`   | Triggered when an element is double-clicked.                 | `$("#item").dblclick(function() { alert('Double clicked!'); });`           |
| `mouseenter` | Fired when the mouse pointer enters the area of an element.  | `$("#menu").mouseenter(function() { $(this).addClass('highlight'); });`    |
| `mouseleave` | Fired when the mouse pointer leaves the area of an element.  | `$("#menu").mouseleave(function() { $(this).removeClass('highlight'); });` |
| `mousemove`  | Triggered when the mouse moves within an element.            | `$("#track").mousemove(function() { console.log('Mouse is moving!'); });`  |
| `mousedown`  | Triggered when a mouse button is pressed down on an element. | `$("#drag").mousedown(function() { console.log('Mouse down!'); });`        |
| `mouseup`    | Triggered when a mouse button is released over an element.   | `$("#drag").mouseup(function() { console.log('Mouse up!'); });`            |
| `hover`      | Combines both `mouseenter` and `mouseleave` events.          | `$("#menu-item").hover(function() { $(this).toggleClass('hovered'); });`   |

### Keyboard Events

These events are triggered by actions of the keyboard.

| Keyboard Event | Description                                                                                                         | Example Usage                                                                         |
| -------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `keydown`      | Triggered when a key is pressed down.                                                                               | `$(document).keydown(function(event) { alert(event.which); });`                       |
| `keyup`        | Triggered when a key is released.                                                                                   | `$(document).keyup(function(event) { alert(event.which); });`                         |
| `keypress`     | Triggered when a key is pressed down and that key normally produces a character value (deprecated in jQuery 3.3.0). | `$(document).keypress(function(event) { alert(String.fromCharCode(event.which)); });` |

### Form Events

These events are triggered by interactions with form elements.

| Form Event | Description                                                        | Example Usage                                                                              |
| ---------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `submit`   | Triggered when a form is submitted.                                | `$("form").submit(function(event) { event.preventDefault(); alert('Form submitted!'); });` |
| `change`   | Triggered when the value of an input, select, or textarea changes. | `$("input").change(function() { alert('Value changed!'); });`                              |
| `focus`    | Triggered when an element gains focus.                             | `$("input").focus(function() { $(this).addClass('focus'); });`                             |
| `blur`     | Triggered when an element loses focus.                             | `$("input").blur(function() { $(this).removeClass('focus'); });`                           |
| `focusin`  | Similar to `focus`, but bubbles up through the DOM tree.           | `$("form").focusin(function() { $(this).addClass('focus'); });`                            |
| `focusout` | Similar to `blur`, but bubbles up through the DOM tree.            | `$("form").focusout(function() { $(this).removeClass('focus'); });`                        |

### Document/Window Events

These are events that apply to the window or document as a whole.

| Document/Window Event | Description                                                                                                             | Example Usage                                                          |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `load`                | Triggered when the entire page, including all dependent resources (like images), is fully loaded.                       | `$(window).on('load', function() { alert('Page fully loaded!'); });`   |
| `resize`              | Triggered when the browser window is resized.                                                                           | `$(window).resize(function() { alert('Window resized!'); });`          |
| `scroll`              | Triggered when the document or an element is scrolled.                                                                  | `$(window).scroll(function() { alert('Window scrolled!'); });`         |
| `unload`              | Triggered when the page is unloaded. (Note: Use of this event is not recommended; beforeunload should be used instead.) | `$(window).on('unload', function() { alert('Page is unloading!'); });` |
| `ready`               | Triggered when the DOM is fully loaded and ready to be manipulated (not waiting for images or other resources).         | `$(document).ready(function() { alert('DOM is ready!'); });`           |
