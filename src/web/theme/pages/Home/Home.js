import React from "react";
import Link from "react-router-dom/Link";
import HomeQuery from "./HomeQuery.gql";
import "./Home.scss";
import EnhanceHome from "./EnhanceHome";

const Home = ({ store }) => (
  <div className="page page--home">
    <h1>{store ? `Welcome on ${store.name}` : "Welcome"}</h1>
    <p>
      Please visit an <Link to="/product/24-WG088">awesome product</Link>
    </p>

    {store && store.owner && <ContactToday owner={store.owner} />}

    {store && store.phone && <CallUs phone={store.phone} />}
  </div>
);

const ContactToday = ({ owner }) => (
  <div>
    <h2>Your contact today: {owner.displayName}</h2>
    <img src={owner.picture} alt="" />
    <p>
      Email: <a href={`mailto:${owner.email}`}>{owner.email}</a>
    </p>
  </div>
);

const CallUs = ({ phone }) => (
  <p>
    Need help? Call us at <a href={`tel:${phone}`}>{phone}</a>
  </p>
);

export default EnhanceHome(HomeQuery)(Home);
