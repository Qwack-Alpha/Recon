import { describe, it, expect } from "vitest";
import { Button, Card, Loader, EmptyState, PageContainer, SectionHeader, SearchBox, DataTable, StatCard } from "../components/common";

describe("common component exports", () => {
    it("exports the public common components", () => {
        expect(Button).toBeDefined();
        expect(Card).toBeDefined();
        expect(Loader).toBeDefined();
        expect(EmptyState).toBeDefined();
        expect(PageContainer).toBeDefined();
        expect(SectionHeader).toBeDefined();
        expect(SearchBox).toBeDefined();
        expect(DataTable).toBeDefined();
        expect(StatCard).toBeDefined();
    });
});
