import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { RedirectAs404 } from "../utils/Utils";
import Login from "../pages/auth/Login";
import Success from "../pages/auth/Success";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Register from "../pages/auth/Register";

const AuthRoute = () => {
  return (
    <Suspense fallback={<div />}>
      <Switch>
        {/* Auth Pages */}
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Login}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/auth-success`} component={Success}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/auth-reset`} component={ForgotPassword}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/auth-register`} component={Register}></Route>
        <Route component={RedirectAs404}></Route>
      </Switch>
    </Suspense>
  );
};
export default AuthRoute;
