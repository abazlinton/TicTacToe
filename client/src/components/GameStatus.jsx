import React from 'react';

const GameStatus = ({winner}) => {

  if (!winner) return null;

  return (
    <h1>
      {winner} WINS!
    </h1>
  )

}

export default GameStatus;