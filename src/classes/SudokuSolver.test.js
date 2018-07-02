import SudokuSolver from './SudokuSolver'


test('create Solver', () => {
    let sudoku = new SudokuSolver()
})

test('getPossibleValues', () => {
    let sudoku = new SudokuSolver()
    let values = sudoku.possibleValues(4,4)
    expect(values).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    sudoku.set(4, 4, 5)
    values = sudoku.possibleValues(4,4)
    expect(values).toEqual([1, 2, 3, 4, 6, 7, 8, 9])
    sudoku.set(4, 8, 3)
    values = sudoku.possibleValues(4,4)
    expect(values).toEqual([1, 2, 4, 6, 7, 8, 9])
    sudoku.set(8, 4, 2)
    values = sudoku.possibleValues(4,4)
    expect(values).toEqual([1, 4, 6, 7, 8, 9])
    sudoku.set(6, 4, 6)
    values = sudoku.possibleValues(4,4)
    expect(values).toEqual([1, 4, 7, 8, 9])
    sudoku.set(4, 6, 1 )
    values = sudoku.possibleValues(4,4)
    expect(values).toEqual([4, 7, 8, 9])
    sudoku.set(4, 5, 9 )
    values = sudoku.possibleValues(4,4)
    expect(values).toEqual([4, 7, 8])
    sudoku.set(5, 4, 4)
    values = sudoku.possibleValues(4,4)
    expect(values).toEqual([7, 8])
    sudoku.set(3, 3, 7)
    values = sudoku.possibleValues(4,4)
    expect(values).toEqual([8])
    sudoku.set(5, 5, 8)
    values = sudoku.possibleValues(4,4)
    expect(values).toEqual([])

    function throwExcepton(){
        sudoku.possibleValues(-1,-1)
    }
    expect(throwExcepton).toThrow()
})

test('generation of possible values', () => {
    let sudoku = new SudokuSolver()

    /*
        Init example Sudoku
         0   1   2   3   4   5   6   7   8
    0:  [ ] [2] [6] [ ] [ ] [ ] [8] [1] [ ]
    1:  [3] [ ] [ ] [7] [ ] [8] [ ] [ ] [6]
    2:  [4] [ ] [ ] [ ] [5] [ ] [ ] [ ] [7]
    3:  [ ] [5] [ ] [1] [ ] [7] [ ] [9] [ ]
    4:  [ ] [ ] [3] [9] [ ] [5] [1] [ ] [ ]
    5:  [ ] [4] [ ] [3] [ ] [2] [ ] [5] [ ]
    6:  [1] [ ] [ ] [ ] [3] [ ] [ ] [ ] [2]
    7:  [5] [ ] [ ] [2] [ ] [4] [ ] [ ] [9]
    8:  [ ] [3] [8] [ ] [ ] [ ] [4] [6] [ ]
    */

    expect(sudoku.isSolved()).toBe(false)
    sudoku.set(0, 1, 2)
    sudoku.set(0, 2, 6)
    sudoku.set(0, 6, 8)
    sudoku.set(0, 7, 1)
    sudoku.set(1, 0, 3)
    sudoku.set(1, 3, 7)
    sudoku.set(1, 5, 8)
    sudoku.set(1, 8, 6)
    sudoku.set(2, 0, 4)
    sudoku.set(2, 4, 5)
    sudoku.set(2, 8, 7)
    sudoku.set(3, 1, 5)
    sudoku.set(3, 3, 1)
    sudoku.set(3, 5, 7)
    sudoku.set(3, 7, 9)
    sudoku.set(4, 2, 3)
    sudoku.set(4, 3, 9)
    sudoku.set(4, 5, 5)
    sudoku.set(4, 6, 1)
    sudoku.set(5, 1, 4)
    sudoku.set(5, 3, 3)
    sudoku.set(5, 5, 2)
    sudoku.set(5, 7, 5)
    sudoku.set(6, 0, 1)
    sudoku.set(6, 4, 3)
    sudoku.set(6, 8, 2)
    sudoku.set(7, 0, 5)
    sudoku.set(7, 3, 2)
    sudoku.set(7, 5, 4)
    sudoku.set(7, 8, 9)
    sudoku.set(8, 1, 3)
    sudoku.set(8, 2, 8)
    sudoku.set(8, 6, 4)
    sudoku.set(8, 7, 6)
    expect(sudoku.isSolved()).toBe(false)
    let iterator = sudoku.findNext()
    for (const value of iterator) {
        sudoku.set(value.x, value.y, value.scope.shift())
    }    
    for (let i = 0; i < sudoku.board.length; i++) {
        for (let j = 0; j < sudoku.board[i].length; j++) {
            const element = sudoku.board[i][j];
            expect(element.value).not.toBeNull()
        }
    }
    expect(sudoku.isSolved()).toBe(true)
})

