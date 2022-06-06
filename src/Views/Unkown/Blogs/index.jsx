import React from "react";
import Image from "../../../Components/Image";

import "./index.css";
function Blogs() {
  const Tags = [
    { name: "Travel" },
    { name: "New York" },
    { name: "London" },
    { name: "IKEA" },
    { name: "Ideas" },
    { name: "Clothing" },
  ];
  const popular = [
    {
      image: "https://www.w3schools.com/w3images/woods.jpg",
      Title: "TITLE HEADING",
      subTitle: "Title description, ",
    },
    {
      image: "https://www.w3schools.com/w3images/woods.jpg",
      Title: "TITLE HEADING",
      subTitle: "Title description, ",
    },
    {
      image: "https://www.w3schools.com/w3images/woods.jpg",
      Title: "TITLE HEADING",
      subTitle: "Title description, ",
    },
    {
      image: "https://www.w3schools.com/w3images/woods.jpg",
      Title: "TITLE HEADING",
      subTitle: "Title description, ",
    },
  ];
  const mainpost = [
    {
      image: "https://www.w3schools.com/w3images/woods.jpg",
      Title: "TITLE HEADING",
      subTitle: "Title description, ",
      date: "April 7, 2014",
      details:
        "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
    },
    {
      image: "https://www.w3schools.com/w3images/woods.jpg",
      Title: "TITLE HEADING",
      subTitle: "Title description, ",
      date: "April 7, 2014",
      details:
        "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
    },
    {
      image: "https://www.w3schools.com/w3images/woods.jpg",
      Title: "TITLE HEADING",
      subTitle: "Title description, ",
      date: "April 7, 2014",
      details:
        "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
    },
  ];
  return (
    <>
      <header className="w3-container w3-center w3-padding-32">
        <h1>
          <b>MY BLOG</b>
        </h1>
        <p>
          Welcome to the blog of <span className="w3-tag">X</span>
        </p>
      </header>
      <div className="w3-row">
        <div className="w3-col l8 s12">
          {mainpost.map((ele) => (
            <div className="w3-card-4 w3-margin w3-white">
              {" "}
              <Image src={ele.image} alt="Nature" />
              <div className="w3-container">
                <h3>
                  <b>{ele.Title}</b>
                </h3>
                <h5>
                  {ele.subTitle} <span className="w3-opacity">{ele.date}</span>
                </h5>
              </div>
              <div className="w3-container">
                <p>{ele.details}</p>
                <div className="w3-row">
                  <div className="w3-col m8 s12">
                    <p>
                      <button className="w3-button w3-padding-large w3-white w3-border">
                        <b>READ MORE »</b>
                      </button>
                    </p>
                  </div>
                  <div className="w3-col m4 w3-hide-small">
                    <p>
                      <span className="w3-padding-large w3-right">
                        <b>Comments  </b> <span className="w3-tag">0</span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <hr />
        </div>
        <div className="w3-col l4">
          <div className="w3-card w3-margin w3-margin-top">
            <img
              src="https://www.w3schools.com/w3images/woods.jpg"
              style={{ width: "100%" }}
            />
            <div className="w3-container w3-white">
              <h4>
                <b>My Name</b>
              </h4>
              <p>
                Just me, myself and I, exploring the universe of uknownment. I
                have a heart of love and a interest of lorem ipsum and mauris
                neque quam blog. I want to share my world with you.
              </p>
            </div>
          </div>
          <hr />
          <div className="w3-card w3-margin">
            <div className="w3-container w3-padding">
              <h4>Popular Posts</h4>
            </div>
            <ul className="w3-ul w3-hoverable w3-white">
              {popular.map((ele) => (
                <li className="w3-padding-16">
                  <img
                    src={ele.image}
                    alt="Image"
                    className="w3-left w3-margin-right"
                    style={{ width: "50px" }}
                  />
                  <span className="w3-large">{ele.Title} </span>
                  <br />
                  <span>{ele.subTitle} </span>
                </li>
              ))}
            </ul>
          </div>
          <hr />

          <div className="w3-card w3-margin">
            <div className="w3-container w3-padding">
              <h4>Tags</h4>
            </div>
            <div className="w3-container w3-white">
              <p>
                {Tags.map((ele, index) => (
                  <span
                    className={
                      index === 0
                        ? "w3-tag w3-black w3-margin-bottom"
                        : "w3-tag w3-light-grey w3-small w3-margin-bottom"
                    }
                  >
                    {ele.name}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

export default Blogs;
