import React from "react";
import DevidText from "../../../../Components/DevidText/DevidText";

function Intro() {
  const data = {
    title: "FIND THE PERFECT PROPERTY",
    body: "If you are searching for a commercial property or a single-family home for sale in Midland, Colorado City, Lamesa or Big Spring, TX, you have come to the right place. Our team of local realtors can help you find the perfect piece of real estate. If you haven’t already, browse through some property listings and if you find something you like, reach out to us! Contact us today for more information about commercial real estate listings or home selling tips!",
    title2: "GET IN TOUCH WITH US TODAY",
    body2:
      "If you have any questions about anything at all, do not hesitate to reach out to our team at Home Realtors. We’re here to help navigate you through the buying or renting process and would love to hear from you.",
  };
  return (
    <div className="intro-contactus-container container">
      <div className="title-intro">
        <DevidText text={data.title} />
      </div>
      <div>
        <div className="paragraph-intro ">{data.body}</div>
      </div>
      <div className="title-intro">
        <DevidText text={data.title2} />
      </div>
      <div>
        <div className="paragraph-intro ">{data.body2}</div>
      </div>
    </div>
  );
}

export default Intro;
