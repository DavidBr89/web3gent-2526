import React from "react";

interface FavoritesProps {
  favs: number[];
}

const Favorites = ({ favs }: FavoritesProps) => {
  return (
    <ul>
      {favs.map((f) => (
        <li key={f}>{f}</li>
      ))}
    </ul>
  );
};

export default Favorites;
