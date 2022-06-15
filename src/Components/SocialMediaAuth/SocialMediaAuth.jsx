import React, { useState } from "react";
import "./SocialMediaAuth.scss";

import FacebookLogin from "react-facebook-login";
import {
  GoogleLogin,
  MyCustomButton,
  useGoogleLogin,
} from "@react-oauth/google";

// import GoogleLogin from "react-google-login";

function SocialMediaAuth() {
  const [accessToken, setAccessToken] = useState("");

  function responseFacebook(response) {
    console.log("response", response);
    setAccessToken(response.accessToken);
  }
  function componentClicked(data) {
    console.log("data", data);
  }

  function handleLogout() {
    window.FB.logout();
  }

  // Facebook:  App Secret : eeeaf9798ec0a41dc05bb4a4d165f1b8

  // Google: Client ID: 1065784582815-2fgc88hkgbbnvvoejgpfi95haks23tos.apps.googleusercontent.com
  // Google: Client secret: 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

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  return (
    <div>
      <div>
        <FacebookLogin
          appId="1059560821346768"
          autoLoad={true}
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook}
          cssClass="loginBtn loginBtn--facebook"
        />
      </div>
      <div>
        <button className="loginBtn loginBtn--google" onClick={() => login()}>
          Login in with Google
        </button>
      </div>
    </div>
  );
}

export default SocialMediaAuth;
