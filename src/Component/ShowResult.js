import React, { useContext } from "react";
import { ImageContext } from "./GetImage";
const ShowResult = () => {
  const Context = useContext(ImageContext);
  return (
    <div>
      <h1>result screen</h1>
      <div>{Context.response ? <pre>{Context.response}</pre> : null}</div>
    </div>
  );
};

export default ShowResult;
