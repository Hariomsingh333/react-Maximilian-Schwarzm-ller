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
