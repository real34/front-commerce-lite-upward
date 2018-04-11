import React from "react";
import HomeQuery from "./HomeQuery.gql";
import EnhanceHome from "./EnhanceHome";
import ProductList from "../../modules/ProductList";
import HomeBanner from "../../modules/HomeBanner";
import LoadingArea from "../../ui/molecules/LoadingArea";
import Page from "../../ui/templates/Page";

const Home = ({ store, category, loading }) => (
  <Page>
    <HomeBanner storeName={store && store.name} />
    {loading ? (
      <LoadingArea>Loading products…</LoadingArea>
    ) : (
      <ProductList products={category.layer.products} />
    )}
  </Page>
);

export default EnhanceHome(HomeQuery)(Home);
