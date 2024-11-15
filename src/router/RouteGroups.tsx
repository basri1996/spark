import { createBrowserRouter, RouteObject } from "react-router-dom";
import Deals from "../pages/deals/Deals";
import Layout from "../components/layout/Layout";
import Active from "../pages/active/Active";
import OnHold from "../pages/onHold/OnHold";
import Archive from "../pages/archive/Archive";
import SingleDeal from "../pages/singleDeal/SingleDeal";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Deals />,
      },
      {
        path: "deals",
        element: <Deals />,
      },
      {
        path: "deals/:id",
        element: <SingleDeal />,
      },
      {
        path: "active",
        element: <Active />,
      },
      {
        path: "on-hold",
        element: <OnHold />,
      },
      {
        path: "archive",
        element: <Archive />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
