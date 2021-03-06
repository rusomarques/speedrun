import React from 'react';

import moment from 'moment';
import 'moment-duration-format';

const RunInfo = ({ runInfo }) => (
  <div>
    <h1>Player: {runInfo.playerName}</h1>
    <h1>Time: {moment.duration(runInfo.time, 'seconds').format('h:mm:ss')}</h1>
    <button className="btn btn-light">
      <a href={runInfo.videoUrl}>Watch it on YouTube</a>
    </button>
  </div>
);

export default RunInfo;
