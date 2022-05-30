# let vs Const

is JavaScript we create variable using _var, let, const_ let and const introduce in es6 version of JavaScript, we don't use var because it is not a good practice, let see what is different between let and const

## Const

we create some variable but we never change it so use use _const_ const mean constant.

```js
const foo = "hello world"; // that never change
```

something you need to assign one and never use to change and that case we use const

## Let

we also create variable is javascript using this let keyword, but in let keyword you can change your variable,

```js
let foo = "hello world";
foo = "bar";
// we change the variable using this let keyword
```

# Arrow Function

is javascript we create function using various type of method, like we can create Function using function keyword and we also can create using Arrow Function

```js
let greeting = (name) => {
  console.log("hello ", name);
};
```

if your work with arrow function then **no more issue with the this keyword**

# import and export (Modules)

## export

we can import and export some file using the import and export keyword

```js
const person = {
  name: "Max",
};
export default person;
// when ever export something you need to add the keyword default and the which file you export
```

we can export multiple thing

```js
export const clear = () => {
  console.clear();
};
export const dataBase = 10;
```

## import

you and import any thing from your file using import keyword, first you need to create a name and then your need to give the file location

```js
//keyword name key  file location
import person from "./person.js";
```

# Classes

class is a blueprint of object as we know,

a class create with a class key and under the class we can define two thing _property_ and _method_

- property is variable under a class
- method is a function under a class

```js
class Person {
    // property
    name = "max",
    // method
    log = () =>{
        console.log("hello")
    }
}
```

# new keyword

we can use the class using the new keyword

```js
const myPerson = new Person();
myPerson.log();
```

# The Spread and Rest operators

actually it is one operators the three dots <code>...</code>

### spread

used to split up array element

```js
let arr = [1, 2, 3, 4];
let obj = {
  // take all the element form the arr
  ...arr,
};
```

### rest

used to merge a list of function argument into an array

```js
function sortSomething(...arr) {
  return arr.sort();
}
```

# Destruction

Destruction allows us to do "Easily extract array element or object property and store them into a variable."

we can use with

- array destruction

```js
[a, b] = ["hello", "max"];
console.log(a); // 'hello'
console.log(b); // 'max'
```

as well we can destruction object also

# Array Function (map)

map is the build in array method or array function

- map take an function which is an arrow function

and the map function executed every thing for each array index or each array element so there for we take an argument in under the map arrow function

- take a argument under the map arrow function

```js
const numbers = [1, 2, 3, 4];
const doubleNumber = numbers.map((num) => {
  return num * 2;
});
```
