import { useTranslation } from "react-i18next";
import TextEditorTwoLanguages from "../../../../../Components/TextEditorTwoLanguages/TextEditorTwoLanguages";
import InputTwoLanguages from "../../../../../Components/InputTwoLanguages/InputTwoLanguages";
import { useCallback } from "react";

function Description({ values, HandleChange }) {
  const { t } = useTranslation();

  return (
    <div>
      <InputTwoLanguages
        id="short_description"
        label="short description"
        value={values?.short_description}
        valueEn={values?.short_description_en}
        onValueChange={HandleChange}
      />
      <TextEditorTwoLanguages
        id="description"
        label={t("Description")}
        value={values.description}
        valueEn={values.descriptionEn}
        onValueChange={HandleChange}
      />
    </div>
  );
}

export default Description;
