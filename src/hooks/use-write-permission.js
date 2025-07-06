import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useAdminAuthStore } from "../store/use-auth";

export const useWritePermission = () => {
  const { permissions } = useAdminAuthStore();
  const { pathname } = useLocation();

  let [module, subModule] = pathname.split("/").slice(-2);

  if (subModule === "admin") {
    subModule = null;
  }

  const hasWritePermission = useMemo(() => {
    const access = permissions?.find((p) => {
      const isSameModule = p.module === module;
      const isSameSubModule =
        p.subModule === subModule ||
        (subModule == null && (p.subModule === null || p.subModule === ""));
      return isSameModule && isSameSubModule && p.status === 0;
    });

    return access?.permissions?.split(";")?.includes("write");
  }, [permissions, module, subModule]);

  return { hasWritePermission };
};
