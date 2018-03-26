import React from "react";
import Link from "react-router-dom/Link";
import HomeQuery from "./HomeQuery.gql";
import "./Home.scss";
import EnhanceHome from "./EnhanceHome";

const Home = ({ store }) => (
  <div className="page page--home">
    <h1>Welcome on FCL</h1>
    <p>
      Please visit an <Link to="/product/24-WG088">awesome product</Link>
    </p>

    {store && <pre>{JSON.stringify(store, null, 2)}</pre>}
  </div>
);

export default EnhanceHome(HomeQuery)(Home);
