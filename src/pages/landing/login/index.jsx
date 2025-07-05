import { LockOutlined, UnlockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { logo } from "../../../assets/logo";
import { useHooks } from "./hooks";

const Login = () => {
  const {
    // ^ Forms
    form,

    // ^ useStates
    isPasswordShown,
    setIsPasswordShown,

    // ^ API

    // ^ Functions
    onFinish,
  } = useHooks();

  return (
    <div
      className="w-full min-h-screen flex justify-center items-center relative"
      style={{
        background: `#FFFFFF`,
        backgroundSize: "cover",
      }}
    >
      <div className="py-10">
        <div className="mb-5  sm:block w-[380px] bg-transparent sm:bg-white rounded-[5px] sm:p-[36px] z-10">
          <center>
            <img src={logo} />
          </center>
          <div className="p-5 sm:p-0 mt-8">
            <Form
              form={form}
              onFinish={onFinish}
              layout="vertical"
              autoComplete="off"
              // disabled={isLoading}
            >
              <div className="flex flex-col gap-1 mb-5">
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    prefix={<UserOutlined />}
                    placeholder="Enter username"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password
                    size="large"
                    prefix={
                      isPasswordShown ? <UnlockOutlined /> : <LockOutlined />
                    }
                    placeholder="Enter password"
                    visibilityToggle={{
                      visible: isPasswordShown,
                      onVisibleChange: (visible) => setIsPasswordShown(visible),
                    }}
                  />
                </Form.Item>
                <div className="flex justify-between">
                  {/* <Checkbox
                    checked={remember}
                    onChange={() => setRemember(!remember)}
                  >
                    Remember Password
                  </Checkbox> */}
                  {/* <a className="text-neutral-300 sm:text-neutral-500 text-sm font-normal leading-[13.86px] hover:text-neutral-400">
                    Forgot Password?
                  </a> */}
                </div>
              </div>

              <Form.Item>
                <Button
                  block
                  size="large"
                  type="primary"
                  htmlType="submit"
                  // loading={isLoading}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="text-center">
            {/* <span className="text-neutral-300 sm:text-neutral-500 text-sm font-normal leading-[13.86px]">
              Don’t have an account?{" "}
            </span>
            <span className="text-white sm:text-primaryColor text-sm font-normal leading-[13.86px]">
              Sign Up!
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
