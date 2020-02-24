import React from "react";
import "./styles.css";

interface GiphyListContainerProps {
  title: string;
  children: JSX.Element[] | JSX.Element;
}

export const GiphyListContainer = (
  props: GiphyListContainerProps
): JSX.Element => {
  return (
    <div className="giphy-container">
      <h2 className="giphy-list-title">{props.title}</h2>
      <div className="giphy-list">{props.children}</div>
    </div>
  );
};
