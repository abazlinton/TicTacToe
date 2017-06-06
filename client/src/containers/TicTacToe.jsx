import React from 'react';
import Grid from '../components/Grid';

class TicTacToe extends React.Component {

  constructor(props){
    super(props);
    this.state = {grid: [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]}
  }

  render(){
    return (
      <Grid
        grid={this.state.grid}
      />
    )
  }
}

export default TicTacToe;