import React from 'react';
import Cell from './Cell';

const Grid = ({grid, takeCell, winMessage}) => {

  const cells = grid.map(function(cell, index){
    return <Cell key={index} player={cell} location={index} takeCell={takeCell}/>
  })


  return(
    <div id="grid">
    {cells}
    <h3>{winMessage}</h3>
    </div>
  )

}

export default Grid;