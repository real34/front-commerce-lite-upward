import React from "react";
import { H1 } from "../../ui/atoms/Typography/Heading";
import Paragraph from "../../ui/atoms/Typography/Paragraph";
import Link from "../../ui/atoms/Typography/Link";

export default () => (
  <div>
    <H1>Oops! We have not found what you wanted</H1>
    <Paragraph>Houston, we have a code 404…</Paragraph>

    <Paragraph>
      Bring me <Link to="/">back to the safety zone</Link>
    </Paragraph>
  </div>
);
