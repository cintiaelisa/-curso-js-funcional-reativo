//função que não causa efeito colateral
//os conchetes realizam uma cópia do array
function ordenar(array) {
    return [...array].sort((a, b) => a - b)
}

const nums = [3, 1, 7, 9, 4, 6]
console.log(nums)
console.log(ordenar(nums))
console.log(nums)

const parteNums = nums.slice(3)

console.log(parteNums, nums)