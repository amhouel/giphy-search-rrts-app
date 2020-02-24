import React, { useState } from "react";
import "./styles.css";

interface SearchInputProps {
  onClick(search: string): void;
  placeholder: string;
}

export const SearchInput = (props: SearchInputProps): JSX.Element => {
  const [search, setSearch] = useState<string>("");

  return (
  <div className="search-input-container">
      <input className="search-input" name="search" onChange={event => setSearch(event.target.value)} placeholder={props.placeholder}/>
    <button className="search-button" onClick={() => props.onClick(search)}>Search</button>
  </div>
)
};
