import React, { useState, useCallback } from "react";

export const FavoritesContext = React.createContext(new Set());

export default function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(new Set());

  const addToFavorites = useCallback(
    id => {
      const nextFavorites = new Set(favorites);
      nextFavorites.add(id);
      setFavorites(nextFavorites);
    },
    [favorites]
  );

  const deleteFromFavorites = useCallback(
    id => {
      const nextFavorites = new Set(favorites);
      nextFavorites.delete(id);
      setFavorites(nextFavorites);
    },
    [favorites]
  );

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        deleteFromFavorites
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
