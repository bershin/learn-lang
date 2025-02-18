const pallet = {
    100: 'One hundred',
    '16': 'Sixteen',
    "grey white": '#FFFFFF',
    black: '#000000'

}

// console.log(pallet.100); // Syntax Error, invalid key
console.log(pallet[100]); // One hundred
console.log(pallet["100"]); // One hundred
console.log(pallet[16]); // Sixteen
console.log(pallet['16']); // Sixteen
// console.log(pallet.16); // Error
console.log(pallet["grey white"]); // #000000
console.log(pallet["black"]); // #000000
// console.log(pallet[black]); //black is not defined
console.log(pallet["bla"+"ck"]); // #000000
console.log(pallet.black); // #000000
pitchBlack = 'black';
console.log(pallet[pitchBlack]); // #000000
console.log(pallet.pitchBlack); // undefined

