export default function NewArrivalsSection() {
  const products = [
    {
      name: "Hibiscus Flower",
      price: "7.00₪",
      image: "/99.webp",
      hoverImage: "/9.9.webp",
    },
    {
      name: "Chamomile Tea",
      price: "8.00₪",
      image: "/88.webp",
      hoverImage: "/8.8.webp",
    },
    {
      name: "Raspberry Leaves",
      price: "8.00₪",
      image: "/77.webp",
      hoverImage: "/7.7.webp",
    },
    {
      name: "Rosemary Specials",
      price: "5.00₪",
      image: "/66.webp",
      hoverImage: "/6.6.webp",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 text-center">
      <h2 className="text-2xl font-serif italic text-gray-800 mb-2">New Arrivals</h2>
      <p className="text-sm text-gray-500 mb-12">
        I'm a paragraph. Click here to add your own text and edit me.{" "}
        <strong>Let your users get to know you.</strong>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
        {products.map((item, index) => (
          <div key={index} className="text-center">
            {/* الصورتين مع الهوفر */}
            <div className="relative w-[230px] h-[320px] mx-auto group overflow-hidden">
              {/* الصورة الأساسية */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0"
              />
              {/* الصورة عند الهوفر */}
              <img
                src={item.hoverImage}
                alt={item.name + ' hover'}
                className="absolute top-0 left-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              {/* Quick View */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 text-black text-sm text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Quick View
              </div>
            </div>

            {/* اسم المنتج والسعر */}
            <h4 className="mt-4 font-medium italic">{item.name}</h4>
            <p className="text-sm text-gray-600">{item.price}</p>
          </div>
        ))}
      </div>

      <button className="mt-10 px-6 py-2 bg-black text-white text-sm hover:bg-gray-800">
        Shop All
      </button>
    </section>
  );
}
