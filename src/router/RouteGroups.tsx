import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { ActionContextProvider } from "../context/ActionContext";
import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../components/common/Loader";
import ErrorPage from "../components/common/ErrorPage";
import CallCenter from "../pages/callCenter/CallCenter";
import { AuthContextProvider } from "../context/AuthContext";
import ProtectedRoutes from "../components/common/ProtectedRoutes";

const Deals = lazy(() => import("../pages/deals/Deals"));
const Active = lazy(() => import("../pages/active/Active"));
const OnHold = lazy(() => import("../pages/onHold/OnHold"));
const Archive = lazy(() => import("../pages/archive/Archive"));
const SingleDeal = lazy(() => import("../pages/singleDeal/SingleDeal"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <AuthContextProvider>
        <Layout>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Layout>
      </AuthContextProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="deals" replace />,
      },
      {
        path: "deals",
        element: (
          <ProtectedRoutes role="lead-manager">
            <Deals />
          </ProtectedRoutes>
        ),
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
        element: (
          <ProtectedRoutes role="lead-manager">
            <Active />
          </ProtectedRoutes>
        ),
      },
      {
        path: "on-hold",
        element: (
          <ProtectedRoutes role="lead-manager">
            <OnHold />
          </ProtectedRoutes>
        ),
      },
      {
        path: "archive",
        element: (
          <ProtectedRoutes role="lead-manager">
            <Archive />
          </ProtectedRoutes>
        ),
      },

      {
        path: "call-center",
        element: (
          <ProtectedRoutes role="call-center">
            <CallCenter />
          </ProtectedRoutes>
        ),
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
