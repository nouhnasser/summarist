import "@/styles/globals.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCrown,
  faStar,
  faStarHalf,
  faUser,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";

library.add(faCrown, faStar, faStarHalf, faUser, faX);

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
