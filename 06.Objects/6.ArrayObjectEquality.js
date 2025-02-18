/* Same value stored in different address */
let nums = [1, 2, 3]
let mystery = [1, 2, 3]

console.log(nums === mystery) // false

/* Copy refrerence in array */
let moreNums = nums
console.log(nums === moreNums) // true

/* No straight way to check both object have same value */
const user = {
    username: 'CherryGarcia8',
    email: 'bershin@gmail.com',
    notifications: []
};

if (user.notifications === []) {
    console.log('Empty array!') // This does get printed.
}

if (!user.notifications.length) {
    console.log('No new notifications-2!') // No new notifications-2!
}