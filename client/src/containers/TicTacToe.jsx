import React from 'react';
import Grid from '../components/Grid';
import WinStates from '../WinStates';

class TicTacToe extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      grid: [
        null,null,null, null, null, null, null, null, null
      ],
      player: "X",
      winMessage: ""
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
        this.setState({winMessage: "X WINS!"});
        setTimeout(()=>{this.resetState()}, 2000);
      }
      if (grid[winState[0]] === "O" && grid[winState[1]] === "O" && grid[winState[2]] ==="O") {
        this.setState({winMessage: "O WINS!"}); 
        setTimeout(()=>{this.resetState()}, 2000);
      }
    }.bind(this))
  }

  resetState(){
    this.setState({
      grid: [
        null, null, null, null, null, null, null, null, null
      ],
      player: "X",
      winMessage: ""
    })
  }

  render(){
    return (
      <Grid
        grid={this.state.grid}
        takeCell={this.takeCell}
        winMessage={this.state.winMessage}
      />
    )
  }
}

export default TicTacToe;