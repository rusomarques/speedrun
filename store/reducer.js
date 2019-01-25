import { actionTypes } from './actions';

export const initState = {
  games: null,
  run: null
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_GAMES_SUCCESS:
      return {
        ...state,
        games: action.data
      };
    case actionTypes.LOAD_FAILURE:
      return {
        ...state,
        ...{ error: action.error }
      };
    case actionTypes.LOAD_RUN_SUCCESS:
      return {
        ...state,
        run: action.runInfo
      };
    default:
      return state;
  }
};

export default reducer;
