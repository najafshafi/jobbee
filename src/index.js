import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import "./assets/scss/dashlite.scss";
import "./assets/scss/style-email.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = configureStore();

const Error404Modern = lazy(() => import("./pages/error/404-modern"));

ReactDOM.render(
  <React.Fragment>
    <Suspense fallback={<div />}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router basename={`/`}>
            <Route render={({ location }) => (location.state && location.state.is404 ? <Error404Modern /> : <App />)} />
          </Router>
        </PersistGate>
      </Provider>
    </Suspense>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
