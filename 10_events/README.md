# `Understanding Event Listeners and Event Flow`

In JavaScript, event listeners are used to respond to actions taken by users, such as clicking on elements in a webpage. When you attach an event listener to an element, you specify what action should be taken when that event occurs.

## `Event Flow in DOM`:

In the Document Object Model (DOM), the flow of events through elements occurs in three phases:

1. **Capturing Phase:** The event starts from the outermost element and moves inward towards the target element.
   
2. **Target Phase:** The event reaches the target element, the one that triggered the event.

3. **Bubbling Phase:** The event then bubbles up from the target element back outwards towards the outermost element.

## The `useCapture` Parameter:

When you add an event listener using the `addEventListener` method, you have the option to specify the `useCapture` parameter, which determines whether the event should be handled during the capturing phase (`true`) or the bubbling phase (`false`). If `useCapture` is not specified or set to `false`, the event is handled during the bubbling phase by default.