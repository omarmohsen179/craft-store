import { useRef, useState } from "react";
import { Card, Form, CardBody, CardHeader } from "reactstrap";
import LoadingPanel from "../../../Components/LoadingPanel";
import AutomaticSlider from "./Components/AutomaticSlider";
import HomeItems from "./Components/HomeItems";
import HomeSlider from "./Components/HomeSlider";

function Web() {
  const tabs = useRef([
    { id: "one-tab", href: "#one", label: "Automatic Slider" },
    { id: "two-tab", href: "#two", label: "Home Items" },
    { id: "three-tab", href: "#three", label: "Home Slider" },
  ]);
  const [loading, setloading] = useState(false);
  return (
    <Form style={{ padding: 20 }}>
      <Card className="card-user">
        <div class="row">
          <div
            class="col-5"
            style={{ backgroundColor: "transparent", width: "100%" }}
          >
            <div class="card mt-3 tab-card">
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
              <LoadingPanel
                loading={loading}
                onHiding={() => setloading(false)}
              />
              <div class="tab-content">
                <div
                  class="tab-pane fade show active p-3"
                  id="one"
                  role="tabpanel"
                  aria-labelledby="one-tab"
                >
                  <AutomaticSlider setloading={setloading} />
                </div>
                <div
                  class="tab-pane fade p-3"
                  id="two"
                  role="tabpanel"
                  aria-labelledby="two-tab"
                >
                  <HomeItems setloading={setloading} />
                </div>
                <div
                  class="tab-pane fade p-3"
                  id="three"
                  role="tabpanel"
                  aria-labelledby="three-tab"
                >
                  <HomeSlider setloading={setloading} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Form>
  );
}

export default Web;
