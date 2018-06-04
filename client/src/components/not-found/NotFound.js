import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <Link to="/dashboard" className="btn btn-light">
        Go to dashboard
      </Link>
      <h1 className="display-4">Page not found</h1>
      <p>Sorry, this page does not exist</p>
    </div>
  );
};
