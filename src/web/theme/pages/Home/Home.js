import React from "react";
import Link from "react-router-dom/Link";

export default () => (
  <div>
    <h1>Welcome on FCL</h1>
    <p>
      Please visit an <Link to="/product/awesome-product">awesome product</Link>
    </p>
  </div>
);
