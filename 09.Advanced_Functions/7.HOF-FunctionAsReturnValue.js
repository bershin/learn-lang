// Creating a function and returning.
function productBy(x){
    const temp = function (num){
        return x * num
    }
    return temp
}

const triple = productBy(3)
console.log(triple(6))

// Return the defined function
function multiplyBy(x){
    return function(num){
        return x * num
    }
}


const double = multiplyBy(2)
console.log(double(6))

// Return the defined function with multi argument
function makeBetween(x, y){
    return function(num){
        return x < num && y > num
    }
}

const isChild = makeBetween(0,6)
console.log(isChild(3)) // true
console.log(isChild(7)) // false

const isNintyKid = makeBetween(1990,2000)
console.log(isNintyKid(1997)) // true
console.log(isNintyKid(2001)) // false

const isNiceWeather = makeBetween(18,22)
console.log(isNiceWeather(20)) // true
console.log(isNiceWeather(34)) // false