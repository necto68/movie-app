import React from "react";
import { PageHeader, Button } from "antd";
import { Link, useRouteMatch } from "react-router-dom";

export default function AppHeader() {
  const matchPopular = useRouteMatch("/popular");
  const matchFavorites = useRouteMatch("/favorites");

  return (
    <PageHeader
      className="page-header"
      title="MovieApp"
      subTitle="Yalantis ReactJs School"
      extra={[
        <Link key="popular" to="/popular">
          <Button type={matchPopular ? "primary" : "default"}>Popular</Button>
        </Link>,
        <Link key="favorites" to="/favorites">
          <Button type={matchFavorites ? "primary" : "default"}>
            Favorites
          </Button>
        </Link>
      ]}
    />
  );
}
