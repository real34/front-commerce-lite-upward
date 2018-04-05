import React from "react";
import HomeQuery from "./HomeQuery.gql";
import EnhanceHome from "./EnhanceHome";
import ProductList from "../../modules/ProductList";
import HomeBanner from "../../modules/HomeBanner";
import LoadingArea from "../../ui/molecules/LoadingArea";

const Home = ({ store, category, loading }) => (
  <div className="page page--home">
    <HomeBanner storeName={store && store.name} />
    {loading ? (
      <LoadingArea>Loading products…</LoadingArea>
    ) : (
      <ProductList products={category.layer.products} />
    )}
  </div>
);

export default EnhanceHome(HomeQuery)(Home);
