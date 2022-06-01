# let's build a component

component is nothing just a function, That return jsx, or html css js

```jsx
const Hello = () => {
  return <div>Hello World from the Hello Component{5 + 6}</div>;
};

export default Hello;
```

we should export the component and import in App.js

```jsx
import Hello from "./components/Hello";

const App = () => {
  return (
    <div>
      hello world
      <Hello />
    </div>
  );
};

export default App;
```

# Props

in react we have a concept called props, props full name is property.

- props is important part of react
- we use all the time in react

```jsx
// app.js

import React from "react";
// import ExpenseItem from "./components/ExpenseItem";
import Test from "./components/Test";

const App = () => {
       <Test text={`this is a text from props`} />
    </div>
  );
};

export default App;

```

```jsx
// components/Test.jsx
import React from "react";

const Test = (props) => {
  return <div>Test, {props.text} </div>;
};

export default Test;
```

### [Props Doc](https://reactjs.org/docs/components-and-props.html)

<hr>
