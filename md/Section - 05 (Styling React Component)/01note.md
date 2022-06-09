# Styling react component

## inline styling in react

in react for in style first we use the style keyword and the set a object into it.

```jsx
<input
  // inline style in react
  style={{
    border: isValid ? "2px solid black" : "5px solid red",
    background: !isValid ? "orange" : "transparent",
  }}
  type="text"
  onChange={goalInputChangeHandler}
/>
```
