import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "Black Printed Coffee Mug",
    category: "Mugs",
    price: "$15.00",
    img: "https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=2e59b220b1b5bc7a4e2c4d6b1f5c3b7d",
  },
  {
    id: 2,
    title: "Father's Day Coffee Mug",
    category: "Mugs",
    price: "$19.00",
    img: "https://images.unsplash.com/photo-1521305916504-4a1121188589?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=1f5f0b0e0b10b1f0e6a3b4a2d7c6b6a2",
  },
  {
    id: 3,
    title: "Green Printed Tshirt",
    category: "Tshirts",
    price: "$34.00",
    img: "https://images.unsplash.com/photo-1602810317496-7b4a08cd16f5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=3d7b1a9b6d2f7a1cbbd6b7a9f8c1e2a3",
  },
  {
    id: 4,
    title: "Personalised Mug",
    category: "Mugs",
    price: "$16.00",
    img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=8b2c8e3b1f5c7a6e4d2b1c0f3e8a9c4d",
  },
  {
    id: 5,
    title: "Printed Brown Tshirt",
    category: "Tshirts",
    price: "$20.00",
    oldPrice: "$34.00",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=2b8b3f5f0e6a7c9d8e1f2a3b4c5d6e7f",
    sale: true,
  },
  {
    id: 6,
    title: "Printed Dark Blue Tshirt",
    category: "Tshirts",
    price: "$34.00",
    img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=7a1c2d3b4e5f6a7b8c9d0e1f2a3b4c5d",
  },
  {
    id: 7,
    title: "Printed Green Tshirt",
    category: "Tshirts",
    price: "$28.00",
    img: "https://images.unsplash.com/photo-1520975913846-9f9f7d1b3f8a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f",
    sale: true,
  },
  {
    id: 8,
    title: "Printed Tshirt Coffee Black Color",
    category: "Tshirts",
    price: "$25.00",
    oldPrice: "$35.00",
    img: "https://images.unsplash.com/photo-1530885143404-9f9b6f3a1c2d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d",
    sale: true,
  },
  {
    id: 9,
    title: "Typography Teal Printed Tshirt",
    category: "Tshirts",
    price: "$32.00",
    oldPrice: "$36.00",
    img: "https://images.unsplash.com/photo-1533112010598-5f5f0f6b7a8c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=9f8e7d6c5b4a3a2b1c0d9e8f7a6b5c4d",
    sale: true,
  },
];

export default function App() {
  return (
    <div className="max-w-[1100px] mx-auto my-9 bg-white p-9 shadow-lg">
      <header className="flex justify-between items-center gap-4 mb-6">
        <div className="brand">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="logo"
            className="h-7"
          />
        </div>
        <div className="controls">
          <select
            aria-label="Sort"
            className="px-3 py-2 border border-gray-200 rounded-md bg-white"
          >
            <option>Default sorting</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </header>

      <main className="grid grid-cols-[220px_1fr] gap-6 max-lg:grid-cols-1">
        <div className="sidebar bg-transparent" />
        <section className="px-3 py-1">
          <div className="grid grid-cols-3 gap-7 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {products.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>

          <nav className="mt-7 flex gap-2.5" aria-label="Pagination">
            <button className="border border-transparent bg-red-400 text-white px-3 py-2 rounded-md">
              1
            </button>
            <button className="border border-gray-100 bg-white px-3 py-2 rounded-md">
              2
            </button>
            <button className="border border-gray-100 bg-white px-3 py-2 rounded-md">
              »
            </button>
          </nav>
        </section>
      </main>

      <footer className="mt-8 text-gray-500 text-[13px] text-center">
        Copyright © 2025 | DevsLane
      </footer>
    </div>
  );
}
