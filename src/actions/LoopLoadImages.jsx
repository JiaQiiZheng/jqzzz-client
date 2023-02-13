import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import testImg from "../images/works/Apalachicola_Aquaculture/compressed/A1_collage.jpg";

const contextString = import.meta.glob([
  "/src/images/works/Apalachicola_Aquaculture/compressed/*.jpg",
  "/src/images/works/Apalachicola_Aquaculture/compressed/*.png",
]);

function createImgSrcCode() {
  var imageUrl_arr = [];
  for (var path in contextString) {
    var imageUrl = new URL(path, import.meta.url).href;
    const imageName = imageUrl.split("/").pop();
    imageUrl_arr.push(imageName);
  }
  return imageUrl_arr;
}

export default function loopLoadImages() {
  const url_arr = createImgSrcCode();
  const all = url_arr.map((img) => {
    // let projectImgUrl = new URL(img, import.meta.url).href;
    // console.log(projectImgUrl);
    const imageAssetPath = `/assets/${img}`;
    return (
      <Zoom>
        <img src={imageAssetPath} alt="image" />
      </Zoom>
    );
  });

  return all;
}
