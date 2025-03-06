import { hobbies } from "./hobbies/lodder";
import { columns } from "./hobbies/columns";
import { DataTable } from "./hobbies/data-table";
export function Hobbies() {
    return (
        <>
            {" "}
            <div className="lg:ml-7 mx-2 mb-3 font-semibold lg:text-lg">
                Hobbies
            </div>
            <hr className="lg:mx-7 mx-2 border-gray-50"></hr>
            <div className="lg:w-1/2  w-full lg:ml-7 mx-2 mt-5">
                <DataTable data={hobbies} columns={columns}></DataTable>
            </div>
        </>
    );
}
