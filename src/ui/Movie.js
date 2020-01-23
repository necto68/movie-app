import React, { useContext } from "react";
import { Card, Icon, Avatar } from "antd";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../providers/FavoritesProvider";

export default function Movie({
  id,
  title,
  overview,
  posterPath,
  backdropPath,
  budget = null
}) {
  const { favorites, addToFavorites, deleteFromFavorites } = useContext(
    FavoritesContext
  );
  const isFavorite = favorites.has(id);

  const actions = [
    <Icon
      key="star"
      type="star"
      onClick={() =>
        isFavorite ? deleteFromFavorites(id) : addToFavorites(id)
      }
      theme={isFavorite ? "filled" : "outlined"}
    />,
    <Link key="star" to={`/movie/${id}`}>
      <Icon type="link" />
    </Link>,
    budget && (
      <Icon
        onClick={() => alert(`Budget - ${budget.toLocaleString()}$`)}
        key="dollar"
        type="dollar"
      />
    )
  ].filter(Boolean);

  return (
    <Card
      style={{ width: 400, margin: 20 }}
      cover={
        <img
          alt="example"
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        />
      }
      actions={actions}
    >
      <Card.Meta
        avatar={
          <Avatar src={`https://image.tmdb.org/t/p/w500${backdropPath}`} />
        }
        title={title}
        description={overview}
      />
    </Card>
  );
}
