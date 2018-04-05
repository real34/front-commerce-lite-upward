import { graphql } from "react-apollo";

export default LayoutQuery =>
  graphql(LayoutQuery, {
    props: ({ data }) => ({
      store: data.store
    })
  });
