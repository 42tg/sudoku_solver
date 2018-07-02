import { Board, InvalidValueError, OutOfBounceError, InvalidMoveError } from './Board'

test('creation and correct insertion', () => {
    const board = new Board()
    
    let setted = board.set(4, 4, 5)
    let surrounding = board.get(3,3)
    for (let i = 0; i < board.board.length; i++) {
        for (let j = 0; j < board.board[i].length; j++) {
            if (i === 4 && j === 4) 
                expect(board.get(i,j)).toEqual(setted)
            else if((i === 4 || j === 4) ||
                ((i >=3 && i < 6 && j >= 3 && j < 6)))
                expect(board.get(i,j)).toEqual(surrounding)
            else
                expect(board.get(i,j)).not.toEqual(surrounding)
        }
    }
})

test('copy board', () => {
    const board = new Board()
    board.set(1,1,1)
    board.set(2,2,2)
    board.set(3,3,3)
    const newBoard = new Board(board)
    expect(newBoard.toString()).toBe(board.toString())
})

test('assign invalid values', () => {
    const board = new Board()
    function wrongIndexX() {
        board.set(10,4,4)
    }
    expect(wrongIndexX).toThrow()
    function wrongIndexY() {
        board.set(4,10,4)
    }
    expect(wrongIndexY).toThrow()
    function wrongValue(){
        board.set(4,4,10)
    }
    expect(wrongValue).toThrow()
    board.set(4,4,5)
    function wrongField(){
        board.set(3,3,5)
    }
    expect(wrongField).toThrow()
})

test('Exceptions', () => {
    
    function InvalidValueErrorTest(){
        throw new InvalidValueError()
    }
    expect(InvalidValueErrorTest).toThrowError('Invalid Value Inserted')
    
    function InvalidValueErrorTextTest(){
        throw new InvalidValueError(' with text')
    }
    expect(InvalidValueErrorTextTest).toThrowError('Invalid Value Inserted with text')

    function OutOfBounceErrorTest(){
        throw new OutOfBounceError()
    }
    expect(OutOfBounceErrorTest).toThrowError('Invalid Index given')
    
    function OutOfBounceErrorTextTest(){
        throw new OutOfBounceError(' with text')
    }
    expect(OutOfBounceErrorTextTest).toThrowError('Invalid Index given with text')
    
    function InvalidMoveErrorTest(){
        throw new InvalidMoveError()
    }
    expect(InvalidMoveErrorTest).toThrowError('Invalid Move')

    function InvalidMoveErrorTextTest(){
        throw new InvalidMoveError(' with text')
    }
    expect(InvalidMoveErrorTextTest).toThrowError('Invalid Move with text')
    
   

})