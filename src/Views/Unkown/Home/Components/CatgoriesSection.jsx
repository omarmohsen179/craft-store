import React from "react";
import TitleHeader from "../../../../Components/TitleHeader";

function CategoriesSection({ image }) {
  const data = [
    {
      image: "	https://craft-store.ly/wp-content/uploads/2021/09/006-drone.png",
      title: "Drones",
    },
    {
      image: "https://craft-store.ly/wp-content/uploads/2021/09/002-camera.png",
      title: "Drones",
    },
    {
      image: "https://craft-store.ly/wp-content/uploads/2021/11/lan.png",
      title: "Drones",
    },
    {
      image: "https://craft-store.ly/wp-content/uploads/2021/11/lighting.png",
      title: "Drones",
    },
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/wysiwyg/prepaid-cards/logos/skype-logo.jpg",
      title: "Drones",
    },
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/wysiwyg/prepaid-cards/logos/GooglePlay-logo.jpg",
      title: "Drones",
    },
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/wysiwyg/prepaid-cards/logos/itunes-logo.jpg",
      title: "Drones",
    },
  ];
  return (
    <div style={{ marginTop: 10 }}>
      <TitleHeader title="Categories" />
      <div className="categories-cont">
        {data.map((el) => (
          <div id="card">
            <img src={el.image} alt="pic"></img>
            <label>{el.title}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesSection;