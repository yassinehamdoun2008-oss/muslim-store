import React from 'react';
import { ArrowRight, Package, Shield, Truck, Star, Heart } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from './ProductCard';

interface HomePageProps {
  onNavigate: (page: string, productId?: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const bestSellers = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1600383963284-91ef78fc9b6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3NxdWUlMjBpc2xhbWljJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2Mzg1MDY4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Mosquée islamique"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contenu Hero */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl animate-fade-in-up">
            <div className="inline-block mb-4 px-4 py-2 bg-[#0f8f5e]/20 backdrop-blur-sm rounded-full border border-[#0f8f5e]/30">
              <span className="text-[#cfeee0] text-sm">✨ Fait par des musulmans, pour des musulmans</span>
            </div>
            
            <h1 className="text-white mb-6">
              Votre boutique islamique<br />de confiance
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Découvrez notre sélection d'objets islamiques de qualité premium. 
              Des produits authentiques pour enrichir votre spiritualité au quotidien.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('shop')}
                className="group bg-[#0f8f5e] text-white px-8 py-4 rounded-xl hover:bg-[#0a6b45] transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>Découvrir nos produits</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => onNavigate('shop')}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30"
              >
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Pourquoi Mouslim */}
      <section className="py-20 bg-gradient-to-br from-white to-[#cfeee0]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#0f8f5e] mb-4">Pourquoi choisir Mouslim ?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une initiative de jeunes musulmans engagés pour soutenir la Oumma avec des produits de qualité
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0f8f5e] to-[#0a6b45] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="mb-3 text-[#0f8f5e]">Qualité garantie</h3>
              <p className="text-gray-600 leading-relaxed">
                Tous nos produits sont soigneusement sélectionnés pour leur qualité et leur authenticité. 
                Nous ne proposons que le meilleur pour la Oumma.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0f8f5e] to-[#0a6b45] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Truck className="w-7 h-7 text-white" />
              </div>
              <h3 className="mb-3 text-[#0f8f5e]">Livraison rapide</h3>
              <p className="text-gray-600 leading-relaxed">
                Livraison internationale en 7-15 jours. Nous travaillons avec des partenaires fiables 
                pour garantir une livraison sécurisée et rapide.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0f8f5e] to-[#0a6b45] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="mb-3 text-[#0f8f5e]">Soutien à la Oumma</h3>
              <p className="text-gray-600 leading-relaxed">
                Créé par des jeunes musulmans, chaque achat contribue à soutenir notre communauté 
                et à promouvoir nos valeurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Best Sellers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-[#0f8f5e] mb-2">Nos best-sellers</h2>
              <p className="text-gray-600">Les produits préférés de notre communauté</p>
            </div>
            <button
              onClick={() => onNavigate('shop')}
              className="mt-4 md:mt-0 text-[#0f8f5e] hover:text-[#0a6b45] flex items-center space-x-2 group"
            >
              <span>Voir tout</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={(id) => onNavigate('product', id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-[#0f8f5e] to-[#0a6b45] rounded-3xl p-12 shadow-2xl">
            <h2 className="text-white mb-4">Rejoignez notre communauté</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Découvrez nos produits islamiques de qualité et enrichissez votre spiritualité au quotidien
            </p>
            <button
              onClick={() => onNavigate('shop')}
              className="bg-white text-[#0f8f5e] px-10 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center space-x-2"
            >
              <span>Voir la boutique</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}