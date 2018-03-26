import { graphql } from "react-apollo";

export default ProductQuery =>
  graphql(ProductQuery, {
    options: ({ sku }) => ({
      variables: {
        sku: sku
      }
    }),
    props: ({ data }) => ({
      loading: data.loading,
      product: !data.loading && data.product
    })
  });
