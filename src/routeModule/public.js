import React from "react";

import { Route, Redirect } from "react-router-dom";
// import { isLogin } from "../store/actions/auth";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        !restricted ? <Redirect to="/" /> : <Component {...props} {...rest} />
      }
    />
  );
};

export default PublicRoute;
