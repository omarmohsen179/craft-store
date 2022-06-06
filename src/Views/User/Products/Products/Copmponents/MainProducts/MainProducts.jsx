import React, {
  FC,
  useState,
  useCallback,
  useMemo,
  useEffect,
  useRef,
} from "react";
import { useHistory } from "react-router-dom";
// React-Strap
import { Card, Form, CardBody, CardHeader } from "reactstrap";
import ControlsTable from "../ControlsTable/ControlsTable";
import "devextreme/dist/css/dx.light.css";
// Components

// import { Status } from "../ControlsTable/Enums";
// import MainProductForm from "../../Copmponents/MainProducts/MainProductForm";

// import { ProductBasicsInformation } from "../ControlsTable/Interfaces";
import axios, { AxiosRequestConfig } from "axios";
import { useTranslation } from "react-i18next";
import SquaredInput from "../../../../../../Components/SquaredInput";
import UploadImageButton from "../../../../../../Components/UploadImageButton/UploadImageButton";
import InputTwoLanguages from "../../../../../../Components/InputTwoLanguages/InputTwoLanguages";
import ProductForm from "./ProductForm";
// import { REQUEST } from "../../../../Services/callAPI";
// import { apiEndPoint } from "../../../../Services/config.json";

const MainProducts = ({ colAttributes }) => {
  const [Auth, setAuth] = useState("");

  const { t } = useTranslation();
  // const [itemToUpdate, setItemToUpdate] = useState();
  const [status, setStatus] = useState("IDLE");

  const [products, setProducts] = useState();

  const history = useHistory();

  const showForm = useMemo(() => {
    return status === "ADD" || status === "UPDATE";
  }, [status]);

  // useEffect(() => {
  // 	checkusertype().then((type) => {
  // 		setAuth(type);

  // 		let config: AxiosRequestConfig = {
  // 			method: "GET",
  // 			url: type === "SupperAdmin" ? "ProductIdentity" : "Products",
  // 		};

  // 		REQUEST(config).then((response: any) => {
  // 			if (response.length > 0 && response[0].Icon) {
  // 				response = response.map((item) => {
  // 					if (
  // 						item.Icon &&
  // 						!(item.Icon as string).includes(apiEndPoint)
  // 					) {
  // 						item.Icon = `${apiEndPoint}${item.Icon}`;
  // 					}
  // 					return item;
  // 				});
  // 			}
  // 			let _result = response as unknown as ProductBasicsInformation[];

  // 			setProducts(_result);
  // 		});
  // 	});
  // }, []);

  let redirectAdd = () => {
    setselectedItem(0);
  };

  let redirectEdit = (event) => {
    if (event.data?.Id) {
      setselectedItem(event.data?.Id);
    }
  };

  // let removeProduct = useCallback(
  // 	async (e) => {
  // 		e.cancel = true;
  // 		let config: AxiosRequestConfig = {
  // 			method: "DELETE",
  // 			url: "ProductIdentity/" + e.data.Id,
  // 			data: { Id: e.data.Id },
  // 		};

  // 		REQUEST(config)
  // 			.then(async () => {
  // 				if (products) {
  // 					let items = [...products];
  // 					items = items.filter((p) => p.Id !== e.data.Id);
  // 					setProducts([...items]);
  // 				}
  // 				setStatus(Status.IDLE);

  // 				await e.component.refresh(true);

  // 				e.component.cancelEditData();
  // 			})
  // 			.catch((error) => {
  // 				console.log(error);
  // 			});
  // 	},
  // 	[products]
  // );

  // let checkusertype: any = useCallback(
  // 	async function () {
  // 		let item = JSON.parse(localStorage.getItem("user") || "{}");

  // 		!item || !item.type
  // 			? history.push("/")
  // 			: await axios
  // 					.get(apiEndPoint + "/api/check-type", {
  // 						headers: {
  // 							...axios.defaults.headers,
  // 							Authorization: `bearer ${
  // 								JSON.parse(
  // 									localStorage.getItem("user") || "{}"
  // 								).token
  // 							}`,
  // 						},
  // 					})
  // 					.then((res) => {
  // 						return res[0] ? res[0] : "";
  // 					})
  // 					.catch((err) => {
  // 						history.push("/log-in");
  // 						localStorage.removeItem("user");
  // 						return "";
  // 					});
  // 		return item?.type ? item?.type[0] : "";
  // 	},
  // 	[history]
  // );

  const [isClicked, setIsClicked] = useState(false);
  const [selectedItem, setselectedItem] = useState(-1);

  const [hide, setHide] = useState(false);
  return (
    <Form style={{ padding: 20 }}>
      <Card className="card-user">
        <CardHeader>
          <h4>{t("Products")}</h4>
        </CardHeader>
        <CardBody>
          <ControlsTable
            disabled={showForm}
            colAttributes={colAttributes}
            dataSource={products}
            onAddButtonClicked={() => {
              setIsClicked(true);
              setHide(false);
              redirectAdd();
            }}
            onRowDoubleClick={redirectEdit}
            // onRowRemoving={removeProduct}
            allowAdd
            allowDelete
          />
        </CardBody>
      </Card>
      {selectedItem >= 0 && (
        <ProductForm
          hide={hide}
          setHide={setHide}
          isClicked={isClicked}
          value={selectedItem}
        />
      )}

      {/* <button
        onClick={() => setIsClicked(!isClicked)}
        style={{ marginLeft: "300px", marginTop: "200px" }}
      >
        Add product
      </button> */}
    </Form>
  );
};

export default React.memo(MainProducts);
