import React, { useEffect, useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { RedirectAs404, getToken } from "./utils/Utils";
import PrivateRoute from "./route/PrivateRoute";

import Layout from "./layout/Index";

import Error404Classic from "./pages/error/404-classic";
import Error404Modern from "./pages/error/404-modern";
import Error504Modern from "./pages/error/504-modern";
import Error504Classic from "./pages/error/504-classic";

import Faq from "./pages/others/Faq";
import Terms from "./pages/others/Terms";
import InvoicePrint from "./pages/pre-built/invoice/InvoicePrint";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "./store/actions";
import { profile } from "./services/apis";
import AuthRoute from "./route/AuthRoute";
import { initialSesstin } from "./store/configureStore";
import UpdatePassword from "./pages/auth/UpdatePassword";

const App = () => {
  const { IsInitiated } = useSelector(state => state.app);
  const { isLogin, tokens } = useSelector(state => state.auth);

  const [isLoading, setIsloading] = useState(false);
  const dispatch = useDispatch();
  useEffect(async () => {
    initialSesstin(tokens);
    dispatch({ type: actionTypes.INITIATED, IsInitiated: true });
    if (isLogin) {
      setIsloading(true);
      profile().then((data) => {
        dispatch({ type: actionTypes.USER, user: data.data.user, isLogin: true });
        setIsloading(false);
      }).catch((error) => {
        console.log(error)
        dispatch({ type: actionTypes.USER, isLogin: false });
        setIsloading(false);
      })
    }

  }, [IsInitiated, isLogin]);

  if (!IsInitiated) {
    return null;
  }


  return (
    <Switch>

      {/* Print Pages */}
      <Route exact path={`${process.env.PUBLIC_URL}/invoice-print/:id`} component={InvoicePrint}></Route>

      {/* Helper pages */}
      <Route exact path={`${process.env.PUBLIC_URL}/auths/terms`} component={Terms}></Route>
      <Route exact path={`${process.env.PUBLIC_URL}/auths/faq`} component={Faq}></Route>

      <Route exact path={`${process.env.PUBLIC_URL}/invoice-print`} component={InvoicePrint}></Route>

      {/*Error Pages*/}
      <Route exact path={`${process.env.PUBLIC_URL}/errors/404-classic`} component={Error404Classic}></Route>
      <Route exact path={`${process.env.PUBLIC_URL}/errors/504-modern`} component={Error504Modern}></Route>
      <Route exact path={`${process.env.PUBLIC_URL}/errors/404-modern`} component={Error404Modern}></Route>
      <Route exact path={`${process.env.PUBLIC_URL}/errors/504-classic`} component={Error504Classic}></Route>

      {/*Auth Pages*/}
      <Route exact path={`${process.env.PUBLIC_URL}/auth-update`} component={UpdatePassword}></Route>


      {/*Main Routes*/}
      {!isLogin && < AuthRoute />}
      {isLogin && <PrivateRoute path={`${process.env.PUBLIC_URL}`} component={Layout}></PrivateRoute>}
      <Route component={RedirectAs404}></Route>



    </Switch>
  );
};
export default withRouter(App);
