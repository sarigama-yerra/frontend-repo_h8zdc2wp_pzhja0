import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0B1B4C] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#FF4D9A]" />
            <div className="font-semibold">Servio</div>
          </div>
          <div className="flex gap-6 text-white/80">
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Careers</a>
            <a href="#" className="hover:text-white">Support</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" aria-label="Facebook" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" aria-label="Instagram" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>
        <div className="mt-8 text-sm text-white/70">© {new Date().getFullYear()} Servio, Inc. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
