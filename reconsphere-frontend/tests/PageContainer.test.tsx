import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import PageContainer from "../components/common/PageContainer/PageContainer";

describe("PageContainer", () => {
    it("renders children inside the page container", () => {
        render(
            <PageContainer>
                <div>Page content</div>
            </PageContainer>,
        );

        expect(screen.getByText("Page content")).toBeInTheDocument();
        expect(screen.getByText("Page content").closest(".pageContainer")).toBeInTheDocument();
    });
});
