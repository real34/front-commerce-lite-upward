import React from "react";
import Redirect from "react-router/Redirect";
import withRouter from "react-router/withRouter";
import compose from "recompose/compose";
import withProps from "recompose/withProps";

import EnhanceProduct from "./EnhanceProduct";
import ProductQuery from "./ProductQuery.gql";
import ProductView from "../../modules/ProductView";
import HeroImage from "../../modules/HeroImage";
import LoadingArea from "../../ui/molecules/LoadingArea";

const Product = ({ loading, product }) => {
  if (loading) {
    return <LoadingArea>Loading…</LoadingArea>;
  } else if (!product) {
    return <Redirect to="/not-found" />;
  }

  return (
    <div className="page page--product">
      <ProductView product={product} />
      <HeroImage path={product.imageUrl} alt={product.name} />
    </div>
  );
};

export default compose(
  withRouter,
  withProps(props => ({ sku: props.sku || props.match.params.sku })),
  EnhanceProduct(ProductQuery)
)(Product);
