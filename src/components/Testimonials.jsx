import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ava Thompson",
    role: "Booked: Home Cleaning",
    text: "So easy to schedule and the pro was amazing. My apartment has never looked better!",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Liam Patel",
    role: "Booked: Haircut",
    text: "Loved the convenience. Great stylist and seamless payment.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Noah Garcia",
    role: "Booked: Massage Therapy",
    text: "Professional, punctual and exactly what I needed after a long week.",
    img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1B4C]">What customers say</h2>
            <p className="text-[#0B1B4C]/70">Real reviews that build real trust.</p>
          </div>
          <div className="flex gap-6 text-center">
            <div>
              <div className="text-3xl font-extrabold text-[#7C3AED]">120k+</div>
              <div className="text-sm text-[#0B1B4C]/70">Bookings</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-[#7C3AED]">35k+</div>
              <div className="text-sm text-[#0B1B4C]/70">Active users</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-[#7C3AED]">8k+</div>
              <div className="text-sm text-[#0B1B4C]/70">Providers</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-4">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-semibold text-[#0B1B4C]">{t.name}</div>
                  <div className="text-sm text-[#0B1B4C]/70">{t.role}</div>
                </div>
              </div>
              <div className="mt-3 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < t.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                ))}
              </div>
              <p className="mt-3 text-[#0B1B4C]/80">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
