import React from 'react';
import Grid from '../components/Grid';

class TicTacToe extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      grid: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      player: "X"
    }
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
      this.setState({grid: newGrid, player: nextPlayer});
    }
  }

  render(){
    return (
      <Grid
        grid={this.state.grid}
        takeCell={this.takeCell}
      />
    )
  }
}

export default TicTacToe;