import "animate.css";
import "antd/dist/antd.css";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { LanguageProvider } from "./Service/LanguageContext";
import configureStore from "./Store/ConfigureStore";
import { GoogleOAuthProvider } from "@react-oauth/google";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={configureStore()}>
    <HashRouter>
      <LanguageProvider>
        <GoogleOAuthProvider clientId="1065784582815-2fgc88hkgbbnvvoejgpfi95haks23tos.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
      </LanguageProvider>
    </HashRouter>
  </Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
