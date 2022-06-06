import React from "react";
import clock from "../../../../Assets/contactus/clock.png";
import house from "../../../../Assets/contactus/house.png";
import phone from "../../../../Assets/contactus/phone.png";
function ContactUslist() {
  let data = [
    {
      title: "Address",
      details: "2011 S GREGG ST BIG SPRING, TX 79720",
      image: house,
    },
    {
      title: "Phone",
      details: "2011 S GREGG ST BIG SPRING, TX 79720",
      image: phone,
    },
    {
      title: "Clock",
      details: "2011 S GREGG ST BIG SPRING, TX 79720",
      image: clock,
    },
  ];
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div className="row contact-us-list-container container">
        {data.map((ele) => {
          return (
            <div className="col contact-us-info-element">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img className="image-container" src={ele.image} />
              </div>
              <div>
                <h2 style={{ fontWeight: 600 }}>{ele.title}</h2>
                <p>{ele.details}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ContactUslist;
