// X . X
// O . O
// O X O
// CHESS or CHECKERS 8X8
// 19X19 

// *****
// ****
// **
// *

// . . . . . . . .
// . . . . . . . .
// . . . . . . . .
// . . . . . . . .
// . . . . . . . .
// . . . . . . . .
// . . . . . . . .
// . . . . . . . .

const width = 12 
const height = 8

for( r = 0; r < height; r++) {
    let row = "";
    for(let c = 0; c < width; c++) {
        row += " .";
    }
    console.log("R"+r + row)
}
//END of GRID
const grid = [
    ['X','O','.'], 
    ['.','.','.'], 
    ['.','O','X'], 
];

grid[1][1] = "X"
for(let r = 0; r < grid.length; r++) {
    let row = "";
    for(let c = 0; c < grid[r].length; c++) {
        row += ' ' + grid[r][c];
    }
    console.log("R"+r + row)
}

