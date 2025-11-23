import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../data/products';
import { addToCart } from '../utils/cart';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
  onViewDetails: (productId: string) => void;
}

export function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const [isAdding, setIsAdding] = React.useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAdding(true);
    
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });

    setTimeout(() => setIsAdding(false), 1000);
  };

  const discount = Math.round(((product.costPrice / product.price) * 100));

  return (
    <div
      onClick={() => onViewDetails(product.id)}
      className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-[#cfeee0]/20 to-gray-50">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badge Catégorie */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-[#0f8f5e]">
            {product.category}
          </span>
        </div>

        {/* Badge Réduction */}
        <div className="absolute top-4 right-4">
          <span className="bg-[#0f8f5e] text-white px-3 py-1 rounded-full text-xs">
            -{100 - discount}%
          </span>
        </div>

        {/* Bouton Panier au survol */}
        <button
          onClick={handleAddToCart}
          disabled={isAdding}
          className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#0f8f5e] hover:text-white disabled:opacity-50"
        >
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>

      {/* Contenu */}
      <div className="p-6">
        {/* Note */}
        <div className="flex items-center space-x-1 mb-2">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm text-gray-700">{product.rating}</span>
          <span className="text-xs text-gray-400">({product.reviews} avis)</span>
        </div>

        {/* Nom */}
        <h3 className="mb-2 text-gray-900 line-clamp-2 min-h-[3.5rem]">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Prix et Action */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl text-[#0f8f5e]">{product.price.toFixed(2)} €</span>
              <span className="text-sm text-gray-400 line-through">
                {(product.price * 1.5).toFixed(2)} €
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Livraison {product.deliveryTime}</p>
          </div>
        </div>
      </div>

      {/* État d'ajout */}
      {isAdding && (
        <div className="absolute inset-0 bg-[#0f8f5e]/90 flex items-center justify-center backdrop-blur-sm animate-fade-in-up">
          <div className="bg-white rounded-xl px-6 py-4 shadow-xl">
            <p className="text-[#0f8f5e]">Ajouté au panier ✓</p>
          </div>
        </div>
      )}
    </div>
  );
}
