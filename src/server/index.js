import express from "express";

const config = {
  host: process.env.FRONT_COMMERCE_HOST || "0.0.0.0",
  port: process.env.FRONT_COMMERCE_PORT || process.env.VIRTUAL_PORT || 4000
};

const app = express();

app.get("/", (_, res) => res.send("Hello world!"));

const server = app.listen(config.port, config.host, undefined, () => {
  /* eslint-disable no-console */
  console.log(
    `GraphQL server started. Listening on ${config.host}:${config.port}...`
  );
  /* eslint-enable no-console */

  const shutdown = function() {
    server.close(function() {
      process.exit(0);
    });
  };

  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);
});
