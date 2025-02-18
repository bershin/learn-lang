function avg(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum / arr.length;
}

console.log(avg([0, 50])); // 25
console.log(avg([75, 76, 80, 95, 100])); // 85.2