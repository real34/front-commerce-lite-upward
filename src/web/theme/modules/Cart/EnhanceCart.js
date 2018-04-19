import { graphql } from "react-apollo";

export default CartQuery =>
  graphql(CartQuery, {
    props: ({ data }) => ({
      cart: !data.loading && data.cart,
      loading: data.loading
    })
  });
