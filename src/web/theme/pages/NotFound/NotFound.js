import React from "react";
import Link from "react-router-dom/Link";

export default () => (
  <div>
    <h1>Oops! We have not found what you wanted</h1>
    <p>Houston, we have a code 404…</p>

    <p>
      Bring me <Link to="/">back to the safety zone</Link>
    </p>
  </div>
);
