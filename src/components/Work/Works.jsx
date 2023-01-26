import React from "react";
import Work_card from "./Work_card";

import data from "../../data/work_data/data";

export default function Works() {
  const cards = data.map((card) => {
    return <Work_card key={card.id} {...card} />;
  });

  return (
    <div className="section_works" id="section_works">
      {cards}
    </div>
  );
}
