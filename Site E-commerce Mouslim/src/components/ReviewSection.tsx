import React, { useState, useEffect } from 'react';
import { Star, MessageCircle, User } from 'lucide-react';
import { Review, getReviews, addReview } from '../utils/reviews';

interface ReviewSectionProps {
  productId: string;
}

export function ReviewSection({ productId }: ReviewSectionProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    author: '',
    rating: 5,
    comment: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    loadReviews();
    window.addEventListener('reviewsUpdated', loadReviews);
    return () => {
      window.removeEventListener('reviewsUpdated', loadReviews);
    };
  }, [productId]);

  const loadReviews = () => {
    setReviews(getReviews(productId));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.author.trim() || !formData.comment.trim()) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    setIsSubmitting(true);

    addReview({
      productId,
      author: formData.author.trim(),
      rating: formData.rating,
      comment: formData.comment.trim(),
    });

    // Réinitialiser le formulaire
    setFormData({
      author: '',
      rating: 5,
      comment: '',
    });
    setShowForm(false);
    setIsSubmitting(false);
    loadReviews();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const averageRating = reviews.length > 0
    ? reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
    : 0;

  return (
    <div className="space-y-8">
      {/* En-tête */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-[#0f8f5e] mb-2">Avis clients</h3>
          {reviews.length > 0 && (
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(averageRating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-700">
                {averageRating.toFixed(1)} sur 5
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">
                {reviews.length} avis
              </span>
            </div>
          )}
        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-[#0f8f5e] text-white px-6 py-3 rounded-xl hover:bg-[#0a6b45] transition-all duration-300 flex items-center space-x-2"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Laisser un avis</span>
        </button>
      </div>

      {/* Formulaire d'avis */}
      {showForm && (
        <div className="bg-gradient-to-br from-[#cfeee0]/20 to-white rounded-2xl p-6 border border-[#0f8f5e]/20 animate-fade-in-up">
          <h4 className="text-gray-900 mb-4">Partagez votre expérience</h4>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nom */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Votre nom
              </label>
              <input
                type="text"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                placeholder="Ex: Ahmed K."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0f8f5e] focus:border-transparent"
                required
              />
            </div>

            {/* Note */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Votre note
              </label>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    type="button"
                    onClick={() => setFormData({ ...formData, rating })}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-8 h-8 ${
                        rating <= formData.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300 hover:text-yellow-400'
                      }`}
                    />
                  </button>
                ))}
                <span className="ml-2 text-gray-600">
                  ({formData.rating}/5)
                </span>
              </div>
            </div>

            {/* Commentaire */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Votre commentaire
              </label>
              <textarea
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                placeholder="Partagez votre expérience avec ce produit..."
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0f8f5e] focus:border-transparent resize-none"
                required
              />
            </div>

            {/* Boutons */}
            <div className="flex space-x-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-[#0f8f5e] text-white px-6 py-3 rounded-xl hover:bg-[#0a6b45] transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Envoi...' : 'Publier mon avis'}
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Liste des avis */}
      <div className="space-y-4">
        {reviews.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-2xl">
            <MessageCircle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-600 mb-2">Aucun avis pour le moment</p>
            <p className="text-sm text-gray-500">
              Soyez le premier à partager votre expérience !
            </p>
          </div>
        ) : (
          reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
            >
              {/* En-tête de l'avis */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#0f8f5e] to-[#0a6b45] rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900">{review.author}</p>
                    <p className="text-sm text-gray-500">
                      {formatDate(review.date)}
                    </p>
                  </div>
                </div>

                {/* Note */}
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Commentaire */}
              <p className="text-gray-700 leading-relaxed">
                {review.comment}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
