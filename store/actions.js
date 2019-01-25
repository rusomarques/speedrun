export const actionTypes = {
  LOAD_GAMES: 'LOAD_GAMES',
  LOAD_GAMES_SUCCESS: 'LOAD_GAMES_SUCCESS',
  FAILURE: 'FAILURE'
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
    type: actionTypes.FAILURE,
    error
  };
};
