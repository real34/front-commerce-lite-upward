import { graphql } from "react-apollo";
import compose from "recompose/compose";
import withProps from "recompose/withProps";

const CATEGORY_ID = 21;
const SIZE = 9;

export default HomeQuery =>
  compose(
    withProps(props => ({
      categoryId: CATEGORY_ID,
      size: SIZE
    })),
    graphql(HomeQuery, {
      options: props => ({
        variables: {
          id: props.categoryId,
          params: {
            size: props.size,
            from: 0
          }
        }
      }),
      props: ({ data }) => ({
        category: data.category,
        store: data.store,
        loading: data.loading
      })
    })
  );
