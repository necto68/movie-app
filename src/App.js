import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import MovieProvider from "./providers/MovieProvider";
import FavoritesProvider from "./providers/FavoritesProvider";
import PopularRoute from "./routes/PopularRoute";
import FavoritesRoute from "./routes/FavoritesRoute";
import MovieRoute from "./routes/MovieRoute";
import "./App.css";
import AppHeader from "./ui/AppHeader";

export default function App() {
  return (
    <MovieProvider>
      <FavoritesProvider>
        <Router>
          <AppHeader />
          <div className="app">
            <Switch>
              <Route path="/popular">
                <PopularRoute />
              </Route>
              <Route path="/favorites">
                <FavoritesRoute />
              </Route>
              <Route path="/movie/:movieId">
                <MovieRoute />
              </Route>
              <Route path="*">
                <Redirect to="/popular" />
              </Route>
            </Switch>
          </div>
        </Router>
      </FavoritesProvider>
    </MovieProvider>
  );
}
