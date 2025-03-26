
import { Instagram, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 mt-20 py-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Photographer. All rights reserved.
            </div>
          </div>
          
          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            <Link to="/portfolio" className="text-sm text-gray-600 hover:text-black transition-colors">
              Portfolio
            </Link>
            <Link to="/about" className="text-sm text-gray-600 hover:text-black transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-sm text-gray-600 hover:text-black transition-colors">
              Contact
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a 
              href="mailto:contact@photographer.com" 
              className="text-gray-500 hover:text-black transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
