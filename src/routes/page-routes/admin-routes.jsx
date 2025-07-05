import { Navigate, Route, Routes } from "react-router-dom";
import {
  NAVIGATIONS_ADMIN,
  USER_ROLES,
  USERS,
} from "../../constant/navigation";
import { formatNavigations } from "../../helper/format-data";
import Login from "../../pages/landing/login";
import { UnAuth } from "../validate-auth";

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
    </Routes>
  );
};

export default AdminRoutes;
