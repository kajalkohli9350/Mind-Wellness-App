import React from "react";

function Breathing() {
  return (
    <div className="card3">
      <div className="card3h3">
        <h3>Breathing Exercise</h3>
      </div>
      <div className="breathing-instruction">
        <p>Breathe In... Hold... Breathe Out...</p>
        <img
          src="https://png.pngtree.com/background/20210711/original/pngtree-yellow-flat-circle-background-promotion-main-map-picture-image_1093101.jpg"
          alt="Breathing Exercise"
        />
      </div>
      <div className="exercisebutton">
        <button>Start Exercise</button>
        <button>Pause Exercise</button>
      </div>
    </div>
  );
}

export default Breathing;
