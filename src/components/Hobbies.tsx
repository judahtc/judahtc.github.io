import { hobbies } from "./hobbies/lodder";
import { columns } from "./hobbies/columns";
import { DataTable } from "./hobbies/data-table";
export function Hobbies() {
    return (
        <>
            {" "}
            <div className="ml-7 mb-3 font-semibold text-lg">Hobbies</div>
            <hr className="mx-7 border-gray-50"></hr>
            <div className="w-1/2 ml-7 mt-5">
                <DataTable data={hobbies} columns={columns}></DataTable>
            </div>
        </>
    );
}
