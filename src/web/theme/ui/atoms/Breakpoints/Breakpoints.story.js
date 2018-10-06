import React from "react";
import { storiesOf } from "@storybook/react";
import { withDocs } from "storybook-readme";

import readme from "./readme.md";

const commonStyles = {
  background: "#DDD",
  padding: "1rem 0"
};

const breakpoints = {
  tablet: "50rem",
  desktop: "65rem",
  largeDesktop: "90rem"
};

storiesOf("ui.atoms.Breakpoints", module)
  .addDecorator(withDocs(readme))
  .add("Sass variables", () => (
    <div>
      {Object.keys(breakpoints).map(breakpoint => (
        <pre
          key={breakpoint}
          style={{
            ...commonStyles,
            width: breakpoints[breakpoint]
          }}
        >
          {`$${breakpoint}: ${breakpoints[breakpoint]}`}
        </pre>
      ))}
    </div>
  ));
