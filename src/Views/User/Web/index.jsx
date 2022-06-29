import { useRef } from "react";
import AutomaticSlider from "./Components/AutomaticSlider";
import HomeItems from "./Components/HomeItems";
import HomeSlider from "./Components/HomeSlider";

function Web() {
  const tabs = useRef([
    { id: "one-tab", href: "#one", label: "Automatic Slider" },
    { id: "two-tab", href: "#two", label: "Home Items" },
    { id: "three-tab", href: "#three", label: "Home Slider" },
  ]);
  return (
    <>
      <div class="row">
        <div
          class="col-5"
          style={{ backgroundColor: "transparent", width: "100%" }}
        >
          <div class="card mt-3 tab-card" style={{ margin: 20 }}>
            <div class="card-header tab-card-header">
              <ul
                class="nav nav-tabs card-header-tabs"
                id="myTab"
                role="tablist"
              >
                {tabs.current.map((ele, index) => (
                  <li className={"nav-item"}>
                    <a
                      className={"nav-link "}
                      id={ele.id}
                      data-toggle="tab"
                      href={ele.href}
                      role="tab"
                      aria-controls="One"
                      aria-selected="true"
                    >
                      {ele.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div class="tab-content">
              <div
                class="tab-pane fade show active p-3"
                id="one"
                role="tabpanel"
                aria-labelledby="one-tab"
              >
                <AutomaticSlider />
              </div>
              <div
                class="tab-pane fade p-3"
                id="two"
                role="tabpanel"
                aria-labelledby="two-tab"
              >
                <HomeItems />
              </div>
              <div
                class="tab-pane fade p-3"
                id="three"
                role="tabpanel"
                aria-labelledby="three-tab"
              >
                <HomeSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Web;
