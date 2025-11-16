import React from "react";

function ProductDetails() { 
    return (
        <>
            <img src="https://codeyogi.io/bag.jpg" alt="Bag" />
            <h1>Black Printed Lather bag </h1>
            <input className=" border border-gray-700 rounded-md w-4 " value="1" type="text" />
            <button>Add to Cart</button>
        </>
        
    );
}

export default ProductDetails;