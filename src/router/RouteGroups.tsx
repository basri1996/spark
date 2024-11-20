import { createBrowserRouter, RouteObject } from "react-router-dom";
import Deals from "../pages/deals/Deals";
import Layout from "../components/layout/Layout";
import Active from "../pages/active/Active";
import OnHold from "../pages/onHold/OnHold";
import Archive from "../pages/archive/Archive";
import SingleDeal from "../pages/singleDeal/SingleDeal";
import { ActionContextProvider } from "../context/ActionContext";
import ErrorPage from "../error/ErrorPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
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
        element: (
          <ActionContextProvider>
            <SingleDeal />
          </ActionContextProvider>
        ),
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

const router = createBrowserRouter(routes, {
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
  },
});

export default router;
