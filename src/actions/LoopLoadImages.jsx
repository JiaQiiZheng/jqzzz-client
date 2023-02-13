import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import testImg from "../../src/images/works/Apalachicola_Aquaculture/compressed/B1_mapLayout.png";

const contextString = import.meta.glob([
  "/src/images/works/Apalachicola_Aquaculture/compressed/*.jpg",
  "/src/images/works/Apalachicola_Aquaculture/compressed/*.png",
]);

function createImgSrcCode() {
  var imageUrl_arr = [];
  for (var path in contextString) {
    var imageUrl = new URL(path, import.meta.url).href;
    imageUrl_arr.push(imageUrl);
  }
  return imageUrl_arr;
}

export default function loopLoadImages() {
  const url_arr = createImgSrcCode();
  const all = url_arr.map((img) => {
    let projectImgUrl = new URL(img, import.meta.url).href;
    return (
      <Zoom>
        <pre>{testImg}</pre>
        <img src={testImg} className="projectImg" alt="image" />
      </Zoom>
    );
  });

  return all;
}
