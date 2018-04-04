import React from "react";
import HomeQuery from "./HomeQuery.gql";
import "./Home.scss";
import EnhanceHome from "./EnhanceHome";
import ProductList from "../../modules/ProductList";
import HomeBanner from "../../modules/HomeBanner";
import LoadingArea from "../../ui/molecules/LoadingArea";

const Home = ({ store, category }) => (
  <div className="page page--home">
    <HomeBanner store={store} />
    {category ? (
      <ProductList products={category.layer.products} />
    ) : (
      <LoadingArea>Loading products…</LoadingArea>
    )}
  </div>
);

export default EnhanceHome(HomeQuery)(Home);
