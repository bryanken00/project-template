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

const AdminRoutes = () => {
  const { store } = USERS.ADMIN;

  const navigations = formatNavigations(NAVIGATIONS_ADMIN);

  return (
    <Routes>
      <Route path="*" element={<Navigate to={"/"} />} />

      <Route
        element={
          <UnAuth
            store={store}
            redirect={navigations?.[0]?.link || `${USER_ROLES.ADMIN}`}
            checknavs={navigations}
          />
        }
      >
        <Route path="/" element={<Login />} />
      </Route>

      <Route
        element={
          <Auth
            store={store}
            redirect={USER_ROLES.ADMIN}
            checknavs={navigations}
          />
        }
      >
        <Route
          path="/"
          element={<Home navigations={navigations} store={store} />}
        >
          {navigations.map(({ name, link, component, children }) => (
            <Route
              key={name}
              element={
                <ValidateRoute
                  name={name}
                  navs={navigations}
                  redirect={USER_ROLES.ADMIN}
                />
              }
            >
              <Route key={name} path={link} element={component} />

              {children &&
                children.map(
                  ({
                    name: childName,
                    link: childLink,
                    component: childComponent,
                  }) => (
                    <Route
                      key={childName}
                      path={childLink}
                      element={childComponent}
                    />
                  )
                )}
            </Route>
          ))}
        </Route>
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
