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
    if (!this.state.grid[location]) {
      const newGrid = this.state.grid.slice();
      let nextPlayer = "";
      if (this.state.player === "X") {
        nextPlayer = "O"
      } else {
        nextPlayer = "X"
      }
      newGrid[location] = nextPlayer; 
      this.setState({grid: newGrid, player: nextPlayer}, this.checkForWin);
    }
  }

  checkForWin(){
    const grid = this.state.grid;    
    WinStates.forEach(function(winState){
      if (grid[winState[0]] === "X" && grid[winState[1]] === "X" && grid[winState[2]] ==="X") {  
        setTimeout(()=>{this.resetState()}, 2000);
        this.setState({winner: "X"});
      }
      if (grid[winState[0]] === "O" && grid[winState[1]] === "O" && grid[winState[2]] ==="O") {
        setTimeout(()=>{this.resetState()}, 2000);
        this.setState({winner: "O"});

      }
    }.bind(this))
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