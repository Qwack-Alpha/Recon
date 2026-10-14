import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Card from "../components/common/Card/Card";

describe("Card", () => {
    it("renders children inside card wrapper", () => {
        render(
            <Card>
                <div>Card content</div>
            </Card>,
        );

        expect(screen.getByText("Card content")).toBeInTheDocument();
        expect(screen.getByText("Card content").parentElement).toHaveClass("card");
    });
});
