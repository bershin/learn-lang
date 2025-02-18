// const getStat = (arr) => {
//     const max = Math.max(...arr) 
//     const min = Math.min(...arr)
//     const sum = arr.reduce((tot, val)=> tot+val)
//     const avg = sum / arr.length
//     return {
//         max: max,
//         min: min,
//         sum: sum,
//         avg: avg
//     }
// }

// Short hand syntax
const getStat = (arr) => {
    const max = Math.max(...arr) 
    const min = Math.min(...arr)
    const sum = arr.reduce((tot, val)=> tot+val)
    const avg = sum / arr.length
    return {
        max,
        min,
        sum,
        avg
    }
}

const rating = [4.5, 5.0, 3.4, 2.6, 3.9]
const stat = getStat(rating)
console.log(stat)

// Pich a card

const pickCard = (arr) => arr[Math.floor(Math.random() * arr.length)]

const getRandomcard = () => {
    const suit = ["heart", "spade", "clover", "diamond"]
    const nums = "2,3,4,5,6,7,8,9,10,A,J,Q,K".split(",")
    const symbol = pickCard(suit)
    const value = pickCard(nums)
    return {
        symbol,
        value
    }
}

console.log(getRandomcard())