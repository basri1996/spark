import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { ActionContextProvider } from "../context/ActionContext";
import ErrorPage from "../error/ErrorPage";
import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../components/common/Loader";

const Deals = lazy(() => import("../pages/deals/Deals"));
const Active = lazy(() => import("../pages/active/Active"));
const OnHold = lazy(() => import("../pages/onHold/OnHold"));
const Archive = lazy(() => import("../pages/archive/Archive"));
const SingleDeal = lazy(() => import("../pages/singleDeal/SingleDeal"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Layout>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Layout>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="deals" replace />,
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
