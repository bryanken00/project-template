import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../components/layout/AdminLayout/Home";
import {
  NAVIGATIONS_ADMIN,
  USER_ROLES,
  USERS,
} from "../../constant/navigation";
import { formatNavigations } from "../../helper/format-data";
import Login from "../../pages/landing/login";
import { Auth, UnAuth, ValidateRoute } from "../validate-auth";

const { ADMIN } = USER_ROLES;

const AdminRoutes = () => {
  const { store } = USERS.ADMIN;
  const navigations = formatNavigations(NAVIGATIONS_ADMIN);

  const renderRoutes = (routes = [], basePath = "") =>
    routes.map(({ name, link, component, children }) => {
      const fullPath = `${basePath}/${link}`.replace(/\/+/g, "/");

      return (
        <Route
          key={name}
          element={
            <ValidateRoute name={name} navs={navigations} redirect={ADMIN} />
          }
        >
          <Route path={fullPath} element={component} />
          {children && renderRoutes(children, fullPath)}
        </Route>
      );
    });

  return (
    <Routes>
      {/* Default fallback route */}
      <Route path="*" element={<Navigate to="/" />} />

      {/* Public (unauthenticated) routes */}
      <Route
        element={
          <UnAuth
            store={store}
            redirect={navigations?.[0]?.link || `/${ADMIN}`}
            checknavs={navigations}
          />
        }
      >
        <Route path="/" element={<Login />} />
      </Route>

      {/* Protected (authenticated) routes */}
      <Route
        element={
          <Auth store={store} redirect={`/${ADMIN}`} checknavs={navigations} />
        }
      >
        <Route
          path="/"
          element={<Home navigations={navigations} store={store} />}
        >
          {renderRoutes(navigations)}
        </Route>
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
