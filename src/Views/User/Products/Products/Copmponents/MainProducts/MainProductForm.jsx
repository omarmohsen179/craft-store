// import React, {
//   useCallback,
//   useEffect,
//   useMemo,
//   useRef,
//   useState,
// } from "react";
// import {
//   Button,
//   CardBody,
//   CardFooter,
//   Col,
//   FormGroup,
//   Row,
//   TabContent,
//   TabPane,
// } from "reactstrap";
// import { MainProductData } from "../../Products";
// import InputTwoLanguages from "../../../../SharedComponents/AdminPanel/InputTwoLanguages/InputTwoLanguages";

// interface Props {
//   data: MainProductData | undefined;
//   onSubmit: (formData: MainProductData) => void;
//   onCancel: () => void;
// }

// const MainProductForm: React.FC<Props> = ({ onSubmit, onCancel, data }) => {
//   const partnerlInitValues = useRef<MainProductData>({
//     id: 0,
//     title: "",
//     titleEn: "",
//     description: "",
//     DescriptionEn: "",
//   });

//   const [mainProduct, setMainProduct] = useState<MainProductData>(
//     partnerlInitValues.current
//   );

//   useEffect(() => {
//     data && setMainProduct(data);
//   }, []);

//   //
//   const updateControl = useCallback((value, id) => {
//     setMainProduct((prev) => ({ ...prev, [id]: value }));
//   }, []);

//   const isNotValid = useMemo(() => {
//     for (var value of Object.values(mainProduct)) {
//       if (!value.toString()) {
//         return true;
//       }
//     }
//     return false;
//   }, [mainProduct]);

//   // submit form
//   const addHandle = useCallback(() => {
//     setMainProduct(partnerlInitValues.current);

//     onSubmit(mainProduct);
//   }, [mainProduct, onSubmit]);

//   // cancel form
//   const cancelForm = useCallback(() => {
//     setMainProduct(partnerlInitValues.current);
//     onCancel();
//   }, [onCancel]);

//   return (
//     <>
//       <CardBody>
//         <TabContent className="mt-3">
//           <TabPane>
//             <InputTwoLanguages
//               id="partnerDescription"
//               label="mainProduct Description"
//               onValueChange={updateControl}
//               value={mainProduct.title}
//               valueEn={mainProduct.titleEn}
//             />
//             <InputTwoLanguages
//               id="partnerDescription"
//               label="mainProduct Description"
//               onValueChange={updateControl}
//               value={mainProduct.description}
//               valueEn={mainProduct.DescriptionEn}
//             />
//           </TabPane>
//         </TabContent>
//       </CardBody>
//       <CardFooter>
//         <div className="button-container">
//           <Row>
//             <Col style={{ width: "170px" }}>
//               <Button
//                 className="btn btn btn-success col-12"
//                 disabled={isNotValid}
//                 onClick={addHandle}
//               >
//                 Add
//               </Button>
//             </Col>
//             <Col style={{ width: "170px" }}>
//               <Button className=" btn btn-danger col-12" onClick={cancelForm}>
//                 Cancel
//               </Button>
//             </Col>
//           </Row>
//         </div>
//       </CardFooter>
//     </>
//   );
// };

// export default MainProductForm;

import React from "react";

function MainProductForm() {
  return <div></div>;
}

export default MainProductForm;
