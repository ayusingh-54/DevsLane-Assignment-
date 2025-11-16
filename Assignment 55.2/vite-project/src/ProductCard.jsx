export const products = [
  {
    id: 1,
    title: "Black Printed Coffee Mug",
    category: "Mugs",
    price: "$15.00",
    description:
      "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.",
    img: "https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=2e59b220b1b5bc7a4e2c4d6b1f5c3b7d",
  },
  {
    id: 2,
    title: "Father's Day Coffee Mug",
    category: "Mugs",
    price: "$19.00",
    description:
      "Perfect gift for Father's Day. High-quality ceramic mug with beautiful design.",
    img: "https://images.unsplash.com/photo-1521305916504-4a1121188589?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=1f5f0b0e0b10b1f0e6a3b4a2d7c6b6a2",
  },
  {
    id: 3,
    title: "Green Printed Tshirt",
    category: "Tshirts",
    price: "$34.00",
    description:
      "Comfortable cotton t-shirt with vibrant green print. Perfect for casual wear.",
    img: "https://images.unsplash.com/photo-1602810317496-7b4a08cd16f5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=3d7b1a9b6d2f7a1cbbd6b7a9f8c1e2a3",
  },
  {
    id: 4,
    title: "Personalised Mug",
    category: "Mugs",
    price: "$16.00",
    description:
      "Customizable mug perfect for personal or gift use. Durable and microwave safe.",
    img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=8b2c8e3b1f5c7a6e4d2b1c0f3e8a9c4d",
  },
  {
    id: 5,
    title: "Printed Brown Tshirt",
    category: "Tshirts",
    price: "$20.00",
    oldPrice: "$34.00",
    description: "Stylish brown t-shirt with unique print. Now on sale!",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=2b8b3f5f0e6a7c9d8e1f2a3b4c5d6e7f",
    sale: true,
  },
  {
    id: 6,
    title: "Printed Dark Blue Tshirt",
    category: "Tshirts",
    price: "$34.00",
    description: "Premium quality dark blue t-shirt with modern print design.",
    img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=7a1c2d3b4e5f6a7b8c9d0e1f2a3b4c5d",
  },
  {
    id: 7,
    title: "Printed Green Tshirt",
    category: "Tshirts",
    price: "$28.00",
    description: "Eco-friendly green t-shirt made from organic cotton.",
    img: "https://images.unsplash.com/photo-1520975913846-9f9f7d1b3f8a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f",
    sale: true,
  },
  {
    id: 8,
    title: "Printed Tshirt Coffee Black Color",
    category: "Tshirts",
    price: "$25.00",
    oldPrice: "$35.00",
    description:
      "Classic black t-shirt with coffee-themed design. Limited time sale!",
    img: "https://images.unsplash.com/photo-1530885143404-9f9b6f3a1c2d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d",
    sale: true,
  },
  {
    id: 9,
    title: "Typography Teal Printed Tshirt",
    category: "Tshirts",
    price: "$32.00",
    oldPrice: "$36.00",
    description:
      "Trendy teal t-shirt with bold typography. Special discount available!",
    img: "https://images.unsplash.com/photo-1533112010598-5f5f0f6b7a8c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=9f8e7d6c5b4a3a2b1c0d9e8f7a6b5c4d",
    sale: true,
  },
];

export default function ProductCard({ p, onClick }) {
  return (
    <div
      onClick={() => onClick(p)}
      className="bg-white rounded-lg p-3.5 text-left transition-all duration-200 ease-in-out hover:-translate-y-1.5 hover:shadow-xl relative w-full h-full flex flex-col cursor-pointer"
    >
      <div className="relative h-56 flex items-center justify-center overflow-hidden rounded-md bg-gray-50 shrink-0">
        {p.sale && (
          <span className="absolute top-2.5 right-2.5 bg-red-500 text-white text-xs px-2 py-1.5 rounded-full">
            Sale
          </span>
        )}
        <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
      </div>
      <div className="pt-3 flex flex-col grow">
        <div className="text-xs text-gray-500 mb-1.5">{p.category}</div>
        <h3 className="text-[15px] m-0 mb-1.5 text-gray-900 min-h-9">
          {p.title}
        </h3>
        <div className="text-amber-500 text-xs mb-2">★★★★★</div>
        <div className="flex items-center gap-2 mt-auto">
          <span className="font-bold text-gray-900">{p.price}</span>
          {p.oldPrice && (
            <span className="text-[13px] text-gray-500 line-through">
              {p.oldPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
