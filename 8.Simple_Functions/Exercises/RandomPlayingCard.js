function getPlayingCard1() {
    const suits = ['hearts', 'clubs', 'diamonds', 'spades'];
    const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A'.split(',');
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];
  
    return { suit: randomSuit, value: randomValue };
  }

function randomPick(arr){
    return arr[Math.floor(Math.random() * arr.length)]
}

function getPlayingCard2() {
  const suits = ['hearts', 'clubs', 'diamonds', 'spades'];
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const randomSuit = randomPick(suits);
  const randomValue = randomPick(values);

  return { suit: randomSuit, value: randomValue };
}

function getPlayingCard3() {
    const suits = ['hearts', 'clubs', 'diamonds', 'spades'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  
    return { suit: randomPick(suits), value: randomPick(values) };
  }

console.log(getPlayingCard3()); // { suit: 'hearts', value: 'Q' }
