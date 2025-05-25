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
    <header className="bg-white border-b border-[#E5E5E5] relative z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center">
          {/* Logo */}
          <div 
            onClick={() => handleNavigation('/')}
            className="font-david text-3xl font-semibold text-black cursor-pointer tracking-wide"
          >
            3143
          </div>

          {/* Desktop Navigation - shifted to right */}
          <div className="hidden md:flex items-center space-x-10 ml-auto">
            <button
              onClick={() => handleNavigation('/inner-circle')}
              className="font-motiva text-sm font-medium text-[#333333] hover:text-black transition-colors uppercase tracking-wider"
            >
              Inner Circle
            </button>
            
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center font-motiva text-sm font-medium text-[#333333] hover:text-black transition-colors uppercase tracking-wider"
              >
                Exclusive Armadale
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg border border-[#E5E5E5] rounded-sm py-1 z-50">
                  <button
                    onClick={() => handleNavigation('/campaigns')}
                    className="block w-full text-left px-4 py-2 font-motiva text-sm text-[#333333] hover:bg-[#F7F7F7] uppercase tracking-wider"
                  >
                    View All
                  </button>
                  <button
                    onClick={() => handleNavigation('/campaigns/category/BRIDAL')}
                    className="block w-full text-left px-4 py-2 font-motiva text-sm text-[#333333] hover:bg-[#F7F7F7] uppercase tracking-wider"
                  >
                    Bridal
                  </button>
                  <button
                    onClick={() => handleNavigation('/campaigns/category/BEAUTY')}
                    className="block w-full text-left px-4 py-2 font-motiva text-sm text-[#333333] hover:bg-[#F7F7F7] uppercase tracking-wider"
                  >
                    Beauty
                  </button>
                  <button
                    onClick={() => handleNavigation('/campaigns/category/FASHION')}
                    className="block w-full text-left px-4 py-2 font-motiva text-sm text-[#333333] hover:bg-[#F7F7F7] uppercase tracking-wider"
                  >
                    Fashion
                  </button>
                  <button
                    onClick={() => handleNavigation('/campaigns/category/FOOD')}
                    className="block w-full text-left px-4 py-2 font-motiva text-sm text-[#333333] hover:bg-[#F7F7F7] uppercase tracking-wider"
                  >
                    Food & Drink
                  </button>
                  <button
                    onClick={() => handleNavigation('/campaigns/category/SERVICES')}
                    className="block w-full text-left px-4 py-2 font-motiva text-sm text-[#333333] hover:bg-[#F7F7F7] uppercase tracking-wider"
                  >
                    Services
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavigation('/stories')}
              className="font-motiva text-sm font-medium text-[#333333] hover:text-black transition-colors uppercase tracking-wider"
            >
              Neighbourhood News
            </button>

            {/* Members Button */}
            <button
              onClick={() => handleNavigation('/login')}
              className="font-motiva text-sm font-medium bg-black text-white px-6 py-2.5 hover:bg-[#333333] transition-colors uppercase tracking-wider ml-4"
            >
              Members
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-[#E5E5E5]">
            <div className="space-y-4">
              <button
                onClick={() => handleNavigation('/inner-circle')}
                className="block w-full text-left font-motiva text-sm font-medium text-[#333333] hover:text-black uppercase tracking-wider"
              >
                Inner Circle
              </button>
              <button
                onClick={() => handleNavigation('/campaigns')}
                className="block w-full text-left font-motiva text-sm font-medium text-[#333333] hover:text-black uppercase tracking-wider"
              >
                Exclusive Armadale
              </button>
              <button
                onClick={() => handleNavigation('/stories')}
                className="block w-full text-left font-motiva text-sm font-medium text-[#333333] hover:text-black uppercase tracking-wider"
              >
                Neighbourhood News
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
