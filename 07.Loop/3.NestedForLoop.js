/* Nested loop with number */
for(let i = 1; i <= 5; i++) {
    for(let j = 1; j <= i; j++) {
        console.log(i, j);
    }
}

/* Nested loop with 2D array to sum all values in it */
const gameBoard = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

total = 0;
for(let i = 0; i < gameBoard.length; i++) {
    const row = gameBoard[i]
    console.log("Row:", row);
    for(let j = 0; j < row.length; j++) {
        console.log(gameBoard[i][j]);
        total += gameBoard[i][j];
    }
}

console.log("Total:", total);