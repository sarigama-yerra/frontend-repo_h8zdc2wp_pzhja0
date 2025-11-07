import Spline from "@splinetool/react-spline";
import { Search, ShieldCheck, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-[85vh] min-h-[640px] w-full pt-16 overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: "100%", height: "100%" }} />
      </div>

      {/* Gradient overlay to match brand - doesn't block Spline interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-[#0B1B4C]/40 to-white"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-full">
        <div className="my-auto text-center text-white max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Book trusted pros for anything you need
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            Beauty, home repair, wellness and more — all in one place.
          </p>

          {/* Floating search bar */}
          <div className="mt-8 max-w-2xl mx-auto bg-white/70 backdrop-blur-md shadow-xl rounded-2xl border border-white/60 overflow-hidden">
            <div className="flex flex-col sm:flex-row">
              <div className="flex-1 flex items-center gap-2 px-4 py-3">
                <Search className="w-5 h-5 text-[#7C3AED]" />
                <input
                  type="text"
                  placeholder="Try 'hair stylist', 'plumber'..."
                  className="w-full bg-transparent placeholder-gray-500 focus:outline-none text-[#0B1B4C]"
                />
              </div>
              <button className="sm:ml-auto m-2 sm:m-0 sm:rounded-l-none rounded-xl bg-[#FF4D9A] hover:bg-[#ff328c] text-white px-6 py-3 font-medium transition-colors">
                Search
              </button>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-6 flex items-center justify-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" /> Secure
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" /> Trusted by 10k+ users
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <button className="px-6 py-3 rounded-xl bg-[#7C3AED] hover:bg-[#6b2fd8] text-white shadow-lg">
              Book Now
            </button>
            <button className="px-6 py-3 rounded-xl border border-white/30 bg-white/10 hover:bg-white/20 text-white">
              Join as Provider
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
