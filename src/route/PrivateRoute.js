import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ exact, component: Component, ...rest }) => {
  const { isLogin } = useSelector(state => state.auth);
  return (
    <Route
      exact
      {...rest}
      render={(props) => {
        if (isLogin) {
          return <Component {...props} {...rest}></Component>
        } else {
          return (<Redirect to={{ pathname: "/", state: { from: props.location } }} />);
        }
      }}
    ></Route>
  )
};

export default PrivateRoute;
