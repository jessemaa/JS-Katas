function adc(bin, volts) {
    let bit = 512
    let sum = 0
    for (let num of bin) {
        num = Number(num)
        sum += num*bit
        bit /= 2
    }
    let dac = (sum*volts)/1023
    return Math.round(dac * 100) / 100
}

console.log(adc("0110010000", 5))
console.log(adc("0000000000", 5))
console.log(adc("1111111111", 5))