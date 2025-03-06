import { ColumnDef } from "@tanstack/react-table";
import { Hobby } from "./lodder";

export const columns: ColumnDef<Hobby>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "category",
        header: "Category",
    },
    {
        accessorKey: "description",
        header: "Description",
    },
];
