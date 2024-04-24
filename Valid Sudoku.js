/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  // Create a map to check grids
  let gridCheck = {};
  
    /* The time complexity here is O(1) because the input is
    always the same size, a 9x9 grid, and I am only iterating
    over it once. */
    for (let i = 0; i < board.length; i++) {
            // Create array to store seen numbers
            /* Space complexity here is O(1) since these arrays will never
            be larger than length 9. */
            const rowCheck = [];
            const columnCheck = [];
        for (let j = 0; j < board[i].length; j++) {
            let row = board[i][j];
            let column = board[j][i];

          // This gives is x,y coords for the 3x3 subgrids
            let grid = `${Math.floor(i/3)}${Math.floor(j/3)}`;
          // If there is no key for this grid coord, add it.
          if (!gridCheck[grid]) {
            gridCheck[grid] = [];
          }
            
            // Check rows
            
            // If the current row is not a '.'
            if (row !== '.') {
                // If the checker array includes the number, return false;
                /* Time Complexity of .includes is O(n) where n is the 
                size of the input, HOWEVER, n always = 9, so this should 
                be O(1). */
                if (rowCheck.includes(row)) return false;
                // Else add it to the checker
                // Time Complexity of .push is O(1)
                rowCheck.push(row);
            }
            
            // Check columns
            
            // If the current column is not a '.'
            if (column !== '.') {
                // If the checker array includes the number, return false;
                /* Time Complexity of .includes is O(n) where n is the 
                size of the input, HOWEVER, n always = 9, so this should 
                be O(1). */
                if (columnCheck.includes(column)) return false;
                // Else add it to the checker
                // Time Complexity of .push is O(1)
                columnCheck.push(column);
            }
            
            // Check grid
            
            // If the current grid is not a '.'
            if (row !== '.') {
                if (gridCheck[grid].includes(row)) return false;
                gridCheck[grid].push(row);
            }
        }
    }
    return true;
    
    // Time Complexity = O(1)
    // Space Complexity = O(1)
};
