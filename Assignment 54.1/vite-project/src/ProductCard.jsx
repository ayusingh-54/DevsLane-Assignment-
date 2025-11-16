export default function ProductCard({ p }) {
  return (
    <div className="bg-white rounded-lg p-3.5 text-left transition-all duration-200 ease-in-out hover:-translate-y-1.5 hover:shadow-xl relative">
      <div className="relative h-56 flex items-center justify-center overflow-hidden rounded-md bg-gray-50">
        {p.sale && (
          <span className="absolute top-2.5 right-2.5 bg-red-500 text-white text-xs px-2 py-1.5 rounded-full">
            Sale
          </span>
        )}
        <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
      </div>
      <div className="pt-3">
        <div className="text-xs text-gray-500 mb-1.5">{p.category}</div>
        <h3 className="text-[15px] m-0 mb-1.5 text-gray-900">{p.title}</h3>
        <div className="text-amber-500 text-xs mb-2">★★★★★</div>
        <div className="flex items-center gap-2">
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
