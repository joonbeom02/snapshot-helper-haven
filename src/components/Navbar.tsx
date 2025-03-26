
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-xl md:text-2xl font-serif font-medium">
            Photographer
          </NavLink>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "nav-link nav-link-active" : "nav-link text-gray-600"
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/portfolio" 
              className={({ isActive }) => 
                isActive ? "nav-link nav-link-active" : "nav-link text-gray-600"
              }
            >
              Portfolio
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? "nav-link nav-link-active" : "nav-link text-gray-600"
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive ? "nav-link nav-link-active" : "nav-link text-gray-600"
              }
            >
              Contact
            </NavLink>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg animate-fade-in">
          <nav className="container mx-auto py-6 flex flex-col items-center space-y-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "nav-link nav-link-active" : "nav-link text-gray-600"
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/portfolio" 
              className={({ isActive }) => 
                isActive ? "nav-link nav-link-active" : "nav-link text-gray-600"
              }
            >
              Portfolio
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? "nav-link nav-link-active" : "nav-link text-gray-600"
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive ? "nav-link nav-link-active" : "nav-link text-gray-600"
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
