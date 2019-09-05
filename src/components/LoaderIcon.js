import React from "react";
import "../styles/loader.scss";

function Loader() {
  return (
    <div class="box">
      <div class="shadow"></div>
      <div class="gravity">
        <div class="ball"></div>
      </div>
    </div>
  );
}

export default Loader;
