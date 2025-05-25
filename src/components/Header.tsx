import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsDropdownOpen(false);
  };

  return (
    <header className="relative z-50">
     

      {/* Main nav */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            
            {/* Logo */}
            <div
              onClick={() => handleNavigation('/')}
              className="text-4xl font-bold text-black cursor-pointer"
            >
              3143
            </div>

            {/* Navigation - shift to right */}
            <div className="flex items-center space-x-10 ml-auto">
              <button
                onClick={() => handleNavigation('/inner-circle')}
                className="text-gray-800 font-medium hover:text-black"
              >
                INNER CIRCLE
              </button>

              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center text-gray-800 font-medium hover:text-black"
                >
                  EXCLUSIVE ARMADALE
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 rounded-md py-2 z-50">
                    <button
                      onClick={() => handleNavigation('/campaigns')}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-black hover:text-white"
                    >
                      View All
                    </button>
                    {['BRIDAL', 'BEAUTY', 'FASHION', 'FOOD', 'SERVICES'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => handleNavigation(`/campaigns/category/${cat}`)}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-black hover:text-white"
                      >
                        {cat.charAt(0) + cat.slice(1).toLowerCase().replace('_', ' & ')}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavigation('/stories')}
                className="text-gray-800 font-medium hover:text-black"
              >
                NEIGHBOURHOOD NEWS
              </button>
            </div>

            {/* Members button */}
            <button
              onClick={() => handleNavigation('/login')}
              className="bg-black text-white px-6 py-2 font-medium hover:bg-gray-800 transition-colors ml-6"
            >
              MEMBERS
            </button>
          </div>
        </nav>

    </header>
  );
};

export default Header;
