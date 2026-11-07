# Task 17: JavaScript - Promise-based Divide Function

An arrow function `divide(a, b)` that divides two numbers and returns a Promise. Results and errors are shown with `console.log()`.

## Files

- `index.html` - simple page that links the CSS and the JavaScript file
- `style.css` - basic styling for the page
- `script.js` - the divide function and the test cases
- `Readme.md` - this file

## How it works

- `divide` is an **arrow function** that takes two numbers and returns `new Promise(...)`.
- If the second number is `0`, the Promise is **rejected** with the error "Division by zero is not allowed."
- Otherwise the Promise is **resolved** with the result of `a / b`.
- Inputs that are not numbers are also rejected with a clear message.
- Each call is handled with `.then()` for the result and `.catch()` for the error.
- 7 dummy test cases are run one after another (chained with Promises) so the console output stays in order.

## Output (in the browser console)

```
Dividing 10 by 2...
Result: 5
Dividing 10 by 0...
Error: Division by zero is not allowed.
Dividing 20 by 4...
Result: 5
Dividing 7 by 2...
Result: 3.5
Dividing 0 by 5...
Result: 0
Dividing -12 by 3...
Result: -4
Dividing 9 by 0...
Error: Division by zero is not allowed.
```

## How to run

Open `index.html` in a browser, press F12 and open the **Console** tab to see the output. To try other values, change the `testCases` array in `script.js`.
