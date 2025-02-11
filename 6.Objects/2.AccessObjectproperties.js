const pallet = {
    100: 'One hundred',
    '16': 'Sixteen',
    black: '#000000',
    "grey white": '#FFFFFF'
}

// console.log(pallet.100); // Syntax Error
console.log(pallet[100]); // One hundred
console.log(pallet["100"]); // One hundred
console.log(pallet['16']); // Sixteen
// console.log(pallet.16); // Error
console.log(pallet["black"]); // #000000
console.log(pallet["bla"+"ck"]); // #000000
console.log(pallet.black); // #000000
pitchBlack = 'black';
console.log(pallet[pitchBlack]); // #000000
console.log(pallet.pitchBlack); // undefined
console.log(pallet["grey white"]); // #000000
