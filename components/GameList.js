import React from 'react';
import Game from './Game';

const GameList = props => {
  let gameList = null;
  if (props.games) {
    gameList = props.games.map(game => {
      return (
        <div key={game.id}>
          <Game gameDetails={game} />
        </div>
      );
    });
  }

  return <div className="card-group">{gameList}</div>;
};

export default GameList;
