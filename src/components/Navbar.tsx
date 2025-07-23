import  { useState, useEffect } from 'react';
import { Menu, X  } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${isScrolled 
        ? 'bg-gradient-to-r from-white via-emerald-100 to-emerald-300/80 backdrop-blur-md shadow-lg' 
        : 'bg-gradient-to-r from-white via-emerald-100 to-emerald-300/90'}
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img 
              src="/green%20world.png" 
              alt="Green World Holidays" 
              className="h-14 sm:h-14 lg:h-16 w-auto drop-shadow-md"
            />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8 mt-4">
              {['Home', 'Services', 'Destinations', 'Vehicles', 'Testimonials', 'About','Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 py-2 text-base font-medium transition-colors hover:text-emerald-600 hover:bg-emerald-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-white ${
                    isScrolled ? 'text-gray-700' : 'text-emerald-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-gray-700' : 'text-emerald-700'} bg-white/70 hover:bg-emerald-100 transition-colors`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-white via-emerald-100 to-emerald-300/90 backdrop-blur-md shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {['Home', 'Services', 'Destinations', 'Vehicles', 'Testimonials', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block px-4 py-3 text-base font-medium text-emerald-800 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg w-full text-left mobile-touch-target transition-all duration-200"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;