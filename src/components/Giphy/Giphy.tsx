import React from "react";
import "./styles.css";

interface GiphyProps {
  key: string;
  src: string;
  alt: string;
}

export const Giphy = (props: GiphyProps): JSX.Element => {
  return (
    <img
      key={props.key}
      src={props.src}
      alt={props.alt}
      className="giphy-image"
    />
  );
}