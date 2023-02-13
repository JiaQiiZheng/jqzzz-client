import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

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
    console.log(projectImgUrl);
    return <img src={projectImgUrl} alt="image" />;
  });

  return all;
}
