import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import Image from "../Image";
import TitleHeader from "../TitleHeader";
import "./index.css";
function CategoryList({ data = [], style, title }) {
  const datax = [
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/wysiwyg/prepaid-cards/logos/GooglePlay-logo.jpg",
    },
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/wysiwyg/prepaid-cards/logos/itunes-logo.jpg",
    },
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/wysiwyg/prepaid-cards/logos/Playstation-logo.jpg",
    },
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/wysiwyg/prepaid-cards/logos/Minecraft-logo.jpg",
    },
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/wysiwyg/prepaid-cards/logos/skype-logo.jpg",
    },
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/wysiwyg/prepaid-cards/logos/GooglePlay-logo.jpg",
    },
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/wysiwyg/prepaid-cards/logos/itunes-logo.jpg",
    },
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/wysiwyg/prepaid-cards/logos/Playstation-logo.jpg",
    },
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/wysiwyg/prepaid-cards/logos/Minecraft-logo.jpg",
    },
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/wysiwyg/prepaid-cards/logos/skype-logo.jpg",
    },
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/wysiwyg/prepaid-cards/logos/GooglePlay-logo.jpg",
    },
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/wysiwyg/prepaid-cards/logos/itunes-logo.jpg",
    },
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/wysiwyg/prepaid-cards/logos/Playstation-logo.jpg",
    },
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/wysiwyg/prepaid-cards/logos/Minecraft-logo.jpg",
    },
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/wysiwyg/prepaid-cards/logos/skype-logo.jpg",
    },
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/wysiwyg/prepaid-cards/logos/GooglePlay-logo.jpg",
    },
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/wysiwyg/prepaid-cards/logos/itunes-logo.jpg",
    },
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/wysiwyg/prepaid-cards/logos/Playstation-logo.jpg",
    },
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/wysiwyg/prepaid-cards/logos/Minecraft-logo.jpg",
    },
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/wysiwyg/prepaid-cards/logos/skype-logo.jpg",
    },
  ];
  let history = useHistory();
  const { t, i18n } = useTranslation();
  return (
    <div
    id="/#cat"
      className=" main-category-container"
      style={({ backgroundColor: "#e8e8e8" }, style)}
    >
      {title ? <TitleHeader title={t(title)} /> : null}
      <div
        className="row"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {datax.map((ele, index) => (
          <div
            onClick={() => {
              history.push("/list?q=None&c=categoryName");
            }}
            style={{ width: "120px" }}
            key={index}
            className="border-item"
          >
            <Image src={ele.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
