import React from 'react';
import Grid from '../components/Grid';
import GameStatus from '../components/GameStatus';
import WinStates from '../WinStates';

class TicTacToe extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      grid: [
        null,null,null, null, null, null, null, null, null
      ],
      player: "X",
      winner: null
    };
  
    this.takeCell = this.takeCell.bind(this);
  }

  takeCell(location){
    if (!this.state.grid[location] && !this.state.winner) {
      const newGrid = this.state.grid.slice();
      newGrid[location] = this.state.player;
      this.setState({grid: newGrid}, this.checkForWin);
    }
  }

  checkForWin(){
    const grid = this.state.grid;   
    const currentPlayer = this.state.player; 
    WinStates.forEach(function(winState){
      if (grid[winState[0]] === currentPlayer && grid[winState[1]] === currentPlayer && grid[winState[2]] === currentPlayer) {  
        setTimeout(()=>{this.resetState()}, 2000);
        this.setState({winner: currentPlayer});
      }
      this.nextTurn();
    }.bind(this))
    
  }

  nextTurn(){
    let nextPlayer = "";
    if (this.state.player === "X") {
      nextPlayer = "O"
    } else {
      nextPlayer = "X"
    } 
    this.setState({player: nextPlayer});
  }

  resetState(){
    this.setState({
      grid: [
        null, null, null, null, null, null, null, null, null
      ],
      player: "X",
      winner: null
    })
  }

  render(){
    return (
      <div>
        <Grid
          grid={this.state.grid}
          takeCell={this.takeCell}
        />
        <GameStatus
          winner={this.state.winner}
        />
      </div>
    )
  }
}

export default TicTacToe;