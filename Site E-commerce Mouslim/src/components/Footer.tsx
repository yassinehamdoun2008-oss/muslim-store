import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-[#cfeee0]/20 border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* À propos */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0f8f5e] to-[#0a6b45] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="text-xl text-[#0f8f5e]">Mouslim</span>
            </div>
            <p className="text-gray-600 text-sm">
              Fait par des musulmans, pour des musulmans. Des produits de qualité pour enrichir votre spiritualité au quotidien.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="mb-4 text-[#0f8f5e]">Liens rapides</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0f8f5e] transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0f8f5e] transition-colors">
                  Boutique
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0f8f5e] transition-colors">
                  Livraison
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0f8f5e] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="mb-4 text-[#0f8f5e]">Informations légales</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0f8f5e] transition-colors">
                  Conditions générales
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0f8f5e] transition-colors">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0f8f5e] transition-colors">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0f8f5e] transition-colors">
                  CGV
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-[#0f8f5e]">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 text-[#0f8f5e] mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@mouslim.com" className="text-gray-600 hover:text-[#0f8f5e] transition-colors">
                  contact@mouslim.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 text-[#0f8f5e] mt-0.5 flex-shrink-0" />
                <a href="tel:+33123456789" className="text-gray-600 hover:text-[#0f8f5e] transition-colors">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#0f8f5e] mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">
                  France - Livraison internationale
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Barre du bas */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              © {currentYear} Mouslim. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Paiement sécurisé</span>
              <div className="flex space-x-2">
                <div className="w-10 h-6 bg-white border border-gray-200 rounded flex items-center justify-center text-[10px]">
                  VISA
                </div>
                <div className="w-10 h-6 bg-white border border-gray-200 rounded flex items-center justify-center text-[10px]">
                  MC
                </div>
                <div className="w-10 h-6 bg-white border border-gray-200 rounded flex items-center justify-center text-[10px]">
                  PP
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
