function addNumbers(num) {
    let sum = 0
    for (let i = 1; i <= num; i++) {
        sum += i
    }
    return sum
}

console.log(addNumbers(4))
console.log(addNumbers(13))
console.log(addNumbers(600))