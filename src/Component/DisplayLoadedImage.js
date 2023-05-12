import React, { useContext } from "react";
import { ImageContext } from "./GetImage";
const DisplayLoadedImage = () => {
  const context = useContext(ImageContext);
  return (
    <div>
      <h1>LoadedImage</h1>
      {context.image ? <img src={context.image} alt='loadedImage' /> : null}
    </div>
  );
};

export default DisplayLoadedImage;
