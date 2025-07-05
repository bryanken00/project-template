import { Form } from "antd";
import { useEffect, useState } from "react";

export const useHooks = () => {
  // * Forms
  const [form] = Form.useForm();

  // * useStates
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  // * API
  // const { isLoading, mutate } = useLoginApi();

  // * Store

  // * useEffects
  useEffect(() => {
    form.setFieldsValue({
      username: "faithbook",
      password: "Aaaa1!",
    });
  }, [form]);

  // * Functions
  const onFinish = (values) => {
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
