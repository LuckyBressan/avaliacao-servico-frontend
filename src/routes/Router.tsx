import { createBrowserRouter, Navigate, RouterProvider, type RouteObject } from "react-router-dom";
import TelaErro from "../components/TelaErro";
import AvaliacaoPage from "../pages/AvaliacaoPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProtectedRoute from "./ProtectedRoute";
import LayoutAvaliacao from "../layouts/LayoutAvaliacao";

export default function Router() {

  const token = null;

  const routesForAuthenticatedOnly: RouteObject[] = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          index: true,
          element: <Navigate to="/dashboard" replace />
        },
        {
          path: "dashboard",
          element: <div>Dashboard Page</div>
        },
        {
          path: "setor",
          element: <div>Setor Page</div>
        },
        {
          path: "pergunta",
          element: <div>Pergunta Page</div>
        },
        {
          path: "dispositivo",
          element: <div>Dispositivo Page</div>
        },
        {
          path: "avaliacao",
          element: <div>Avaliação Page</div>
        },
        {
          path: "logout",
          action: () => {}
        },
        {
          path: "login",
          element: <Navigate to="/dashboard" replace />
        }
      ]
    }
  ];

  const routesForPublicAccess: RouteObject[] = [
    {
      path: "/",
      element: <LayoutAvaliacao />,
      children: [
        {
          index: true,
          element: <Navigate to="/avaliacao" replace />
        },
        {
          path: "avaliacao",
          element: <AvaliacaoPage />,
          errorElement: <TelaErro />
        },
        {
          path: "login",
          element: <div>Login Page</div>
        },
        {
          path: "*",
          element: <NotFoundPage />
        }
      ]
    }
  ]

  const router = createBrowserRouter([
    ...(token ? routesForAuthenticatedOnly : routesForPublicAccess),
  ]);

  return <RouterProvider router={router} />;
}
