import React from "react";


function TableRow({number , index}) {
    return(
       <div className="border text-indigo-700 border-gray-700 rounded-md w-4">{number}x{index}={number * index} </div>
    )
}

export default TableRow;