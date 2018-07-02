import _ from 'lodash'

class InvalidValueError extends Error {
    constructor(props){ super('Invalid Value Inserted' + ((props) ? props : ''))}
}
class OutOfBounceError extends Error{
    constructor(props) { super('Invalid Index given' + ((props) ? props : '')) }
}
class InvalidMoveError extends Error {
    constructor(props){ super('Invalid Move' + ((props) ? props : ''))}
}

class Board {
    board = null
    constructor(board){
        if(board){ this.board = _.cloneDeep(board.board); return;}
        const scopes = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        this.board = Array.from({length: 9}, () => { return Array.from({length: 9}, () => ({value:null, scope: scopes}))})
    }

    get = (x, y) => this.board[x][y]
    set = (x, y, value) => {
     
        //validation
        if(value < 1 || value > 9) throw new InvalidValueError()
        if(x < 0 || x >= this.board.length) throw new OutOfBounceError()
        if(y < 0 || y >= this.board[x].length) throw new OutOfBounceError()
        if(!this.board[x][y].scope.includes(value)) throw new InvalidMoveError(`Try to set ${value} on ${x} ${y} but it has only [${this.board[x][y].scope.join()}] allowed`)
        //assign value
        this.board[x][y].value = value
        this.board[x][y].scope = _.difference(this.board[x][y].scope, [value])
        //adjust nearby scopes
        //remove from x line
        for (let i = 0; i < this.board.length; i++) {
           this.board[i][y].scope = _.difference(this.board[i][y].scope, [value])
        }
        //remove from y line
        for (let i = 0; i < this.board[x].length; i++) {
            this.board[x][i].scope = _.difference(this.board[x][i].scope, [value])
        }
        //remove from one-third of the field
        for (let i = x - (x%3); i < x + 3-(x%3) ; i++) {
            for (let j = y - (y%3); j < y + 3-(y%3) ; j++) {
                
                this.board[i][j].scope = _.difference(this.board[i][j].scope, [value])
            }
        }
        return this.board[x][y]
    }

    toString = () => {
        return (this.board.map((row) => {
            return row.map((field) => '[' + (field.value != null ? field.value : ' ') + ']').join(' ')
        }).join('\n'))
    }
}

export {Board, InvalidValueError, OutOfBounceError, InvalidMoveError}