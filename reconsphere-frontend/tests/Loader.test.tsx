import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Loader from "../components/common/Loader/Loader";

describe("Loader", () => {
    it("renders the loader element", () => {
        render(<Loader />);
        expect(screen.getByRole("status")).toBeInTheDocument();
    });
});
