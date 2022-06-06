import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Reducer";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
}
