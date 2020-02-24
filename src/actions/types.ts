import { FetchGiphysAction, SearchGiphysAction } from "./giphys";
export enum ActionTypes {
  fetchTrendingGiphys,
  searchGiphys
}

export type Action = FetchGiphysAction | SearchGiphysAction;