import { Search, Calendar, CreditCard, PartyPopper } from "lucide-react";

const steps = [
  { icon: Search, title: "Search", text: "Find top-rated professionals in minutes" },
  { icon: Calendar, title: "Book", text: "Pick a time that works for you" },
  { icon: CreditCard, title: "Pay", text: "Fast, secure checkout with protection" },
  { icon: PartyPopper, title: "Enjoy", text: "Sit back while the pro takes care of it" },
];

const HowItWorks = () => {
  return (
    <section id="how" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1B4C] text-center">How it works</h2>
        <p className="mt-2 text-center text-[#0B1B4C]/70">It’s simple: Search → Book → Pay → Enjoy</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7C3AED]/10 to-[#FF4D9A]/10 flex items-center justify-center">
                <Icon className="w-6 h-6 text-[#7C3AED]" />
              </div>
              <h3 className="mt-4 font-semibold text-[#0B1B4C]">{title}</h3>
              <p className="mt-1 text-sm text-[#0B1B4C]/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
