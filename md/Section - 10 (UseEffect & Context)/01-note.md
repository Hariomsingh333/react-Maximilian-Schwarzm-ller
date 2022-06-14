# What is an Effect (or a "Side Effect")

> perform side effect on a function component

_Basically 'do something' when a specific change specify on a component_

### syntax

- first you need to import from react
- useEffect take a function
- and a dependance it is optional

```jsx
import React, { useEffect, useState } from "react";

useEffect(() => {
  console.log("useEffect is working");
}, []);
```

this thing render every time in your code .

```jsx
// on Every render
useEffect(() => {
  console.log("i re-render");
});
```

this thing render one time

```jsx
// on first render Mount only
useEffect(() => {
  console.log("useEffect is working");
}, []);
```

this thing render when the dependance change

```jsx
// on first render + whenever dependance change
useEffect(() => {
  console.log("this is your" + name);
}, [name]);
```

```jsx
// follow the same rule,expect this will unmounting on a component
useEffect(() => {
  console.log("this is your" + name);

  return () => {
    // when the code unmount, this cleanup code run
  };
}, [name]);
```

and every single useEffect hooks also fire when the first render, that is rule of thumb
