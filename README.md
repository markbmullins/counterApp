<img src="https://github.com/markbmullins/counterApp/blob/master/images/react-logo.png" width="25%" height="50%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://github.com/markbmullins/counterApp/blob/master/images/bootstrap-logo.png" width="15%" height="20%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://github.com/markbmullins/counterApp/blob/master/images/js_logo.png" width="15%" height="20%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://github.com/markbmullins/counterApp/blob/master/images/node-logo.png" width="25%" height="50%">

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). [Here](./create-react-app.md) you can see the Create React App standard readme.

For this react project, I followed along with this YouTube Video:

[![image not found](https://img.youtube.com/vi/Ke90Tje7VS0/0.jpg)](https://www.youtube.com/watch?v=Ke90Tje7VS0)

# Extensions from video

After watching the video, I decided to play with extending this simple cart UI. I added a button to decrement the counter, which was based off the previously implemented increment button. In addition to the "Number of Unique Items" in the navbar, I added a total count of the items in this sample cart. This required me to add another item in the state, `sum` and make sure to update that sum whenever an item is incremented, decremented, deleted, or the reset button is pressed.

![Additions](./images/demo.gif)

# Topics Learned

In this video lecture I learned about:

- What is React?
- Setting Up the Development Environment
- Components
- Setting Up the Project
- Specifying Children
- Embedding Expressions
- Setting Attributes
- Rendering Classes Dynamically
- Rendering Lists
- Conditional Rendering
- Handling Events
- Binding Event Handlers
- Updating the State
- What Happens When State Changes?
- Passing Event Arguments
- Composing Components
- Passing Data to Components
- Passing Children
- Debugging React Apps
- Props vs State
- Raising and Handling Events
- Updating the State
- Single Source of Truth
- Removing the Local State
- Multiple Components in Sync
- Lifting the State Up
- Stateless Functional Components
- Destructuring Arguments
- Lifecycle Hooks
- Mounting Phase
- Updating Phase
- Unmounting Phase

# Notes

Here are the notes I took while following along with the video:
[Link](https://www.youtube.com/watch?v=Ke90Tje7VS0)

React is a JS Libraary vs. Angular is a Framework

You need to install http libraries for react

Create app installs:
Development Server
Webpack for bundling files
Babel for compiling Js code

## Setting up:

```
C:\Users\Mark>npm i -g create-react-app@1.5.2

C:\Users\Mark\Documents\Code>mkdir React

C:\Users\Mark\Documents\Code>cd React

C:\Users\Mark\Documents\Code\React>create-react-app react-app

C:\Users\Mark\Documents\Code\React>cd react-app

C:\Users\Mark\Documents\Code\React\react-app>npm start

```

registerServiceWorker.js: [Time Stamp](https://youtu.be/Ke90Tje7VS0?t=937) Automatically generated by create react app. Servers assets form a local cache

You can have Javascript render HTML directly with JSX. Ex:

JS:

```
const element = <h1>Hello World</h1>;
console.log(element);
ReactDOM.render(element, document.getElementById("root"));
```

HTML:

```
<div id="root"></div>
```

ReactDom.render takes the element (in the real world it would be a component not HTML) and gets the ID with document.getElementById(). This would be main App component

## Creating first react app:

Install bootstrap: `PS C:\Users\Mark\Documents\Code\React\counter-app> npm i bootstrap@4.1.1`
import bootstrap in index.js `import "bootstrap/dist/css/bootstrap.css";`

By convention but components in component folder.
Use jsx extention to get better code completion.

Using Simple React Snippets extension for Vs Code type imrc (import react component) to generate `import React, { Component } from 'react';`

and cc (create class) to generate

```
class  extends Component {
    state = {  }
    render() {
        return (  );
    }
}

export default ;
```

create Counter class and then import it in the index.js file. `import Counter from './components/counter';`

props vs. state - state is local to the component and can only be changed by that component. Props are data passed to components and is read only.

Controlled Coponent - recieves all data via props, and raises events whenever data needs to be changed

Previously counter component was handling it's own state updates, but we need a single source of truth for React to update the DOM. So we refactor to make counter a controller component

When using stateless functional components you cannot refer to this.props. You have to pass props as an argument to the function.

```
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};
```

To Do:

- Learn more about object destructuring
- Learn more about spread syntax

Lifecycle hooks - automaticalle called methods at certain moments in the lifecycle of a component

mounting phase - when a component is created and inserted into the DOM. Lifecycle hooks called in order: constructor, render, componentDidMount

consutuctor - can set state directly when initalizing component

componentDidMount() - good place to make Ajax calls to get data from the server.

update - when state or props of a component change. hooks: render, componendDidUpdate

componentDidUpdate - this is a good place to make an additional Ajax call if the component updated. This is useful for optimization

unmount - whena component is removed from the DOM. hooks: componentWillUnmount

componentWillUnmount - Called just before a component is removed from the DOM. Useful for cleanup to prevent memory leaks.

There are other lifecycle hooks, refer to React docs.

Licecycle hooks can only be used in class components, not stateless functional components

When you trigger the update phase by calling setState(), React renders the component and any child components, but that doesn't mean the DOM changes. You are updating the virtual DOM. React coompares the OLD virtual DOM to the NEW virtual DOM (which is why you can't change the state directly) and based on the changes it will update the real DOM accordingly.
