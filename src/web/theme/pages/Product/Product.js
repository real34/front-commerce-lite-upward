import React from "react";
import Redirect from "react-router/Redirect";
import withRouter from "react-router/withRouter";
import compose from "recompose/compose";
import withProps from "recompose/withProps";

import EnhanceProduct from "./EnhanceProduct";
import ProductQuery from "./ProductQuery.gql";
import PageWithMedia from "theme/ui/templates/PageWithMedia";
import ProductSynthesis from "theme/modules/ProductSynthesis";
import HeroImage from "theme/modules/HeroImage";
import LoadingArea from "theme/ui/molecules/LoadingArea";
import createMediaUrlFromPath from "../../../utils/createMediaUrlFromPath";

const Product = ({ loading, product }) => {
  if (loading) {
    return <LoadingArea>Loading…</LoadingArea>;
  } else if (!product) {
    return <Redirect to="/not-found" />;
  }

  return (
    <div>
      <PageWithMedia
        media={
          <HeroImage
            path={createMediaUrlFromPath(product.imageUrl)}
            alt={product.name}
          />
        }
      >
        <ProductSynthesis product={product} />
      </PageWithMedia>
    </div>
  );
};

export default compose(
  withRouter,
  withProps(props => ({ sku: props.sku || props.match.params.sku })),
  EnhanceProduct(ProductQuery)
)(Product);
