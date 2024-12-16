import { createBrowserRouter, RouteObject } from "react-router-dom";
import { ActionContextProvider } from "../context/ActionContext";
import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AuthContextProvider } from "../context/AuthContext";
import {
  DefaultRoute,
  ErrorPage,
  Layout,
  Loader,
  ProtectedRoute,
} from "../components";
import Groups from "../pages/groups/Groups";
import SingleGroup from "../pages/groups/SingleGroup";
const Deals = lazy(() => import("../pages/deals/Deals"));
const Active = lazy(() => import("../pages/active/Active"));
const OnHold = lazy(() => import("../pages/onHold/OnHold"));
const Archive = lazy(() => import("../pages/archive/Archive"));
const SingleDeal = lazy(() => import("../pages/singleDeal/SingleDeal"));
const CallCenter = lazy(() => import("../pages/callCenter/CallCenter"));

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
        element: <DefaultRoute />,
      },
      {
        path: "deals",
        element: (
          <ProtectedRoute role="lead-manager">
            <Deals />
          </ProtectedRoute>
        ),
      },
      {
        path: "/:type/:id",
        element: (
          <ActionContextProvider>
            <SingleDeal />
          </ActionContextProvider>
        ),
      },
      {
        path: "active",
        element: (
          <ProtectedRoute role="lead-manager">
            <Active />
          </ProtectedRoute>
        ),
      },
      {
        path: "on-hold",
        element: (
          <ProtectedRoute role="lead-manager">
            <OnHold />
          </ProtectedRoute>
        ),
      },
      {
        path: "archive",
        element: (
          <ProtectedRoute role="lead-manager">
            <Archive />
          </ProtectedRoute>
        ),
      },

      {
        path: "call-center",
        element: (
          <ProtectedRoute role="call-center">
            <CallCenter />
          </ProtectedRoute>
        ),
      },
      {
        path: "groups",
        element: (
          <ProtectedRoute role="lead-manager">
            <Groups/>
          </ProtectedRoute>
        ),
      },
      {
        path: "groups/:id",
        element: (
          <ProtectedRoute role="lead-manager">
            <SingleGroup/>
          </ProtectedRoute>
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
