import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <svg 
              className="h-8 w-8 text-blue-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
              />
            </svg>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI News Weekly</span>
          </Link>
          
          <div className="hidden md:flex space-x-1">
            <NavLink to="/academic-research">Academic Research</NavLink>
            <NavLink to="/model-updates">Model Updates</NavLink>
            <NavLink to="/product-launches">Product Launches</NavLink>
            <NavLink to="/ai-agents">AI Agents</NavLink>
            <NavLink to="/learning-resources">Learning Resources</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 animate-accordion-down">
            <MobileNavLink to="/academic-research" onClick={toggleMenu}>Academic Research</MobileNavLink>
            <MobileNavLink to="/model-updates" onClick={toggleMenu}>Model Updates</MobileNavLink>
            <MobileNavLink to="/product-launches" onClick={toggleMenu}>Product Launches</MobileNavLink>
            <MobileNavLink to="/ai-agents" onClick={toggleMenu}>AI Agents</MobileNavLink>
            <MobileNavLink to="/learning-resources" onClick={toggleMenu}>Learning Resources</MobileNavLink>
            <MobileNavLink to="/about" onClick={toggleMenu}>About</MobileNavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }) => {
  return (
    <Link 
      to={to} 
      className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition duration-150 ease-in-out"
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ to, children, onClick }) => {
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition duration-150 ease-in-out"
    >
      {children}
    </Link>
  );
};

export default Navbar;
