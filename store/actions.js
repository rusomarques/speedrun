export const actionTypes = {
  LOAD_GAMES: 'LOAD_GAMES',
  LOAD_GAMES_SUCCESS: 'LOAD_GAMES_SUCCESS',
  LOAD_FAILURE: 'LOAD_FAILURE',
  LOAD_RUN: 'LOAD_RUN',
  LOAD_RUN_SUCCESS: 'LOAD_RUN_SUCCESS'
};

export const loadGames = () => {
  return { type: actionTypes.LOAD_GAMES };
};

export const loadGamesSuccess = data => {
  return {
    type: actionTypes.LOAD_GAMES_SUCCESS,
    data
  };
};

export const loadFailure = error => {
  return {
    type: actionTypes.LOAD_FAILURE,
    error
  };
};

export const loadRun = gameId => {
  return {
    type: actionTypes.LOAD_RUN,
    gameId
  };
};

export const loadRunSuccess = runInfo => {
  return {
    type: actionTypes.LOAD_RUN_SUCCESS,
    runInfo
  };
};
