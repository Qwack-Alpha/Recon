import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Button from "../components/common/Button/Button";

describe("Button", () => {
    it("renders child content when not loading", () => {
        render(<Button>Click me</Button>);
        expect(screen.getByRole("button")).toHaveTextContent("Click me");
    });

    it("shows loading text when loading", () => {
        render(<Button loading>Click me</Button>);
        expect(screen.getByRole("button")).toHaveTextContent("Please wait...");
        expect(screen.getByRole("button")).toBeDisabled();
    });
});
