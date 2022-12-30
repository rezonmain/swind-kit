import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Flex from "./Flex";

describe("<Flex/> Component", () => {
  it("Renders children", async () => {
    render(<Flex>hello</Flex>);
    expect(await screen.findByText("hello")).toBeInTheDocument();
  });
});
