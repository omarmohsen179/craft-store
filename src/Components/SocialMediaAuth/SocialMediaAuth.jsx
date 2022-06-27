import "./SocialMediaAuth.scss";

import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
//import { useGoogleLogin } from "react-google-login";
import { useGoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../ButtonComponent";
const clientId =
  "451993375040-f9uerbms8jg45cm634m50lg6q76mgq4m.apps.googleusercontent.com";
function SocialMediaAuth({ loading = false }) {
  const logout = () => {};
  const responseGoogle = (response) => {
    console.log(response);
  };

  const login = useGoogleLogin({
    clientId: clientId,
    scope: [
      "451993375040-f9uerbms8jg45cm634m50lg6q76mgq4m.apps.googleusercontent.com&scope=email",
    ],

    onSuccess: (credentialResponse) => {
      console.log(credentialResponse);
    },
    onError: () => {},
  });
  useGoogleOneTapLogin({
    clientId: clientId,

    onSuccess: (credentialResponse) => {
      console.log(credentialResponse);
    },
    onError: () => {
      console.log("Login Failed");
    },
  });
  const { t, i18n } = useTranslation();
  return (
    <>
      <div style={{ textAlign: "center", fontWeight: "400 " }}>{t("Or")}</div>

      <div style={{ display: "flex", marginTop: "11px" }}>
        <div>
          <FacebookLogin
            appId="1567161777056096"
            autoLoad={false}
            callback={(response) => {
              console.log(response);
            }}
            render={(renderProps) => (
              <ButtonComponent
                onClick={renderProps.onClick}
                color="#2d86ff"
                title="Log In Facebook"
                type={"button"}
                icon="fab fa-facebook"
              />
            )}
          />
        </div>
        <div>
          <ButtonComponent
            onClick={() => login()}
            color="#e94235"
            title="Log In Google"
            type={"button"}
            icon="fab fa-google"
          />
        </div>
      </div>
    </>
  );
}

export default SocialMediaAuth;
