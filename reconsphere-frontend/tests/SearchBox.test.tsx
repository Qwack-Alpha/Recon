import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import SearchBox from "../components/common/SearchBox/SearchBox";

describe("SearchBox", () => {
    it("renders with placeholder and value", () => {
        render(<SearchBox value="hello" placeholder="Search" onChange={() => {}} />);

        expect(screen.getByPlaceholderText("Search")).toHaveValue("hello");
    });

    it("calls onChange when input changes", async () => {
        const handleChange = vi.fn();
        render(<SearchBox value="" placeholder="Search" onChange={handleChange} />);

        await userEvent.type(screen.getByPlaceholderText("Search"), "abc");

        expect(handleChange).toHaveBeenCalled();
    });
});
