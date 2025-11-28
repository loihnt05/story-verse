import { useState } from "react";
import { Search, User, DollarSign, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-black relative z-50">
      <div className="h-20 flex items-center justify-between px-4 md:px-8">

        <div className="flex-1 max-w-2xl flex items-center gap-4 lg:gap-7">
          <img
            src="/apple-touch-icon.png"
            alt="Logo"
            className="size-10 shrink-0" 
          />
          
          <div className="hidden lg:block relative flex-1">
            <input
              type="text"
              placeholder="Search Story"
              className="w-full bg-[#1c1c1c] text-gray-200 placeholder-gray-400 rounded-full py-3 pl-6 pr-12 focus:outline-none focus:ring-1 focus:ring-gray-600 transition-all"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8 mx-8">
          {['Home', 'Category', 'Popular'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-white font-bold text-lg hover:text-gray-300 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center bg-[#1c1c1c] rounded-full px-4 py-2 gap-2">
            <span className="text-white font-medium tracking-wide">
              100000000
            </span>
            <DollarSign className="text-white w-5 h-5" />
          </div>

          <button className="text-white hover:opacity-80 transition-opacity">
            <User className="w-8 h-8" strokeWidth={2} />
          </button>
        </div>

        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-black border-t border-gray-800 p-4 shadow-xl flex flex-col gap-4 animate-in slide-in-from-top-5 duration-200">
          
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search Story"
              className="w-full bg-[#1c1c1c] text-gray-200 placeholder-gray-400 rounded-full py-3 pl-6 pr-12 focus:outline-none focus:ring-1 focus:ring-gray-600"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          <div className="flex flex-col gap-4 py-2">
            {['Home', 'Category', 'Popular'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white font-bold text-lg hover:text-gray-300 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-gray-800 pt-4">
            <div className="flex items-center bg-[#1c1c1c] rounded-full px-4 py-2 gap-2">
              <span className="text-white font-medium tracking-wide text-sm">
                100000000
              </span>
              <DollarSign className="text-white w-4 h-4" />
            </div>

            <div className="flex items-center gap-3">
                <span className="text-white text-sm font-medium">My Profile</span>
                <button className="text-white hover:opacity-80">
                <User className="w-8 h-8" strokeWidth={2} />
                </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}