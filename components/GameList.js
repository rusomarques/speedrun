import React from 'react';
import Link from 'next/link';

import Game from './Game';

const GameList = props => {
  let gameList = null;
  if (props.games) {
    gameList = props.games.map(game => {
      return (
        <Link key={game.id} href={`/run?gameId=${game.id}`}>
          <div>
            <Game gameDetails={game} />
          </div>
        </Link>
      );
    });
  }

  return (
    <React.Fragment>
      <div id="game-list" className="card-group">
        {gameList}
      </div>
      <style jsx>{`
        #game-list {
          justify-content: space-evenly;
          margin-top: 20px;
        }
      `}</style>
    </React.Fragment>
  );
};

export default GameList;
