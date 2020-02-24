import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Giphy, fetchTrendingGiphys, searchGiphys } from "../../actions";
import { StoreState } from "../../reducers";
import { SearchInput } from "../SearchInput";
import { GiphyListContainer } from "../GiphyListContainer";
import { Giphy as GiphyImage } from "../Giphy";
import "./styles.css";

export const App = () => {
  const trendingGiphys: Giphy[] = useSelector(
    (state: StoreState) => state.giphys.trendingGiphys
  );
  const searchResults: Giphy[] | null = useSelector(
    (state: StoreState) => state.giphys.searchGiphys
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrendingGiphys());
  }, [dispatch]);

  const renderList = (giphys: Giphy[]): JSX.Element[] => {
    return giphys.map(giphy => {
      return (
        <GiphyImage
          key={giphy.id}
          src={`${giphy.images.fixed_height_small.url}`}
          alt={giphy.title}
        />
      );
    });
  };

  const onSearch = (search: string) => {
    dispatch(searchGiphys(search));
  };

  const title = searchResults
    ? searchResults.length
      ? "Your search results:"
      : "Sorry, no giphys found. Here's what's trending now:"
    : "Trending now:";
  
  return (
    <div className="app-container">
      <SearchInput placeholder="Search giphys" onClick={onSearch} />
      <GiphyListContainer title={title}>
        {searchResults
          ? searchResults.length
            ? renderList(searchResults)
            : renderList(trendingGiphys)
          : renderList(trendingGiphys)}
      </GiphyListContainer>
    </div>
  );
};
