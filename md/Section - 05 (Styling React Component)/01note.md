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

# Setting CSS Classes Dynamically

we can also use Dynamically style using css class

- first i make a css style

```css
.form-control.invalid input {
  border: #fad0ec 5px solid;
  background-color: #f87d67;
}
.form-control.invalid label {
  color: #f87d67;
}
```

- then i add this style in my jsx code and using ternary operator for condition

```jsx
// inValid is a state for more information see the code
// CourseInput.js
<div className={`form-control ${!isValid ? "invalid" : ""}`}>
  <label>Course Goal</label>
  <input type="text" onChange={goalInputChangeHandler} />
</div>
```
