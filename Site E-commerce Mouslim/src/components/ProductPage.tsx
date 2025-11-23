import React, { useState } from 'react';
import { ArrowLeft, Star, ShoppingCart, Truck, Shield, Package, Check } from 'lucide-react';
import { products } from '../data/products';
import { addToCart } from '../utils/cart';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ReviewSection } from './ReviewSection';

interface ProductPageProps {
  productId: string;
  onNavigate: (page: string) => void;
}

export function ProductPage({ productId, onNavigate }: ProductPageProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAdding, setIsAdding] = useState(false);

  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-gray-900 mb-4">Produit non trouvé</h2>
          <button
            onClick={() => onNavigate('shop')}
            className="bg-[#0f8f5e] text-white px-6 py-3 rounded-xl hover:bg-[#0a6b45] transition-colors"
          >
            Retour à la boutique
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsAdding(true);
    
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    }, quantity);

    setTimeout(() => setIsAdding(false), 2000);
  };

  const discount = Math.round(100 - ((product.costPrice / product.price) * 100));

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#cfeee0]/10">
      {/* Bouton retour */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => onNavigate('shop')}
            className="flex items-center space-x-2 text-gray-600 hover:text-[#0f8f5e] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Retour à la boutique</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Galerie d'images */}
          <div className="space-y-4">
            {/* Image principale */}
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#cfeee0]/20 to-gray-50 shadow-lg">
              <ImageWithFallback
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Badge réduction */}
              <div className="absolute top-6 right-6 bg-[#0f8f5e] text-white px-4 py-2 rounded-full shadow-lg">
                -{discount}%
              </div>
            </div>

            {/* Miniatures */}
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? 'border-[#0f8f5e] ring-2 ring-[#0f8f5e]/20'
                      : 'border-gray-200 hover:border-[#0f8f5e]'
                  }`}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Informations produit */}
          <div className="space-y-6">
            {/* Catégorie */}
            <div>
              <span className="inline-block bg-[#cfeee0] text-[#0f8f5e] px-4 py-2 rounded-full text-sm">
                {product.category}
              </span>
            </div>

            {/* Titre */}
            <div>
              <h1 className="text-gray-900 mb-3">{product.name}</h1>
              
              {/* Note et avis */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-gray-700">{product.rating}</span>
                </div>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600">{product.reviews} avis</span>
              </div>
            </div>

            {/* Prix */}
            <div className="bg-gradient-to-br from-[#cfeee0]/20 to-white rounded-2xl p-6 border border-[#0f8f5e]/20">
              <div className="flex items-baseline space-x-3 mb-2">
                <span className="text-4xl text-[#0f8f5e]">{product.price.toFixed(2)} €</span>
                <span className="text-xl text-gray-400 line-through">
                  {(product.price * 1.5).toFixed(2)} €
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Vous économisez {((product.price * 1.5) - product.price).toFixed(2)} € ({discount}%)
              </p>
            </div>

            {/* Description */}
            <div>
              <p className="text-gray-700 leading-relaxed">
                {product.detailedDescription}
              </p>
            </div>

            {/* Caractéristiques */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="mb-4 text-[#0f8f5e]">Caractéristiques</h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0f8f5e] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantité et panier */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-gray-700">Quantité :</label>
                <div className="flex items-center space-x-3 bg-white rounded-xl border border-gray-200 px-4 py-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-gray-600 hover:text-[#0f8f5e] w-8 h-8 flex items-center justify-center"
                  >
                    -
                  </button>
                  <span className="w-12 text-center text-gray-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(10, quantity + 1))}
                    className="text-gray-600 hover:text-[#0f8f5e] w-8 h-8 flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAddToCart}
                  disabled={isAdding}
                  className="flex-1 bg-[#0f8f5e] text-white px-8 py-4 rounded-xl hover:bg-[#0a6b45] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>{isAdding ? 'Ajouté ✓' : 'Ajouter au panier'}</span>
                </button>

                <button
                  onClick={() => {
                    handleAddToCart();
                    setTimeout(() => onNavigate('cart'), 1000);
                  }}
                  className="flex-1 bg-white text-[#0f8f5e] px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 border-2 border-[#0f8f5e]"
                >
                  Acheter maintenant
                </button>
              </div>
            </div>

            {/* Informations de livraison */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-gray-100">
                <Truck className="w-5 h-5 text-[#0f8f5e] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-900">Livraison</p>
                  <p className="text-xs text-gray-600">{product.deliveryTime}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-gray-100">
                <Shield className="w-5 h-5 text-[#0f8f5e] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-900">Garantie</p>
                  <p className="text-xs text-gray-600">Satisfait ou remboursé</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-gray-100">
                <Package className="w-5 h-5 text-[#0f8f5e] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-900">Stock</p>
                  <p className="text-xs text-gray-600">{product.stock} disponibles</p>
                </div>
              </div>
            </div>

            {/* Note dropshipping */}
            <div className="bg-[#cfeee0]/20 rounded-xl p-4 text-sm text-gray-700">
              <p className="flex items-start space-x-2">
                <span>ℹ️</span>
                <span>
                  Livraison internationale : {product.deliveryTime}. 
                  Suivi fourni pour chaque commande.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Section Avis Clients */}
        <div className="mt-16">
          <ReviewSection productId={productId} />
        </div>
      </div>
    </div>
  );
}