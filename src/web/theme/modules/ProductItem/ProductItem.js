import React, { Fragment } from "react";
import ProductPrice from "../../ui/molecules/ProductPrice";
import Sku from "../../ui/atoms/Typography/Sku";
import createMediaUrlFromPath from "../../../utils/createMediaUrlFromPath";
import Link from "../../ui/atoms/Typography/Link";
import Media from "../../ui/organisms/Media";

const ProductItem = ({ name, prices, sku, imageUrl }) => {
  return (
    <Media
      to={`product/${sku}`}
      media={<img src={createMediaUrlFromPath(imageUrl)} alt={name} />}
      renderDetails={() => (
        <Fragment>
          <Link to={`product/${sku}`} type="reversed">
            {name}
          </Link>
          <ProductPrice prices={prices} />
          <Sku sku={sku} />
        </Fragment>
      )}
    />
  );
};

export default ProductItem;
