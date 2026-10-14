import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SectionHeader from "../components/common/SectionHeader/SectionHeader";

describe("SectionHeader", () => {
    it("renders title and subtitle", () => {
        render(<SectionHeader title="Title" subtitle="Subtitle" />);

        expect(screen.getByText("Title")).toBeInTheDocument();
        expect(screen.getByText("Subtitle")).toBeInTheDocument();
    });

    it("does not render subtitle when missing", () => {
        render(<SectionHeader title="Title" />);

        expect(screen.queryByText("Subtitle")).not.toBeInTheDocument();
    });
});
