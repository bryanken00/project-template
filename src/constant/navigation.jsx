import { DashboardIcon } from "../assets/icon/Icon";
import { getKeyFromValue } from "../helper/format-data";
import Dashboard from "../pages/admin/dashboard";
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
      name: "Dashboard",
      label: "Dashboard",
      link: "dashboard",
      icon: <DashboardIcon className="h-6 w-6" />,
      isFilter: true,
      isShow: true,
      children: [
        {
          name: "Dashboard Child 1",
          label: "Dashboard Child 1",
          link: "dashboard-child-1",
          icon: <DashboardIcon className="h-5 w-5" />,
          component: <Dashboard />,
          isFilter: false,
          isShow: true,
        },
        {
          name: "Dashboard Child 2",
          label: "Dashboard Child 2",
          link: "dashboard-child-2",
          icon: <DashboardIcon className="h-5 w-5" />,
          component: <Dashboard />,
          isFilter: false,
          isShow: true,
        },
      ],
    },
    {
      name: "Dashboard 1",
      label: "Dashboard 1",
      link: "dashboard1",
      icon: <DashboardIcon className="h-6 w-6" />,
      component: <Dashboard />,
      isFilter: true,
      isShow: true,
    },
  ],
};
