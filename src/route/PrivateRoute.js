import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ exact, component: Component, ...rest }) => {
  const { isLogin, user } = useSelector(state => state.auth);
  const { passwordChangeRequired } = user;
  return (
    <Route
      exact
      {...rest}
      render={(props) => {
        if (passwordChangeRequired) {
          return (<Redirect to={{ pathname: "/auth-update", state: { from: props.location } }} />);
        } else if (isLogin) {
          return <Component {...props} {...rest}></Component>
        } else {
          return (<Redirect to={{ pathname: "/", state: { from: props.location } }} />);
        }
      }}
    ></Route>
  )
};

export default PrivateRoute;
