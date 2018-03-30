import React from "react";
import BrowserRouter from "react-router-dom/BrowserRouter";
import Switch from "react-router/Switch";
import Route from "react-router/Route";

import Home from "./theme/pages/Home";
import Product from "./theme/pages/Product";
import NotFound from "./theme/pages/NotFound";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/product/:sku" component={Product} />

      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
