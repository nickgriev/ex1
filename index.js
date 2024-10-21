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
console.log("Add two numbers in base 10 (1 + 2):", add(1, 2)); // 3
console.log("Add two numbers in base 2 (0b1 + 0b10):", add(1, 2)); // 3
console.log("Add two numbers in base 8 (0o1 + 0o2):", add(1, 2)); // 3
console.log("Add two numbers in base 16 (0x1 + 0x2):", add(0x1, 0x2)); // 3
console.log("Subtract two numbers in base 10 (1 - 2):", subtract(1, 2)); // -1
console.log("Subtract two numbers in base 2 (0b1 - 0b10):", subtract(1, 2)); // -1
console.log("Subtract two numbers in base 8 (0o1 - 0o2):", subtract(1, 2)); // -1
console.log("Subtract two numbers in base 16 (0x1 - 0x2):", subtract(0x1, 0x2)); // -1
console.log("Multiply two numbers in base 10 (1 * 2):", multiply(1, 2)); // 2
console.log("Multiply two numbers in base 2 (0b1 * 0b10):", multiply(1, 2)); // 2
console.log("Multiply two numbers in base 8 (0o1 * 0o2):", multiply(1, 2)); // 2
console.log("Multiply two numbers in base 16 (0x1 * 0x2):", multiply(0x1, 0x2)); // 2
console.log("Divide two numbers in base 10 (1 / 2):", divide(1, 2)); // 0.5
console.log("Divide two numbers in base 2 (0b1 / 0b10):", divide(1, 2)); // 0.5
console.log("Divide two numbers in base 8 (0o1 / 0o2):", divide(1, 2)); // 0.5
console.log("Divide two numbers in base 16 (0x1 / 0x2):", divide(0x1, 0x2)); // 0.5
console.log("Exponent two numbers in base 10 (2 ** 3):", exponent(2, 3)); // 8
console.log("Exponent two numbers in base 2 (0b10 ** 0b11):", exponent(2, 3)); // 8
console.log("Exponent two numbers in base 8 (0o2 ** 0o3):", exponent(2, 3)); // 8
console.log("Exponent two numbers in base 16 (0x2 ** 0x3):", exponent(0x2, 0x3)); // 8
console.log("Root of a number in base 10 (sqrt(9)):", root(9)); // 3
console.log("Root of a number in base 2 (sqrt(0b1001)):", root(9)); // 3
console.log("Root of a number in base 8 (sqrt(0o11)):", root(9)); // 3
console.log("Root of a number in base 16 (sqrt(0x9)):", root(0x9)); // 3
console.log("Log of a number in base 10 (log(10)):", log(10)); // 2.302585092994046
console.log("Log of a number in base 2 (log(0b1010)):", log(10)); // 2.302585092994046
console.log("Log of a number in base 8 (log(0o12)):", log(10)); // 2.302585092994046
console.log("Log of a number in base 16 (log(0xa)):", log(0xa)); // 2.302585092994046
console.log("Sin of a number in base 10 (sin(0)):", sin(0)); // 0
console.log("Sin of a number in base 2 (sin(0b0)):", sin(0)); // 0
console.log("Sin of a number in base 8 (sin(0o0)):", sin(0)); // 0
console.log("Sin of a number in base 16 (sin(0x0)):", sin(0x0)); // 0
