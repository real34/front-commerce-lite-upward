import { graphql } from "react-apollo";

export default FooterQuery =>
  graphql(FooterQuery, {
    props: ({ data }) => ({
      store: data.store
    })
  });
