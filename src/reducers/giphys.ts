import { Giphy, ActionTypes, Action } from "../actions";

interface StateProps {
  trendingGiphys: Giphy[];
  searchGiphys: Giphy[] | null;
}

const initialState: StateProps = {
  trendingGiphys: [],
  searchGiphys: null
};

export const giphysReducer = (
  state: StateProps = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.fetchTrendingGiphys:
      return {
        ...state,
        trendingGiphys: action.payload
      };
    case ActionTypes.searchGiphys:
      return {
        ...state,
        searchGiphys: action.payload
      };
    default:
      return state;
  }
};
