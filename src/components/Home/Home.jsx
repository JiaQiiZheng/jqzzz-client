import React from "react";
import homeImg from "../../images/home/Autumn in 2022.jpg";

export default function Home() {
  // console.log(homeImg);
  return (
    <div className="section_home">
      <img src={homeImg} className="home_img" alt="home_Img" />
    </div>
  );
}
