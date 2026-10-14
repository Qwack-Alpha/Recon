import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import EmptyState from "../components/common/EmptyState/EmptyState";

describe("EmptyState", () => {
    it("renders title and message", () => {
        render(<EmptyState title="No data" message="There is nothing to show." />);
        expect(screen.getByText("No data")).toBeInTheDocument();
        expect(screen.getByText("There is nothing to show.")).toBeInTheDocument();
    });
});
