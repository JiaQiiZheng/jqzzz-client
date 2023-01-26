import React from "react";
import LoopLoadImages from "../../actions/LoopLoadImages";
import data from "../../data/work_data/data";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const dataSet = data[0];
const title = dataSet.projectName;
const sub_title = dataSet.sub_title;
const paragraph = dataSet.paragraph;
const year = dataSet.year.toString();

export default function Work_Apalachicola() {
  return (
    <div className="work_Apalachicola">
      <div className="Frame">
        <div className="textFrame-description">
          <h2 id="title">{title}</h2>
          <h3 id="sub_title">{sub_title}</h3>
          <p id="paragraph">{paragraph}</p>
        </div>
      </div>
      <div className="Frame">
        <div className="gallery_grid_B">
          <LoopLoadImages />
        </div>
      </div>
    </div>
  );
}
