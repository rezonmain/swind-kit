import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Flex from "./Flex";
import Item from "../Item";

describe("<Flex/> Component", () => {
  it("renders children", async () => {
    render(
      <Flex>
        <Item>hello</Item>
      </Flex>
    );
    expect(await screen.findByText("hello")).toBeInTheDocument();
  });

  it("nests", async () => {
    render(
      <Flex>
        <Item>1</Item>
        <Flex data-testid="nested-flex">
          <Item>2</Item>
        </Flex>
      </Flex>
    );
    expect(
      await (
        await screen.findByTestId("nested-flex")
      ).firstChild?.textContent
    ).toBe("2");
  });

  describe("Props", () => {
    it("renders with default props", async () => {
      const { baseElement } = render(<Flex>hi</Flex>);
      expect(baseElement.firstChild?.firstChild).toHaveClass(
        "flex flex-row justify-center items-center"
      );
    });
    it("renders with flex-direction column", async () => {
      const { baseElement } = render(<Flex col>hi</Flex>);
      expect(baseElement.firstChild?.firstChild).toHaveClass(
        "flex flex-col justify-center items-center"
      );
    });

    it("renders with justify-start", async () => {
      const { baseElement } = render(<Flex justifyStart>hi</Flex>);
      expect(baseElement.firstChild?.firstChild).toHaveClass(
        "flex flex-row justify-start items-center"
      );
    });

    it("renders with justify-end", async () => {
      const { baseElement } = render(<Flex justifyEnd>hi</Flex>);
      expect(baseElement.firstChild?.firstChild).toHaveClass(
        "flex flex-row justify-end items-center"
      );
    });

    it("renders with justify-between", async () => {
      const { baseElement } = render(<Flex justifyBetween>hi</Flex>);
      expect(baseElement.firstChild?.firstChild).toHaveClass(
        "flex flex-row justify-between items-center"
      );
    });

    it("renders with items-start", async () => {
      const { baseElement } = render(<Flex itemsStart>hi</Flex>);
      expect(baseElement.firstChild?.firstChild).toHaveClass(
        "flex flex-row justify-center items-start"
      );
    });

    it("renders with items-end", async () => {
      const { baseElement } = render(<Flex itemsEnd>hi</Flex>);
      expect(baseElement.firstChild?.firstChild).toHaveClass(
        "flex flex-row justify-center items-end"
      );
    });
  });
});
