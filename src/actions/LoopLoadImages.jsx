import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const contextString = import.meta.glob([
  "../images/works/Apalachicola_Aquaculture/compressed/*.jpg",
  "../images/works/Apalachicola_Aquaculture/compressed/*.png",
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
    return (
      <Zoom>
        <img src={img} alt="image" />
      </Zoom>
    );
  });

  return all;
}
