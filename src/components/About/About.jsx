import React from "react";
import portrait from "../../images/aboutMe.jpg";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function About() {
  return (
    <div className="section_about">
      <div className="Frame">
        <div className="textFrame-description">
          <h2>About</h2>
          <h4>Subtitle</h4>
          <p>
            "This proposal started from the concern about a sharp decline of
            wild oysters in Apalachicola Bay. Through a mapping investigation,
            the Jim Woodruff Dam, controlled by Georgia State, caught my
            attention. By analyzing the dam inflow & discharge historical data,
            I found it blocks a tremendous amount of fresh water from flowing
            into the Apalachicola River since 2010.",
            <br />,
            <br />, "According to locals, the best growing season for the oyster
            is from September to April because of the cooling water. However,
            the upper stream inflow and the dam discharge during this period are
            seriously out of synchronization. Not only oysters, but productive
            species like Nyssa Ogeche and their habitat are all suffering from
            the dry river.",
            <br />,
            <br />, "Is justice 40 too binary (divide communities into
            advantaged and disadvantaged groups matching to rough aid program) ?
            How could we make up a disadvantaged community such as Apalachicola
            without considering its overharvesting impact on the ecosystem?
            People in Apalachicola pay a 56 million dollar legal fee for the
            water fight with Georgia and had few efforts in healing its
            freshwater shortage problem. How could we effectively help it escape
            from the vicious circle caused by regional limitations?",
            <br />,
            <br />, "This proposal introduces a new aquaculture infrastructure
            and designs the shoreline as a productive landscape along the city.
            Residents and tourists are invited to participate in this cultural
            landscape. It tends to create new opportunities for local
            industry.",
            <br />,
            <br />, "The modulized infrastructure design is a concept of
            adaptive design. Landscape not only serves as a space but also as a
            tool for participants to get delicate feedback on the ecosystem. To
            oyster farmers, it represents the base of their productive decision.
            To others, it represents how we experience the culture. To all of
            us, it represents how we escape from ecosystem dilemmas.",
            <br />,
            <br />, "The modulized infrastructure design is a concept of
            adaptive design. Landscape not only serves as a space but also as a
            tool for participants to get delicate feedback on the ecosystem. To
            oyster farmers, it represents the base of their productive decision.
            To others, it represents how we experience the culture. To all of
            us, it represents how we escape from ecosystem dilemmas.",
            <br />, "The modulized infrastructure design is a concept of
            adaptive design. Landscape not only serves as a space but also as a
            tool for participants to get delicate feedback on the ecosystem. To
            oyster farmers, it represents the base of their productive decision.
            To others, it represents how we experience the culture. To all of
            us, it represents how we escape from ecosystem dilemmas.",
            <br />, "The modulized infrastructure design is a concept of
            adaptive design. Landscape not only serves as a space but also as a
            tool for participants to get delicate feedback on the ecosystem. To
            oyster farmers, it represents the base of their productive decision.
            To others, it represents how we experience the culture. To all of
            us, it represents how we escape from ecosystem dilemmas.",
            <br />, "The modulized infrastructure design is a concept of
            adaptive design. Landscape not only serves as a space but also as a
            tool for participants to get delicate feedback on the ecosystem. To
            oyster farmers, it represents the base of their productive decision.
            To others, it represents how we experience the culture. To all of
            us, it represents how we escape from ecosystem dilemmas.",
          </p>
        </div>
      </div>

      <div className="Frame">
        <div className="gallery_grid_A">
          <Zoom>
            <img src={portrait} className="portrait" alt="portrait" />
          </Zoom>
          <img src={portrait} className="portrait" alt="portrait" />
          <img src={portrait} className="portrait" alt="portrait" />
          <img src={portrait} className="portrait" alt="portrait" />
          <img src={portrait} className="portrait" alt="portrait" />
        </div>
      </div>
    </div>
  );
}
