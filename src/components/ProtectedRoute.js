import React from "react";
import { Route, Redirect } from "react-router-dom";

export default _props => {
  const { component: Component, isLoggedIn, ...props } = _props;

  return (
    <Route
      {...props}
      render={props =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
