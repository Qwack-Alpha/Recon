import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import StatCard from "../components/common/StatCard/StatCard";

describe("StatCard", () => {
    it("renders title, value, and icon", () => {
        render(<StatCard title="Total" value={123} icon={<span>Icon</span>} />);

        expect(screen.getByText("Total")).toBeInTheDocument();
        expect(screen.getByText("123")).toBeInTheDocument();
        expect(screen.getByText("Icon")).toBeInTheDocument();
    });
});
