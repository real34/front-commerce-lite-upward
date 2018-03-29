import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Routes from "./theme/Routes";

const client = new ApolloClient({
  uri: "http://127.0.0.1:4000/graphql"
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
