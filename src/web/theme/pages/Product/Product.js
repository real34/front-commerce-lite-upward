import React from "react";
import Link from "react-router-dom/Link";
export default () => (
  <div>
    <h1>This is a product</h1>
    <p>
      Bring me <Link to="/">home</Link>
    </p>
  </div>
);
