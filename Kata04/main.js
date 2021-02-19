function countBoomerangs(arr, count) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 2] != null) {
            let first = arr[i]
            let second = arr[i + 1]
            let third = arr[i + 2]
    
            if (first == third) {
                    if (first != second || third != second) {
                    count++
                }
            }
        }
    }
    return count
}
    
let count = 0
console.log(countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2], count)) // 3 boomerangs
console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1], count)) // 2 boomerangs
console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9], count)) // 1 boomerang
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9], count)) // 0 boomerangs
console.log(countBoomerangs([1, 7, 1, 7, 1, 7, 1], count)) // 5 boomerangs