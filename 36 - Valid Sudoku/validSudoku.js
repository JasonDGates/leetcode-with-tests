/**
 * Checks if a 9x9 Sudoku board is valid.
 * 
 * @param {character[][]} board - The 9x9 Sudoku board.
 * @returns {boolean} - True if the board is valid, false otherwise.
 * 
 * Time Complexity: O(1) - We iterate over a fixed 9x9 board, resulting in a constant number of operations.
 * Space Complexity: O(1) - We use a fixed amount of extra space to store sets.
 */
function isValidSudoku(board) {
  const rows = Array.from({ length: 9 }, () => new Set());
  const columns = Array.from({ length: 9 }, () => new Set());
  const subBoxes = Array.from({ length: 9 }, () => new Set());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];
      if (num === '.') continue;

      // Check the row
      if (rows[i].has(num)) return false;
      rows[i].add(num);

      // Check the column
      if (columns[j].has(num)) return false;
      columns[j].add(num);

      // Check the 3x3 sub-box
      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (subBoxes[boxIndex].has(num)) return false;
      subBoxes[boxIndex].add(num);
    }
  }
  return true;
}

export default isValidSudoku;
