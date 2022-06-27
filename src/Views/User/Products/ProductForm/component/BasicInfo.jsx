import SquaredInput from "../../../../../Components/SquaredInput";
import InputTwoLanguages from "../../../../../Components/InputTwoLanguages/InputTwoLanguages";

function BasicInfo({ values, HandleChange }) {
  return (
    <div>
      <InputTwoLanguages
        id="name"
        label="Product Name"
        value={values?.name}
        valueEn={values?.name_en}
        enDisabled
        DisabledAnotherLangue
      />

      <SquaredInput
        label={"Category"}
        name="Category"
        value={values["category"]}
        required
        disabled
      />
      <SquaredInput
        label={"max quantity for user"}
        handleChange={HandleChange}
        name="max_quantity_for_user"
        value={values["max_quantity_for_user"]}
        type={"number"}
        required
      />
      <SquaredInput
        label={"price"}
        handleChange={HandleChange}
        name="price"
        value={values["price"]}
        type={"number"}
        required
      />
    </div>
  );
}

export default BasicInfo;
