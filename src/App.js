import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import SudokuSolver from './classes/SudokuSolver'
import BoardView from './components/Board'
class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      sudoku : new SudokuSolver()
    }

    this.state.sudoku.set(0, 1, 2)
    this.state.sudoku.set(0, 2, 6)
    this.state.sudoku.set(0, 6, 8)
    this.state.sudoku.set(0, 7, 1)
    this.state.sudoku.set(1, 0, 3)
    this.state.sudoku.set(1, 3, 7)
    this.state.sudoku.set(1, 5, 8)
    this.state.sudoku.set(1, 8, 6)
    this.state.sudoku.set(2, 0, 4)
    this.state.sudoku.set(2, 4, 5)
    this.state.sudoku.set(2, 8, 7)
    this.state.sudoku.set(3, 1, 5)
    this.state.sudoku.set(3, 3, 1)
    this.state.sudoku.set(3, 5, 7)
    this.state.sudoku.set(3, 7, 9)
    this.state.sudoku.set(4, 2, 3)
    this.state.sudoku.set(4, 3, 9)
    this.state.sudoku.set(4, 5, 5)
    this.state.sudoku.set(4, 6, 1)
    this.state.sudoku.set(5, 1, 4)
    this.state.sudoku.set(5, 3, 3)
    this.state.sudoku.set(5, 5, 2)
    this.state.sudoku.set(5, 7, 5)
    this.state.sudoku.set(6, 0, 1)
    this.state.sudoku.set(6, 4, 3)
    this.state.sudoku.set(6, 8, 2)
    this.state.sudoku.set(7, 0, 5)
    this.state.sudoku.set(7, 3, 2)
    this.state.sudoku.set(7, 5, 4)
    this.state.sudoku.set(7, 8, 9)
    this.state.sudoku.set(8, 1, 3)
    this.state.sudoku.set(8, 2, 8)
    this.state.sudoku.set(8, 6, 4)
    this.state.sudoku.set(8, 7, 6)
  }
  
  solveNext = () => {
    const iterator = this.state.sudoku.findNext()
    const result = iterator.next()

    if(result.done) return
    console.log(result.value)
    this.state.sudoku.set(result.value.x, result.value.y, result.value.scope.shift())
    this.setState({sudoku : this.state.sudoku})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to SudokuSolver</h1>
        </header>
        <BoardView board={this.state.sudoku}></BoardView>
        <button onClick={this.solveNext}>Solve Next</button>
      </div>
    );
  }
}

export default App;