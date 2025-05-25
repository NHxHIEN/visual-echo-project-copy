
import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 relative z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => handleNavigation('/')}
            className="text-3xl font-bold text-black cursor-pointer"
          >
            3143
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavigation('/inner-circle')}
              className="text-gray-700 hover:text-black transition-colors font-medium"
            >
              INNER CIRCLE
            </button>
            
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-gray-700 hover:text-black transition-colors font-medium"
              >
                EXCLUSIVE ARMADALE
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 rounded-md py-2 z-50">
                  <button
                    onClick={() => handleNavigation('/campaigns')}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-black"
                  >
                    View All
                  </button>
                  <button
                    onClick={() => handleNavigation('/campaigns/category/BRIDAL')}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-black"
                  >
                    Bridal
                  </button>
                  <button
                    onClick={() => handleNavigation('/campaigns/category/BEAUTY')}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-black"
                  >
                    Beauty
                  </button>
                  <button
                    onClick={() => handleNavigation('/campaigns/category/FASHION')}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-black"
                  >
                    Fashion
                  </button>
                  <button
                    onClick={() => handleNavigation('/campaigns/category/FOOD')}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-black"
                  >
                    Food & Drink
                  </button>
                  <button
                    onClick={() => handleNavigation('/campaigns/category/SERVICES')}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-black"
                  >
                    Services
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavigation('/stories')}
              className="text-gray-700 hover:text-black transition-colors font-medium"
            >
              NEIGHBOURHOOD NEWS
            </button>
          </div>

          {/* Members Button */}
          <button
            onClick={() => handleNavigation('/login')}
            className="bg-black text-white px-6 py-2 font-medium hover:bg-gray-800 transition-colors"
          >
            MEMBERS
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="space-y-4">
              <button
                onClick={() => handleNavigation('/inner-circle')}
                className="block text-gray-700 hover:text-black font-medium"
              >
                INNER CIRCLE
              </button>
              <button
                onClick={() => handleNavigation('/campaigns')}
                className="block text-gray-700 hover:text-black font-medium"
              >
                EXCLUSIVE ARMADALE
              </button>
              <button
                onClick={() => handleNavigation('/stories')}
                className="block text-gray-700 hover:text-black font-medium"
              >
                NEIGHBOURHOOD NEWS
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
