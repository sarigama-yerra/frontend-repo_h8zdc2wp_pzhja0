import { Star } from "lucide-react";

const items = [
  {
    title: "Premium Hair Styling",
    price: 65,
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Home Deep Cleaning",
    price: 120,
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Massage Therapy",
    price: 80,
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Handyman Repairs",
    price: 90,
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1200&auto=format&fit=crop",
  },
];

const Featured = () => {
  return (
    <section id="featured" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1B4C]">Featured services</h2>
          <a href="#" className="text-[#7C3AED] hover:underline">Explore more</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="group rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg text-sm text-[#0B1B4C]">
                  ${item.price}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-[#0B1B4C] truncate">{item.title}</h3>
                <div className="mt-2 flex items-center gap-1 text-[#0B1B4C]/80">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">{item.rating}</span>
                </div>
                <button className="mt-4 w-full h-10 rounded-xl bg-[#FF4D9A] hover:bg-[#ff328c] text-white font-medium">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
