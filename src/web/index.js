import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Routes from "./theme/Routes";

const client = new ApolloClient({
  // uri: "http://server.front-commerce-lite.test/graphql" // if using Docker Compose with nginx-proxy
  uri: "http://127.0.0.1:4000/graphql" // in a local node environment
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>,
  document.getElementById("app")
);

if (module.hot) {
  module.hot.accept("./theme/Routes", () => {
    const NextAppRoutes = require("./theme/Routes").default;
    ReactDOM.render(
      <ApolloProvider client={client}>
        <NextAppRoutes />
      </ApolloProvider>,
      document.getElementById("app")
    );
  });
}
