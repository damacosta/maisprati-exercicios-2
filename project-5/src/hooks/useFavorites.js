import { useState, useEffect } from 'react';

const STORAGE_KEY = 'favoriteMovies';

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    setFavorites(storedFavorites);
  }, []);

  const saveFavorites = (newFavorites) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  };

  const isFavorite = (movie) => {
    return favorites.some(fav => fav.id === movie.id);
  };

  const addFavorite = (movie) => {
    if (!isFavorite(movie)) {
      const newFavorites = [...favorites, movie];
      saveFavorites(newFavorites);
    }
  };

  const removeFavorite = (movie) => {
    const newFavorites = favorites.filter(fav => fav.id !== movie.id);
    saveFavorites(newFavorites);
  };

  return { favorites, isFavorite, addFavorite, removeFavorite };
};

export default useFavorites;