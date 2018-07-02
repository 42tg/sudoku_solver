import {Board} from './Board'
import _ from 'lodash'

class SudokuSolver extends Board{
    possibleValues = (x, y) => {
        try {
            return this.get(x,y).scope
        }
        catch (err){ throw err }
    }

    findNext = function*() {
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[i].length; j++) {
                if(this.possibleValues(i,j).length === 1)
                {
                    let field = this.get(i,j)
                    if(!field.value) {
                        yield { ..._.cloneDeep(this.get(i,j)), x: i, y: j}
                        i = 0; j = -1;
                    }
                }   
            }
        }
    }
    
    isSolved = () => { 
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[i].length; j++) {
                let test = this.get(i,j)
                if(test.value == null) return false
            }
        }
        return true
    }
}

export default SudokuSolver 