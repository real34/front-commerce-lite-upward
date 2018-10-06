import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withDocs } from "storybook-readme";

import Button from "../Button";
import readme from "./readme.md";

storiesOf("ui.atoms.Button", module)
  .addDecorator(withDocs(readme))
  .add("Default", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("Loading", () => (
    <Button onClick={action("clicked")} status="loading">
      Hello Button
    </Button>
  ))
  .add("Invisible", () => (
    <Button onClick={action("clicked")} type="invisible">
      Hello Button
    </Button>
  ))
  .add("Full size", () => (
    <Button onClick={action("clicked")} type="full-size">
      Hello Button
    </Button>
  ));
