import React, { useEffect, useState } from 'react';


function CartsComponent() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/carts')
      .then(res => res.json())
      .then(data => setCarts(data.carts))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Carts List</h1>

      {carts.map(cart => (
          <div key={cart.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <img src={cart.thumbnail} alt="" />
          <p><strong>Cart ID:</strong> {cart.id}</p>
          <p><strong>Total Products:</strong> {cart.totalProducts}</p>
          <p><strong>Total Price:</strong> ₹{cart.total}</p>

          
        </div>
      ))}
    </div>
  );
}


export default CartsComponent;
