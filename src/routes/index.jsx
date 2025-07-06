import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import AdminRoutes from "./page-routes/admin-routes";
const RootRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/admin/*",
      Component: AdminRoutes,
    },
    {
      path: "*",
      element: <Navigate to="/admin" replace />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RootRoutes;
