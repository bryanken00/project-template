import { DashboardIcon } from "../assets/icon/Icon";
import { getKeyFromValue } from "../helper/format-data";
import { useAdminAuthStore } from "../store/use-auth";

export const USER_ROLES = {
  USER: "USER",
  ADMIN: "ADMIN",
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
      link: "dashboard",
      name: "Dashboard",
      label: "Dashboard",
      icon: <DashboardIcon className="h-6 w-6" />,
      // component: <ADMIN.Dashboard />,
      isFilter: true,
      isShow: true,
    },
  ],
};
