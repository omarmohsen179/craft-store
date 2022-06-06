const SearchFormPopup = ({ list }) => (
  <div
    style={{
      margin: " 5% 0",
      border: "1px solid black",
      backgroundColor: "white",
    }}
  >
    {list.map((ele, index) => (
      <div key={index} style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
          }}
        >
          <img style={{ margin: "auto" }} src={ele.ImagePath} alt="log" />
        </div>
        <div>
          <p>{ele.name} </p>
          <div>{ele.price}</div>
        </div>
      </div>
    ))}
  </div>
);
export default SearchFormPopup;
