import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class NQueensService {

  constructor() { }
  
  getNQueensSolution(n: number) {
    const board = this.generateBoard(n);
    this.solveNQueens(board, 0);
    return board;
  }

  // generate board with input n with all 0s
  private generateBoard(n: number): number[][] {
    const board: number[][] = new Array<number[]>(n);
    board.forEach((column) => {
      column = new Array<number>(n).fill(0);
    });
    console.log(board);
    return board;
  }

  private isAttackingExistingQueen( board: Number[][], col: number, row: number): boolean {
    // check row to the left
    for (let i = 0; i < row; i++ ){
      if (board[i][row] === 1){
        return true;
      }
    }
    // check upperleft diagonal
    for ( let i = 1; 0 <= Math.min(col, row) - i; i++){
      if (board[col - i ][row - i] === 1){
        return true;
      }
    }
    // check  lower left diagonal
    for ( let i = 1; 0 <= col - i && row + i < board.length - 1 ; i++) {
      if (board[col - i][row + i] === 1){
        return true;
      }
    }
    return false;
  }

  private solveNQueens(board: number[][], col: number): boolean {
    // base case
    if (col >= board.length) {
      return true;
    }
    // each spot 
    for (let row = 0; row < board.length - 1; row++) {
      // check this row
      if (!this.isAttackingExistingQueen(board, col, row)){
        board[col][row] = 1;
        // find next spot
        this.solveNQueens(board, col + 1);
      }
    }
    // backtrack
    return false;
  }
}
