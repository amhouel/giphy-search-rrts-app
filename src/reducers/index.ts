import { combineReducers } from "redux";
import { giphysReducer } from "./giphys";
import { Giphy } from "../actions";

export interface StoreState {
  giphys: {
    trendingGiphys: Giphy[];
    searchGiphys: Giphy[] | null;
  };
}

export const reducers = combineReducers<StoreState>({
  giphys: giphysReducer
});
