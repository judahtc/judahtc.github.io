import { hobbies } from "./hobbies/lodder";
import { columns } from "./hobbies/columns";
import { DataTable } from "./hobbies/data-table";
export function Hobbies() {
    return (
        <>
            {" "}
            <DataTable data={hobbies} columns={columns}></DataTable>
        </>
    );
}
