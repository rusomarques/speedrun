import { actionTypes } from './actions';

export const initState = {
  games: null
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_GAMES_SUCCESS:
      return {
        ...state,
        games: action.data
      };
    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error }
      };
    default:
      return state;
  }
};

export default reducer;
