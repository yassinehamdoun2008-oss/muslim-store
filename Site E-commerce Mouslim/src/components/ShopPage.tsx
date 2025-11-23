import React, { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from './ProductCard';

interface ShopPageProps {
  onNavigate: (page: string, productId?: string) => void;
}

export function ShopPage({ onNavigate }: ShopPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [showFilters, setShowFilters] = useState(false);

  // Extraire les catégories uniques
  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];

  // Filtrer et trier les produits
  let filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  // Trier les produits
  if (sortBy === 'price-asc') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#cfeee0]/10">
      {/* En-tête */}
      <div className="bg-gradient-to-r from-[#0f8f5e] to-[#0a6b45] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4">Notre Boutique</h1>
          <p className="text-white/90 text-lg max-w-2xl">
            Découvrez notre collection complète d'objets islamiques de qualité
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filtres - Desktop */}
          <aside className="hidden lg:block lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24 border border-gray-100">
              <h3 className="mb-6 text-[#0f8f5e]">Filtres</h3>

              {/* Catégories */}
              <div className="mb-6">
                <h4 className="text-sm mb-4 text-gray-900">Catégories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === category
                          ? 'bg-[#cfeee0] text-[#0f8f5e]'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {category === 'all' ? 'Tous les produits' : category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tri */}
              <div>
                <h4 className="text-sm mb-4 text-gray-900">Trier par</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0f8f5e] focus:border-transparent"
                >
                  <option value="featured">Recommandé</option>
                  <option value="price-asc">Prix croissant</option>
                  <option value="price-desc">Prix décroissant</option>
                  <option value="rating">Mieux notés</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Contenu principal */}
          <div className="flex-1">
            {/* Barre de filtres mobile */}
            <div className="lg:hidden mb-6">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="w-full bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100 flex items-center justify-between"
              >
                <span className="flex items-center space-x-2">
                  <Filter className="w-5 h-5 text-[#0f8f5e]" />
                  <span className="text-gray-900">Filtres</span>
                </span>
                {showFilters ? <X className="w-5 h-5" /> : <span className="text-gray-400">→</span>}
              </button>

              {/* Panneau de filtres mobile */}
              {showFilters && (
                <div className="mt-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 animate-fade-in-up">
                  {/* Catégories */}
                  <div className="mb-6">
                    <h4 className="text-sm mb-4 text-gray-900">Catégories</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => {
                            setSelectedCategory(category);
                            setShowFilters(false);
                          }}
                          className={`px-4 py-2 rounded-lg transition-colors text-sm ${
                            selectedCategory === category
                              ? 'bg-[#cfeee0] text-[#0f8f5e]'
                              : 'text-gray-600 hover:bg-gray-100 border border-gray-200'
                          }`}
                        >
                          {category === 'all' ? 'Tous' : category}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tri */}
                  <div>
                    <h4 className="text-sm mb-4 text-gray-900">Trier par</h4>
                    <select
                      value={sortBy}
                      onChange={(e) => {
                        setSortBy(e.target.value);
                        setShowFilters(false);
                      }}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0f8f5e] focus:border-transparent"
                    >
                      <option value="featured">Recommandé</option>
                      <option value="price-asc">Prix croissant</option>
                      <option value="price-desc">Prix décroissant</option>
                      <option value="rating">Mieux notés</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

            {/* En-tête résultats */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                <span className="text-[#0f8f5e]">{filteredProducts.length}</span> produit{filteredProducts.length > 1 ? 's' : ''}
              </p>
            </div>

            {/* Grille de produits */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onViewDetails={(id) => onNavigate('product', id)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="mb-2 text-gray-900">Aucun produit trouvé</h3>
                <p className="text-gray-600 mb-6">
                  Essayez de modifier vos filtres pour voir plus de résultats
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSortBy('featured');
                  }}
                  className="bg-[#0f8f5e] text-white px-6 py-3 rounded-xl hover:bg-[#0a6b45] transition-colors"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
