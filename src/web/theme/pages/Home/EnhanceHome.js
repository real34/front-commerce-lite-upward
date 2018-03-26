import { graphql } from "react-apollo";

export default HomeQuery =>
  graphql(HomeQuery, {
    props: ({ data }) => ({
      store: !data.loading && data.store
    })
  });
