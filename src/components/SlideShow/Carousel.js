import React, { Component } from "react";
import Slideshow from "./Slideshow";
import slide1 from "./assets/baker.jpg";
import slide2 from "./assets/levbell-fantasy-undervalued.jpg";
import slide3 from "./assets/qbs.jpeg";
import slide4 from "./assets/fantasyfootball.jpeg";
import slide5 from "./assets/chiefs.jpg";
import slide6 from "./assets/teams.jpg";
import slide7 from "./assets/Packers-at-Bears-Game-preview-best-fantasy-football-options.jpg";

const s = {
  container: "screenW screenH dGray col",
  header: "flex1 fCenter fSize2",
  main: "flex8 white",
  footer: "flex1 fCenter"
};

const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];

class Carousel extends Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.main}>
          <Slideshow slides={slides} />
        </div>
      </div>
    );
  }
}

export default Carousel;
