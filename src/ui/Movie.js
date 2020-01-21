import React from "react";
import { Card, Icon, Avatar } from "antd";

export default function Movie({
  id,
  title,
  overview,
  posterPath,
  backdropPath,
  isFavorite,
  handleFavoriteIconClick
}) {
  return (
    <Card
      style={{ width: 400, margin: 20 }}
      cover={
        <img
          alt="example"
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        />
      }
      actions={[
        <Icon
          type="star"
          onClick={() => handleFavoriteIconClick(id)}
          theme={isFavorite ? "filled" : "outlined"}
          key="star"
        />,

        <a
          rel="noopener noreferrer"
          target="_blank"
          href={`https://www.themoviedb.org/movie/${id}`}
        >
          <Icon type="link" key="link" />
        </a>
      ]}
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
