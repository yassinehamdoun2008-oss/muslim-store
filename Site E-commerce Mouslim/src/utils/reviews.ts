// Utilitaires pour la gestion des avis clients (localStorage)

export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

const REVIEWS_STORAGE_KEY = 'mouslim_reviews';

export const getReviews = (productId?: string): Review[] => {
  if (typeof window === 'undefined') return [];
  try {
    const reviews = localStorage.getItem(REVIEWS_STORAGE_KEY);
    const allReviews: Review[] = reviews ? JSON.parse(reviews) : [];
    
    if (productId) {
      return allReviews.filter(r => r.productId === productId);
    }
    
    return allReviews;
  } catch (error) {
    console.error('Error reading reviews:', error);
    return [];
  }
};

export const addReview = (review: Omit<Review, 'id' | 'date'>): void => {
  if (typeof window === 'undefined') return;
  try {
    const reviews = getReviews();
    const newReview: Review = {
      ...review,
      id: `review_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      date: new Date().toISOString(),
    };
    
    reviews.unshift(newReview); // Ajouter au début
    localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(reviews));
    
    // Dispatch un événement personnalisé pour notifier les autres composants
    window.dispatchEvent(new Event('reviewsUpdated'));
  } catch (error) {
    console.error('Error saving review:', error);
  }
};

export const getAverageRating = (productId: string): number => {
  const reviews = getReviews(productId);
  if (reviews.length === 0) return 0;
  
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return sum / reviews.length;
};

export const getReviewsCount = (productId: string): number => {
  return getReviews(productId).length;
};
