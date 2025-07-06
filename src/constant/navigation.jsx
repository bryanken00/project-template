import { DashboardIcon } from "../assets/icon/Icon";
import { getKeyFromValue } from "../helper/format-data";
import Dashboard from "../pages/admin/dashboard";
import { useAdminAuthStore } from "../store/use-auth";

export const USER_ROLES = {
  USER: "USER",
  ADMIN: "ADMIN",
};

export const USER_ROLE_PATH = {
  USER: "user",
  ADMIN: "admin",
};

export const USERS = {
  ADMIN: {
    name: `${getKeyFromValue(USER_ROLES, USER_ROLES.ADMIN)}`,
    store: useAdminAuthStore,
  },
};

export const NAVIGATIONS_ADMIN = {
  [USERS.ADMIN.name]: [
    {
      name: "Dashboard",
      label: "Dashboard",
      link: "dashboard",
      icon: <DashboardIcon className="h-6 w-6" />,
      component: <Dashboard />,
      isFilter: true,
      isShow: true,
    },
  ],
};
