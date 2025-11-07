import { User, LogIn } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/70 border-b border-white/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#FF4D9A]" />
          <span className="font-semibold text-[#0B1B4C]">Servio</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-[#0B1B4C]/80">
          <a href="#categories" className="hover:text-[#0B1B4C] transition-colors">Categories</a>
          <a href="#how" className="hover:text-[#0B1B4C] transition-colors">How it works</a>
          <a href="#featured" className="hover:text-[#0B1B4C] transition-colors">Featured</a>
          <a href="#reviews" className="hover:text-[#0B1B4C] transition-colors">Reviews</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex items-center gap-2 px-4 h-10 rounded-xl text-[#0B1B4C] hover:bg-[#0B1B4C]/5 transition-colors">
            <User className="w-4 h-4" /> Sign Up
          </button>
          <button className="inline-flex items-center gap-2 px-4 h-10 rounded-xl text-white bg-[#7C3AED] hover:bg-[#6b2fd8] transition-colors shadow-sm">
            <LogIn className="w-4 h-4" /> Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
