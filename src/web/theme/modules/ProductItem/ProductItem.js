import React, { Fragment } from "react";
import ProductPrice from "theme/ui/molecules/ProductPrice";
import createMediaUrlFromPath from "../../../utils/createMediaUrlFromPath";
import Link from "theme/ui/atoms/Typography/Link";
import Media from "theme/ui/organisms/Media";

const ProductItem = ({ name, prices, sku, imageUrl }) => {
  return (
    <Media
      media={<img src={createMediaUrlFromPath(imageUrl)} alt={name} />}
      renderDetails={() => (
        <Fragment>
          <Link to={`product/${sku}`} type="reversed">
            {name}
          </Link>
          <ProductPrice prices={prices} />
        </Fragment>
      )}
    />
  );
};

export default ProductItem;
