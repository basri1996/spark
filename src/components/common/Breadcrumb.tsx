import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

export default function Breadcrumb({ routes }: any) {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb" color="black">
        {routes.map((el: any, index: number) =>
          index === routes.length - 1 ? (
            <Typography
              sx={{
                color: "#5080ff",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              {el.name}
            </Typography>
          ) : (
            <Link
              to={el.href}
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              {el?.name?.toUpperCase()}
            </Link>
          )
        )}
      </Breadcrumbs>
    </div>
  );
}
