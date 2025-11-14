import React from "react";
import Card from "./Card";

function Page() {
  // Product categories with nested product data - Nested Data Structure
  const productCategories = [
    {
      categoryName: "Mugs",
      products: [
        {
          id: 1,
          category: "Mugs",
          name: "Black Printed Coffee Mug",
          price: "$15.00",
          image:
            "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&h=500&fit=crop",
          rating: 0,
          sale: false,
        },
        {
          id: 2,
          category: "Mugs",
          name: "Father's Day Coffee Mug",
          price: "$15.00",
          image:
            "https://images.unsplash.com/photo-1517256673644-36ad11246d21?w=500&h=500&fit=crop",
          rating: 0,
          sale: false,
        },
        {
          id: 4,
          category: "Mugs",
          name: "Personalized Mug",
          price: "$15.00",
          image:
            "https://images.unsplash.com/photo-1610701969166-f820b23a6b5f?w=500&h=500&fit=crop",
          rating: 0,
          sale: false,
        },
      ],
    },
    {
      categoryName: "Tshirts",
      products: [
        {
          id: 3,
          category: "Tshirts",
          name: "Green Printed Tshirt",
          price: "$34.00",
          image:
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
          rating: 0,
          sale: false,
        },
        {
          id: 5,
          category: "Tshirts",
          name: "Printed Brown Tshirt",
          price: "$25.00",
          originalPrice: "$34.00",
          image:
            "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=500&fit=crop",
          rating: 0,
          sale: true,
        },
        {
          id: 6,
          category: "Tshirts",
          name: "Printed Dark Blue Tshirt",
          price: "$34.00",
          image:
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=500&fit=crop",
          rating: 0,
          sale: false,
        },
        {
          id: 7,
          category: "Tshirts",
          name: "Printed Green Tshirt",
          price: "$28.00",
          originalPrice: "$35.00",
          image:
            "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=500&h=500&fit=crop",
          rating: 0,
          sale: true,
        },
        {
          id: 8,
          category: "Tshirts",
          name: "Printed Tshirt Coffee Mood Color",
          price: "$25.00",
          originalPrice: "$35.00",
          image:
            "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=500&fit=crop",
          rating: 0,
          sale: true,
        },
        {
          id: 9,
          category: "Tshirts",
          name: "Typography Feel Printed Tshirt",
          price: "$33.00",
          originalPrice: "$45.00",
          image:
            "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&h=500&fit=crop",
          rating: 0,
          sale: true,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* Amazon Logo */}
              <svg className="w-24 h-8" viewBox="0 0 103 30" fill="none">
                <path
                  d="M62.5 24.5C55.5 29.5 45.5 32 37 32C24.5 32 13 27.5 4 19.5C3.25 18.75 3.875 17.75 4.875 18.25C13.25 23 23.5 26 34 26C41 26 48.5 24.5 55.5 21.25C56.75 20.625 57.75 22 62.5 24.5Z"
                  fill="#FF9900"
                />
                <path
                  d="M65.5 21C64.5 19.75 59.5 20.375 57.25 20.625C56.5 20.75 56.375 20.125 57 19.625C60.75 17 67.25 17.875 68.125 18.875C69 19.875 67.875 26.5 64.375 29.625C63.75 30.125 63.125 29.875 63.375 29.125C64.375 26.375 66.5 22.25 65.5 21Z"
                  fill="#FF9900"
                />
                <path
                  d="M58.5 3V1.25C58.5 0.875 58.75 0.625 59.125 0.625H71.375C71.75 0.625 72 0.875 72 1.25V2.75C72 3.125 71.75 3.5 71.25 4.125L64.75 13.25C67.25 13.125 70 13.625 72.25 15C72.625 15.25 72.75 15.625 72.75 16V17.875C72.75 18.25 72.375 18.625 72 18.5C69 16.875 64.875 16.5 61.375 18.5C61 18.75 60.625 18.375 60.625 18V16.25C60.625 15.75 60.625 14.875 61.125 14.125L68.5 3.875H59.125C58.75 3.875 58.5 3.625 58.5 3.25V3Z"
                  fill="black"
                />
                <path
                  d="M21 19.5H18.25C18 19.5 17.75 19.25 17.75 19V1.25C17.75 1 18 0.75 18.25 0.75H20.75C21 0.75 21.25 1 21.25 1.25V3H21.375C22.625 0.875 24.375 0 26.625 0C28.875 0 30.375 0.875 31.5 3C32.75 0.875 34.875 0 36.875 0C38.375 0 40 0.625 41 1.875C42.125 3.25 41.875 5.25 41.875 7.125V19C41.875 19.25 41.625 19.5 41.375 19.5H38.625C38.375 19.5 38.125 19.25 38.125 19V8.75C38.125 7.875 38.25 5.75 37.875 4.875C37.375 3.625 36.25 3.25 35.125 3.25C34.25 3.25 33.25 3.75 32.75 4.625C32.25 5.5 32.25 7 32.25 8V19C32.25 19.25 32 19.5 31.75 19.5H29C28.75 19.5 28.5 19.25 28.5 19V8.75C28.5 6.5 28.875 3.25 26.25 3.25C23.625 3.25 23.75 6.375 23.75 8.75V19C23.75 19.25 23.5 19.5 23.25 19.5H21Z"
                  fill="black"
                />
                <path
                  d="M78.5 0C84.25 0 87.25 5.25 87.25 11.25C87.25 17 84 22 78.5 22C72.875 22 70 16.75 70 11C70 5.25 72.875 0 78.5 0ZM78.5 3.375C75.625 3.375 75.375 7.25 75.375 9.5C75.375 11.75 75.375 18.625 78.5 18.625C81.5 18.625 81.75 14.5 81.75 12.125C81.75 10.625 81.625 8.5 81 7.125C80.5 5.875 79.75 3.375 78.5 3.375Z"
                  fill="black"
                />
                <path
                  d="M93.25 19.5H90.5C90.25 19.5 90 19.25 90 19V1.25C90 1 90.25 0.75 90.5 0.75H93C93.25 0.75 93.5 1 93.5 1.25V3.5H93.625C94.75 0.875 96.375 0 98.75 0C100.5 0 102.25 0.625 103.25 2.25C104.125 3.75 104.125 6 104.125 7.875V19.125C104.125 19.375 103.875 19.625 103.625 19.625H100.875C100.625 19.625 100.375 19.375 100.375 19.125V9C100.375 6.75 100.625 3.375 98 3.375C97.125 3.375 96.25 3.875 95.75 4.75C95.125 5.875 95 7 95 8.25V19C95 19.25 94.75 19.5 94.5 19.5H93.25Z"
                  fill="black"
                />
                <path
                  d="M51 8.5C51 10 51 11.25 50.125 12.5C49.375 13.5 48.25 14.125 47.125 14.125C45.5 14.125 44.5 13 44.5 11.25C44.5 7.875 47.5 7.25 51 7.25V8.5ZM53.75 19.375C53.625 19.5 53.375 19.5 53.25 19.375C52 18.25 51.75 17.75 51 16.625C48.75 18.875 47.125 19.625 44.375 19.625C41.125 19.625 38.625 17.75 38.625 13.875C38.625 10.75 40.375 8.625 42.875 7.625C45.125 6.75 48.25 6.625 51 6.375V6C51 5 51.125 3.875 50.375 3C49.75 2.25 48.625 2 47.75 2C46.125 2 44.625 2.75 44.25 4.375C44.125 4.75 43.875 5 43.5 5H40.875C40.5 5 40.25 4.75 40.25 4.375C40.75 1.25 43.625 0 46.375 0C47.75 0 49.625 0.375 50.875 1.375C52.5 2.75 52.375 4.625 52.375 6.75V12.25C52.375 13.75 53 14.375 53.5 15.125C53.625 15.375 53.625 15.625 53.5 15.75L53.75 19.375Z"
                  fill="black"
                />
                <path
                  d="M9.25 8.5C9.25 10 9.25 11.25 8.375 12.5C7.625 13.5 6.5 14.125 5.375 14.125C3.75 14.125 2.75 13 2.75 11.25C2.75 7.875 5.75 7.25 9.25 7.25V8.5ZM12 19.375C11.875 19.5 11.625 19.5 11.5 19.375C10.25 18.25 10 17.75 9.25 16.625C7 18.875 5.375 19.625 2.625 19.625C-0.625 19.625 -3.125 17.75 -3.125 13.875C-3.125 10.75 -1.375 8.625 1.125 7.625C3.375 6.75 6.5 6.625 9.25 6.375V6C9.25 5 9.375 3.875 8.625 3C8 2.25 6.875 2 6 2C4.375 2 2.875 2.75 2.5 4.375C2.375 4.75 2.125 5 1.75 5H-0.875C-1.25 5 -1.5 4.75 -1.5 4.375C-1 1.25 1.875 0 4.625 0C6 0 7.875 0.375 9.125 1.375C10.75 2.75 10.625 4.625 10.625 6.75V12.25C10.625 13.75 11.25 14.375 11.75 15.125C11.875 15.375 11.875 15.625 11.75 15.75L12 19.375Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Sorting Dropdown */}
        <div className="flex justify-end mb-6">
          <select className="border border-gray-300 rounded-md px-4 py-2 bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent cursor-pointer shadow-sm">
            <option>Default sorting</option>
            <option>Sort by price: low to high</option>
            <option>Sort by price: high to low</option>
            <option>Sort by popularity</option>
            <option>Sort by latest</option>
          </select>
        </div>

        {/* Product Grid using Nested Loops */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Outer Loop - Categories */}
          {productCategories.map((category, categoryIndex) => (
            // Inner Loop - Products in each category
            <React.Fragment key={categoryIndex}>
              {category.products.map((product) => (
                <Card key={product.id} {...product} />
              ))}
            </React.Fragment>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors font-medium shadow-sm">
            1
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors font-medium shadow-sm">
            2
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors font-medium shadow-sm">
            →
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-700 text-white py-6 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-300">
              Copyright © 2025 | Codesyogi
            </p>
            <p className="text-sm text-gray-300">Powered by Codesyogi</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Page;
