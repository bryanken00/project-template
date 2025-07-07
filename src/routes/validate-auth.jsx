import { Navigate, Outlet, useLocation } from "react-router-dom";

export const Auth = ({ store, redirect }) => {
  const { token, userData } = store();
  const location = useLocation();

  return token && userData ? (
    <Outlet />
  ) : (
    <Navigate to={redirect} state={{ from: location }} replace />
  );
};

const findNavByName = (navs, name) => {
  for (const nav of navs) {
    if (nav.name === name) return true;
    if (nav.children && findNavByName(nav.children, name)) return true;
  }
  return false;
};

export const ValidateRoute = ({ name, navs = [], redirect }) => {
  const location = useLocation();
  return findNavByName(navs, name) ? (
    <Outlet />
  ) : (
    <Navigate to={redirect} state={{ from: location.pathname }} replace />
  );
};

export const UnAuth = ({ store, redirect }) => {
  const { token, userData } = store();
  const location = useLocation();

  return token && userData ? (
    <Navigate to={redirect} state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};
