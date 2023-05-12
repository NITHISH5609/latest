import React, { useState } from "react";
import Tesseract from "tesseract.js";
import DisplayLoadedImage from "./DisplayLoadedImage";
import ShowResult from "./ShowResult";
export const ImageContext = React.createContext();

const GetImage = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [result, setResult] = useState("");
  const [isScanning, setIsScanning] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    e.preventDefault();
    reader.onload = (event) => {
      setImageUrl(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleScan = async () => {
    setIsScanning(true);
    const {
      data: { text },
    } = await Tesseract.recognize(imageUrl);
    setResult(text);
    setIsScanning(false);
  };

  return (
    <ImageContext.Provider value={{ image: imageUrl, response: result }}>
      <div>
        <h1>OCR App</h1>
        <input type='file' onChange={handleImageUpload} accept='image/*' />
        <button onClick={handleScan} disabled={isScanning || !imageUrl}>
          Scan
        </button>
        <DisplayLoadedImage />
        <ShowResult />
      </div>
    </ImageContext.Provider>
  );
};

export default GetImage;
