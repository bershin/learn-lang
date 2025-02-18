function isPanagram1(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const strLower = str.toLowerCase();
  for (let i = 0; i < alphabet.length; i++) {
    if (strLower.indexOf(alphabet[i]) === -1) {
      return false;
    }
  }
  return true;
}
console.log(isPanagram1('The five boxing wizards jump quickly')); // true

// Using for...of loop and includes method
function isPanagram2(str) {
  for (let char of 'abcdefghijklmnopqrstuvwxyz') {
    if (!str.toLowerCase().includes(char)) {
      return false;
    }
  }
  return true;  
}
console.log(isPanagram2('The five boxing wizards jump quickly')); // true
