import React from 'react';

const RunInfo = ({ runInfo }) => (
  <div>
    <h1>Player: {runInfo.playerName}</h1>
    <h1>Time: {runInfo.time}</h1>
    <button className="btn btn-light">
      <a href={runInfo.videoUrl}>Watch it on YouTube</a>
    </button>
  </div>
);

export default RunInfo;
