import React from "react";
import { Link, Route, Routes } from "react-router-dom";

export default function work_card(props) {
  let card_image_src = new URL(
    `../../images/${props.card_image}`,
    import.meta.url
  ).href;
  let workLink = "/works/" + `${props.title}`;
  return (
    <Link to={workLink}>
      <card className="works_card">
        <img src={card_image_src} className="card_image" alt="card_image" />
        <h2 className="projectName">{props.projectName}</h2>
        <h4 className="year">{props.year}</h4>
        <p className="description">{props.description}</p>
      </card>
    </Link>
  );
}
