import typeDefs from "./schema.gql";
import loader from "./loader";
import resolvers from "./resolvers";

export default {
  namespace: "StoreInformation",
  context: loader,
  typeDefs,
  resolvers
};
