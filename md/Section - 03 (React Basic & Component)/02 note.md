# let's build a component

component is nothing just a function

```jsx
const Hello = () => {
  return <div>Hello World from the Hello Component</div>;
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
