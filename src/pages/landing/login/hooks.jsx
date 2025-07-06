import { Form } from "antd";
import { useEffect, useState } from "react";
import { permissions, token, userData } from "../../../constant/dummy-data";
import { useAdminAuthStore } from "../../../store/use-auth";

export const useHooks = () => {
  // * Forms
  const [form] = Form.useForm();

  // * useStates
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  // * API
  // const { isLoading, mutate } = useLoginApi();

  // * Store
  const { setUserData, setPermissions, setToken } = useAdminAuthStore();

  // * useEffects
  useEffect(() => {
    form.setFieldsValue({
      username: null,
      password: null,
    });
  }, [form]);

  // * Functions
  const onFinish = (values) => {
    setUserData(userData);
    setPermissions(permissions);
    setToken(token);
    // mutate(values);
  };

  return {
    // ^ Forms
    form,

    // ^ useStates
    isPasswordShown,
    setIsPasswordShown,

    // ^ API

    // ^ Functions
    onFinish,
  };
};
