import React from "react";
import { PageHeader } from "antd";
import MovieProvider from "./providers/MovieProvider";
import FavoritesProvider from "./providers/FavoritesProvider";
import MovieList from "./containers/MovieList";
import "./App.css";

export default function App() {
  return (
    <MovieProvider>
      <FavoritesProvider>
        <PageHeader
          className="page-header"
          title="MovieApp"
          subTitle="Yalantis ReactJs School"
        />
        <div className="content">
          <MovieList />
        </div>
      </FavoritesProvider>
    </MovieProvider>
  );
}
