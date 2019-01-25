import React from 'react';

const Game = props => (
  <React.Fragment>
    <div className="card bg-light game">
      <img
        src={props.gameDetails.assets['cover-medium'].uri}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{props.gameDetails.names.international}</h5>
      </div>
    </div>

    <style jsx>{`
      .game {
        width: 25vh;
        margin: 1em;
        cursor: pointer;
      }
      img {
        min-height: 150px;
      }
    `}</style>
  </React.Fragment>
);

export default Game;
