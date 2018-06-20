import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "../Button";

storiesOf("ui.atoms.Button", module)
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
