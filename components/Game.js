import React from 'react';

const Game = props => (
  <div className="card bg-light game">
    <img
      src={props.gameDetails.assets['cover-medium'].uri}
      className="card-img-top"
    />
    <div className="card-body">
      <h5 className="card-title">{props.gameDetails.names.international}</h5>
    </div>
  </div>
);

export default Game;
