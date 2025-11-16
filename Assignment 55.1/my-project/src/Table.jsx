import React from "react";
import TableRow from "./TableRow";
function Table() {
    console.log("Table function is running ")

    const [num, setnum] = React.useState(2);
    function nextTable() {
        setnum(num + 1);
    }

    return (
        <div className="p-2">
            <button onClick={nextTable} className=" rounded-md px-4 py-1 bg-indigo-700 text-white" >Next Table</button>
            <TableRow number={num} index={1} />
            <TableRow number={num} index={2} />
            <TableRow number={num} index={3} />
            <TableRow number={num} index={4} />
            <TableRow number={num} index={5} />
        </div>
    );
}
export default Table;
