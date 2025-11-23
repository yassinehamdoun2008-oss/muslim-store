import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { getCartCount } from '../utils/cart';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Mettre à jour le compteur du panier
    const updateCartCount = () => {
      setCartCount(getCartCount());
    };

    updateCartCount();
    window.addEventListener('cartUpdated', updateCartCount);

    return () => {
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  const navigation = [
    { name: 'Accueil', page: 'home' },
    { name: 'Boutique', page: 'shop' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#0f8f5e] to-[#0a6b45] rounded-lg flex items-center justify-center transform transition-transform group-hover:scale-105">
              <span className="text-white font-bold">M</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl tracking-tight text-[#0f8f5e]">Mouslim</span>
              <span className="text-[10px] text-gray-500 -mt-1 hidden sm:block">Par des musulmans, pour des musulmans</span>
            </div>
          </button>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`transition-colors relative py-1 ${
                  currentPage === item.page
                    ? 'text-[#0f8f5e]'
                    : 'text-gray-600 hover:text-[#0f8f5e]'
                }`}
              >
                {item.name}
                {currentPage === item.page && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0f8f5e]" />
                )}
              </button>
            ))}
          </nav>

          {/* Panier et Menu Mobile */}
          <div className="flex items-center space-x-4">
            {/* Panier */}
            <button
              onClick={() => onNavigate('cart')}
              className="relative p-2 text-gray-600 hover:text-[#0f8f5e] transition-colors"
              aria-label="Panier"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#0f8f5e] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-fade-in-up">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Menu Hamburger Mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-[#0f8f5e] transition-colors"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in-up">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    onNavigate(item.page);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2 rounded-lg transition-colors ${
                    currentPage === item.page
                      ? 'bg-[#cfeee0] text-[#0f8f5e]'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
