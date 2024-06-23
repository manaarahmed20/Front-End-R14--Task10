// Function without parameters to calculate the sum of two numbers
function sum() {
    let num1 = 5; // Example number 1
    let num2 = 10; // Example number 2
    return num1 + num2;
}

console.log(sum()); // Output: 15

// Function with parameters to calculate the division of two numbers
function divide(num1, num2) {
    if (num2 === 0) {
        return "Error: Division by zero";
    }
    return num1 / num2;
}

console.log(divide(10, 2)); // Output: 5
console.log(divide(10, 0)); // Output: Error: Division by zero

// Using all string methods
let str = "Hello, World!";

console.log(str.toUpperCase()); // Output: HELLO, WORLD!
console.log(str.toLowerCase()); // Output: hello, world!
console.log(str.charAt(1)); // Output: e
console.log(str.indexOf('o')); // Output: 4
console.log(str.lastIndexOf('o')); // Output: 8
console.log(str.substring(0, 5)); // Output: Hello
console.log(str.slice(0, 5)); // Output: Hello
console.log(str.includes('World')); // Output: true
console.log(str.replace('World', 'JavaScript')); // Output: Hello, JavaScript!
console.log(str.split(' ')); // Output: ["Hello,", "World!"]
let str2 = "   Hello, World!   ";
console.log(str2.trim()); // Output: "Hello, World!"
let str3 = "Hello";
let str4 = "World";
console.log(str3.concat(', ', str4)); // Output: Hello, World
console.log(str3.repeat(3)); // Output: HelloHelloHello

// Using all string search methods
let searchStr = "Hello, World!";

console.log(searchStr.indexOf('World')); // Output: 7
console.log(searchStr.lastIndexOf('o')); // Output: 8
console.log(searchStr.search('World')); // Output: 7
console.log(searchStr.match(/World/)); // Output: ["World"]
console.log(searchStr.startsWith('Hello')); // Output: true
console.log(searchStr.endsWith('!')); // Output: true
console.log(searchStr.includes('World')); // Output: true

// Arithmetic logic to check if a user's weight is good, overweight, or underweight
function checkWeight(height, weight) {
    let bmi = weight / ((height / 100) ** 2);
    let category;

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    return `Your BMI is ${bmi.toFixed(2)}, which is considered ${category}.`;
}

