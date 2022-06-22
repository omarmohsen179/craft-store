import React, { useState } from "react";
import { ListGroupItem, Slider } from "shards-react";

function Sliders({ priceRange, handleChange }) {
  return (
    <ListGroupItem GroupItem className="px-3">
      <div className="mb-2 pb-1">
        <strong className="text-muted d-block">Price Range</strong>
        <br />
        {/* <Slider
        theme="success"
        className="my-4"
        connect={[true, false]}
        start={[85]}
        range={{ min: 0, max: 100 }}
        tooltips
      /> */}
        {/* <Slider
        theme="info"
        className="my-4"
        connect={[false, true]}
        start={[15]}
        range={{ min: 0, max: 100 }}
      /> */}
        <Slider
          connect
          start={priceRange}
          pips={{
            mode: "steps",
            stepped: true,
            density: 5,
          }}
          range={{ min: 0, max: 20000 }}
          onChange={(e) => handleChange(e)}
          tooltips
        />
      </div>
    </ListGroupItem>
  );
}

export default Sliders;
