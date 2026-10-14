import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import DataTable from "../components/common/DataTable/DataTable";

describe("DataTable", () => {
    it("renders children inside table wrapper", () => {
        render(
            <DataTable>
                <table>
                    <tbody>
                        <tr>
                            <td>Row</td>
                        </tr>
                    </tbody>
                </table>
            </DataTable>,
        );

        expect(screen.getByText("Row")).toBeInTheDocument();
        expect(screen.getByText("Row").closest("div")).toHaveClass("tableWrapper");
    });
});
