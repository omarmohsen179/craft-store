import React, { useState } from "react";
import "./SocialMediaAuth.scss";

import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import { refreshTokenSetup } from "./refreshToken";

import GoogleLogin from "react-google-login";
import ButtonComponent from "../ButtonComponent";

function SocialMediaAuth({ loading = false }) {
  const [accessToken, setAccessToken] = useState("");

  function responseFacebook(response) {
    console.log("response", response);
    setAccessToken(response.accessToken);
  }
  function componentClicked(data) {
    console.log("data", data);
  }
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    // refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
  };
  return (
    <>
      <div>Or</div>

      <div style={{ display: "flex", marginTop: "11px" }}>
        <div>
          <FacebookLogin
            appId="1088597931155576"
            autoLoad={false}
            callback={responseFacebook}
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
          <GoogleLogin
            clientId={
              "451993375040-ef7jm6f7uv38hbu17de96mt9sufmu57n.apps.googleusercontent.com"
            }
            buttonText="Login"
            render={(renderProps) => (
              <ButtonComponent
                onClick={renderProps.onClick}
                color="#e94235"
                title="Log In Google"
                type={"button"}
                icon="fab fa-google"
              />
            )}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
            style={{ width: "100%", backgroundColor: "red" }}
          />
        </div>
      </div>
    </>
  );
}

export default SocialMediaAuth;
