import React from 'react';
import Cell from './Cell';

const Grid = ({grid}) => {

  const cells = grid.map(function(cell, index){
    return <Cell key={index}/>
  })

  console.log(cells);

  return(
    <div id="grid">
    {cells}
    </div>
  )

}

export default Grid;