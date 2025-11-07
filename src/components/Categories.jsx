import { Sparkles, Home, Dumbbell, Scissors, Wrench, Brush, Heart, Car } from "lucide-react";

const categories = [
  { icon: Scissors, label: "Beauty" },
  { icon: Home, label: "Home" },
  { icon: Dumbbell, label: "Fitness" },
  { icon: Wrench, label: "Repairs" },
  { icon: Brush, label: "Cleaning" },
  { icon: Heart, label: "Wellness" },
  { icon: Car, label: "Auto Care" },
  { icon: Sparkles, label: "Events" },
];

const Categories = () => {
  return (
    <section id="categories" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1B4C]">Browse by category</h2>
          <a href="#" className="text-[#7C3AED] hover:underline">See all</a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map(({ icon: Icon, label }) => (
            <button
              key={label}
              className="group relative rounded-2xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#7C3AED]/10 to-[#FF4D9A]/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#7C3AED] group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-sm font-medium text-[#0B1B4C]">{label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
