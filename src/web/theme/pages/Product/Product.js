import React from "react";
import Link from "react-router-dom/Link";
import Redirect from "react-router/Redirect";
import withRouter from "react-router/withRouter";
import compose from "recompose/compose";
import withProps from "recompose/withProps";
import branch from "recompose/branch";

import EnhanceProduct from "./EnhanceProduct";
import ProductQuery from "./ProductQuery.gql";

import Price from "../../ui/atoms/Price";

// TODO Move me where needed
const ProductHead = ({ children, sku }) => (
  <h1>
    {children}
    {sku && <small> ({sku})</small>}
  </h1>
);
const ProductDescription = ({ children }) =>
  children && (
    <div
      dangerouslySetInnerHTML={{
        __html: children
      }}
    />
  );

const BackHome = () => (
  <p>
    Bring me <Link to="/">home</Link>
  </p>
);

const Product = ({ loading, product }) => {
  if (loading) {
    return "Loading…";
  } else if (!product) {
    return <Redirect to="/not-found" />;
  }

  return (
    <div>
      <ProductHead sku={product.sku}>{product.name}</ProductHead>

      <Price price={product.prices.finalPrice.priceInclTax} />
      <ProductDescription>{product.description}</ProductDescription>

      <BackHome />
    </div>
  );
};

export default compose(
  withRouter,
  withProps(props => ({ sku: props.sku || props.match.params.sku })),
  EnhanceProduct(ProductQuery)
)(Product);
