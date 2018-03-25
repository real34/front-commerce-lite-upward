import express from "express";
import gramps from "@gramps/gramps";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import bodyParser from "body-parser";

export default modules => {
  const router = express.Router();
  const GraphQLOptions = gramps({
    dataSources: modules
  });

  router.use(bodyParser.json());
  router.use("/graphql", graphqlExpress(GraphQLOptions));
  router.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

  return router;
};
