const userReviews = {}
userReviews['queenBee49'] = 4.0
userReviews.mrSmith78 = 3.5

console.log(userReviews) // { queenBee49: 4, mrSmith78: 3.5 }

userReviews['queenBee49'] += 2
userReviews.mrSmith78++

console.log(userReviews) // { queenBee49: 6, mrSmith78: 4.5 }
