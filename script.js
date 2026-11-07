// Promise-based Divide Function

// Arrow function that takes two numbers and returns a Promise
const divide = (a, b) => {
    return new Promise((resolve, reject) => {
        if (typeof a !== "number" || typeof b !== "number") {
            reject(new Error("Both inputs must be numbers."));
        } else if (b === 0) {
            reject(new Error("Division by zero is not allowed."));
        } else {
            resolve(a / b);
        }
    });
};


// Dummy values for testing (7 cases)
const testCases = [
    [10, 2],
    [10, 0],
    [20, 4],
    [7, 2],
    [0, 5],
    [-12, 3],
    [9, 0]
];


// Run the cases one after another so the output stays in order
let chain = Promise.resolve();

testCases.forEach(([a, b]) => {
    chain = chain.then(() => {
        console.log("Dividing " + a + " by " + b + "...");

        return divide(a, b)
            .then((result) => {
                console.log("Result: " + result);
            })
            .catch((error) => {
                console.log("Error: " + error.message);
            });
    });
});
