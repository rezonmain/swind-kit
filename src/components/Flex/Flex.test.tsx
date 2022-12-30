import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Flex from "./Flex";

describe("<Flex/> Component", () => {
  it("Renders as default", async () => {
    const container = render(<Flex>hello</Flex>);
    expect(container).toMatchSnapshot();
  });
});
