function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function exponent(a, b) {
    return Math.pow(a, b);
}
function root(a) {
    return Math.sqrt(a);
}
function log(a) {
    return Math.log(a);
}
function sin(a) {
    return Math.sin(a);
}
// add two numbers in base 10
console.log(add(1, 2)); // 3
// add two numbers in base 2
console.log(add(1, 2)); // 3
// add two numbers in base 8
console.log(add(1, 2)); // 3
// add two numbers in base 16
console.log(add(0x1, 0x2)); // 3
// subtract two numbers in base 10
console.log(subtract(1, 2)); // -1
// subtract two numbers in base 2
console.log(subtract(1, 2)); // -1
// subtract two numbers in base 8
console.log(subtract(1, 2)); // -1
// subtract two numbers in base 16
console.log(subtract(0x1, 0x2)); // -1
// multiply two numbers in base 10
console.log(multiply(1, 2)); // 2
// multiply two numbers in base 2
console.log(multiply(1, 2)); // 2
// multiply two numbers in base 8
console.log(multiply(1, 2)); // 2
// multiply two numbers in base 16
console.log(multiply(0x1, 0x2)); // 2
// divide two numbers in base 10
console.log(divide(1, 2)); // 0.5
// divide two numbers in base 2
console.log(divide(1, 2)); // 0.5
// divide two numbers in base 8
console.log(divide(1, 2)); // 0.5
// divide two numbers in base 16
console.log(divide(0x1, 0x2)); // 0.5
// exponent two numbers in base 10
console.log(exponent(2, 3)); // 8
// exponent two numbers in base 2
console.log(exponent(2, 3)); // 8
// exponent two numbers in base 8
console.log(exponent(2, 3)); // 8
// exponent two numbers in base 16
console.log(exponent(0x2, 0x3)); // 8
// root of a number in base 10
console.log(root(9)); // 3
// root of a number in base 2
console.log(root(9)); // 3
// root of a number in base 8
console.log(root(9)); // 3
// root of a number in base 16
console.log(root(0x9)); // 3
// log of a number in base 10
console.log(log(10)); // 2.302585092994046
// log of a number in base 2
console.log(log(10)); // 2.302585092994046
// log of a number in base 8
console.log(log(10)); // 2.302585092994046
// log of a number in base 16
console.log(log(0xa)); // 2.302585092994046
// sin of a number in base 10
console.log(sin(0)); // 0
// sin of a number in base 2
console.log(sin(0)); // 0
// sin of a number in base 8
console.log(sin(0)); // 0
// sin of a number in base 16
console.log(sin(0x0)); // 0
