import React from "react";
import Link from "theme/ui/atoms/Typography/Link";
import { H1 } from "theme/ui/atoms/Typography/Heading";
import Paragraph from "theme/ui/atoms/Typography/Paragraph";
import Page from "theme/ui/templates/Page";

const Checkout = () => {
  return (
    <Page>
      <H1>Checkout</H1>
      <Paragraph>There is no Checkout in Front Commerce Lite.</Paragraph>
      <Paragraph>
        However, feel free to take a look at{" "}
        <Link to="https://demo.front-commerce.com/" external>
          Front-Commerce's demo
        </Link>{" "}
        to see how it could look like.
      </Paragraph>
    </Page>
  );
};

export default Checkout;
