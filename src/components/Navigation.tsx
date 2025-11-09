import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 p-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <img
                src="/LOGO.svg"
                alt="GDG On Campus logo"
                className="w-64 h-48 object-contain"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("sponsors")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Sponsors
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-gray-100">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("sponsors")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Sponsors
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
