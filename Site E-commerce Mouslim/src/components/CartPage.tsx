import React, { useState, useEffect } from 'react';
import { ArrowLeft, Trash2, ShoppingBag, CreditCard } from 'lucide-react';
import { getCart, updateQuantity, removeFromCart, clearCart, getCartTotal, CartItem } from '../utils/cart';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CartPageProps {
  onNavigate: (page: string) => void;
}

export function CartPage({ onNavigate }: CartPageProps) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    // Charger le panier
    const loadCart = () => {
      setCart(getCart());
    };

    loadCart();
    window.addEventListener('cartUpdated', loadCart);

    return () => {
      window.removeEventListener('cartUpdated', loadCart);
    };
  }, []);

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    updateQuantity(productId, newQuantity);
    setCart(getCart());
  };

  const handleRemove = (productId: string) => {
    removeFromCart(productId);
    setCart(getCart());
  };

  const handleCheckout = () => {
    setIsProcessing(true);
    
    // Simuler un traitement de paiement
    setTimeout(() => {
      alert(
        '🎉 Commande confirmée !\n\n' +
        'Cette démo utilise un système de paiement fictif.\n\n' +
        'Pour une vraie boutique, intégrez Stripe ou PayPal :\n' +
        '• Stripe : https://stripe.com\n' +
        '• PayPal : https://paypal.com\n\n' +
        'Vos placeholders sont déjà configurés dans le code !'
      );
      clearCart();
      setCart([]);
      setIsProcessing(false);
      onNavigate('home');
    }, 2000);
  };

  const total = getCartTotal();
  const shippingCost = total > 50 ? 0 : 4.99;
  const finalTotal = total + shippingCost;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white to-[#cfeee0]/10">
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <button
              onClick={() => onNavigate('shop')}
              className="flex items-center space-x-2 text-gray-600 hover:text-[#0f8f5e] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Continuer mes achats</span>
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="w-24 h-24 bg-[#cfeee0]/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-12 h-12 text-[#0f8f5e]" />
          </div>
          <h2 className="text-gray-900 mb-4">Votre panier est vide</h2>
          <p className="text-gray-600 mb-8">
            Découvrez nos produits islamiques de qualité et commencez vos achats
          </p>
          <button
            onClick={() => onNavigate('shop')}
            className="bg-[#0f8f5e] text-white px-8 py-4 rounded-xl hover:bg-[#0a6b45] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Découvrir la boutique
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#cfeee0]/10">
      {/* En-tête */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => onNavigate('shop')}
            className="flex items-center space-x-2 text-gray-600 hover:text-[#0f8f5e] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Continuer mes achats</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-[#0f8f5e] mb-8">Mon Panier</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Articles du panier */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.productId}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Image */}
                  <div className="w-full sm:w-32 h-32 flex-shrink-0 bg-gradient-to-br from-[#cfeee0]/20 to-gray-50 rounded-xl overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Détails */}
                  <div className="flex-1 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-gray-900 mb-1">{item.name}</h3>
                        <p className="text-[#0f8f5e]">{item.price.toFixed(2)} €</p>
                      </div>

                      <button
                        onClick={() => handleRemove(item.productId)}
                        className="text-gray-400 hover:text-red-500 transition-colors p-2"
                        aria-label="Supprimer"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Quantité */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 bg-gray-50 rounded-xl px-4 py-2">
                        <button
                          onClick={() => handleUpdateQuantity(item.productId, item.quantity - 1)}
                          className="text-gray-600 hover:text-[#0f8f5e] w-8 h-8 flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="w-12 text-center text-gray-900">{item.quantity}</span>
                        <button
                          onClick={() => handleUpdateQuantity(item.productId, item.quantity + 1)}
                          className="text-gray-600 hover:text-[#0f8f5e] w-8 h-8 flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>

                      <p className="text-gray-900">
                        Sous-total : <span className="text-[#0f8f5e]">{(item.price * item.quantity).toFixed(2)} €</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Résumé de commande */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <h3 className="mb-6 text-[#0f8f5e]">Résumé de commande</h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Sous-total</span>
                  <span>{total.toFixed(2)} €</span>
                </div>

                <div className="flex justify-between text-gray-700">
                  <span>Livraison</span>
                  <span className={shippingCost === 0 ? 'text-[#0f8f5e]' : ''}>
                    {shippingCost === 0 ? 'GRATUITE' : `${shippingCost.toFixed(2)} €`}
                  </span>
                </div>

                {total < 50 && (
                  <div className="bg-[#cfeee0]/20 rounded-lg p-3 text-sm text-gray-700">
                    <p>
                      Plus que <span className="text-[#0f8f5e]">{(50 - total).toFixed(2)} €</span> pour la livraison gratuite !
                    </p>
                  </div>
                )}

                <div className="border-t pt-4">
                  <div className="flex justify-between text-gray-900">
                    <span className="font-medium">Total</span>
                    <span className="text-xl text-[#0f8f5e]">{finalTotal.toFixed(2)} €</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isProcessing}
                className="w-full bg-[#0f8f5e] text-white px-6 py-4 rounded-xl hover:bg-[#0a6b45] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <CreditCard className="w-5 h-5" />
                <span>{isProcessing ? 'Traitement...' : 'Procéder au paiement'}</span>
              </button>

              <div className="mt-4 text-xs text-gray-500 text-center">
                <p className="mb-2">Paiement sécurisé</p>
                <div className="flex justify-center space-x-2">
                  <div className="w-10 h-6 bg-gray-100 border border-gray-200 rounded flex items-center justify-center text-[10px]">
                    VISA
                  </div>
                  <div className="w-10 h-6 bg-gray-100 border border-gray-200 rounded flex items-center justify-center text-[10px]">
                    MC
                  </div>
                  <div className="w-10 h-6 bg-gray-100 border border-gray-200 rounded flex items-center justify-center text-[10px]">
                    PP
                  </div>
                </div>
              </div>

              {/* Note pour le développeur */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-xs text-gray-600">
                  <strong>💡 Pour les développeurs :</strong><br />
                  Intégration Stripe ou PayPal à configurer.<br />
                  Les placeholders sont déjà dans le code !
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Informations de livraison */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
            <div className="w-12 h-12 bg-[#cfeee0] rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-6 h-6 text-[#0f8f5e]" />
            </div>
            <h4 className="text-gray-900 mb-2">Livraison internationale</h4>
            <p className="text-sm text-gray-600">7-15 jours ouvrés</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
            <div className="w-12 h-12 bg-[#cfeee0] rounded-full flex items-center justify-center mx-auto mb-4">
              <CreditCard className="w-6 h-6 text-[#0f8f5e]" />
            </div>
            <h4 className="text-gray-900 mb-2">Paiement sécurisé</h4>
            <p className="text-sm text-gray-600">Vos données sont protégées</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
            <div className="w-12 h-12 bg-[#cfeee0] rounded-full flex items-center justify-center mx-auto mb-4">
              <ArrowLeft className="w-6 h-6 text-[#0f8f5e]" />
            </div>
            <h4 className="text-gray-900 mb-2">Retours faciles</h4>
            <p className="text-sm text-gray-600">Satisfait ou remboursé</p>
          </div>
        </div>
      </div>
    </div>
  );
}
