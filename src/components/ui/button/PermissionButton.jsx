import { Button } from "antd";
import { useWritePermission } from "../../../hooks/use-write-permission";

const PermissionButton = ({ forceShow = false, children, ...props }) => {
  const { hasWritePermission } = useWritePermission();
  const showButton = hasWritePermission || forceShow;

  return (
    <Button
      disabled={!hasWritePermission && !forceShow}
      style={{ display: showButton ? "inline-block" : "none" }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default PermissionButton;
