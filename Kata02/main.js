let num1 = 0
let num2 = 1
let nextNum;
let number = 4000000
let numbers = []

for (let i = 1; i <= number; i++) {
    if (num1 > 4000000) {
        break
    }
    if (num1 % 2 == 0) {
        numbers.push(num1)
    }
    console.log(num1);
    nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum;
}

let sum = 0
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}

console.log(numbers)
console.log(sum)