import express from "express";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import bodyParser from "body-parser";
import { prepare } from "@gramps/gramps";
import { HttpLink } from "apollo-link-http";
import {
  introspectSchema,
  makeRemoteExecutableSchema,
  mergeSchemas
} from "graphql-tools";
import fetch from "node-fetch";
import fetchCookie from "fetch-cookie";

export default async modules => {
  const router = express.Router();

  // We are merging schemas manually since GrAMPS does not
  // support remote schemas yet
  // see https://github.com/gramps-graphql/gramps/issues/47
  const GraphQLOptions = prepare({ dataSources: modules });
  GraphQLOptions.schema = mergeSchemas({
    schemas: [
      await remoteFrontCommerceMagento2DemoSchema(),
      GraphQLOptions.schema
    ]
  });

  router.use(bodyParser.json());
  router.use("/graphql", graphqlExpress(req => GraphQLOptions));
  router.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

  return router;
};

async function remoteFrontCommerceMagento2DemoSchema() {
  const link = new HttpLink({
    uri: "https://demo.front-commerce.com/graphql",
    // to persist session between refreshes you can inject a custom cookie jar
    // as a second parameter below. See https://github.com/valeriangalliat/fetch-cookie#usage
    fetch: fetchCookie(fetch)
  });

  return makeRemoteExecutableSchema({
    schema: await introspectSchema(link),
    link
  });
}
