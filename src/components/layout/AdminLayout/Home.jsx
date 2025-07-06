import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Divider,
  Layout,
  Popover,
  Space,
  Typography,
} from "antd";
import { Suspense, useState } from "react";
import { Outlet } from "react-router";
import { useWindowSize } from "../../../hooks/useWindowSize";
import MotionPress from "../../ui/button/MotionPress";
import PageLoader from "../../ui/loading/PageLoader";
import Sidebar from "./Sidebar";

const { Header, Content } = Layout;
const Home = ({ navigations, store }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [width] = useWindowSize();

  const useStore = store;
  const { userData, reset } = useStore();
  const [userOpen, setUserOpen] = useState(false);

  const handleCollapse = (value) => {
    setCollapsed(value);
  };

  const handleOpenChange = (newOpen) => {
    setUserOpen(newOpen);
  };

  return (
    <Layout className=" h-screen w-screen fixed">
      <Sidebar
        handleCollapse={handleCollapse}
        collapsed={collapsed}
        navigations={navigations}
        store={store}
      />
      <Layout className="site-layout">
        <div className="site-layout-background flex justify-between items-center h-[70px] text-white pl-2 px-4 bg-b-primary">
          <div className="flex h-full items-center gap-3">
            {collapsed ? (
              <MenuFoldOutlined
                className=" text-2xl"
                onClick={() => handleCollapse(!collapsed)}
              />
            ) : (
              <MenuUnfoldOutlined
                className=" text-2xl"
                onClick={() => handleCollapse(!collapsed)}
              />
            )}
          </div>

          {width <= 480 ? (
            <></>
          ) : (
            <Space size="middle">
              <MotionPress>{/* <NotificationButton /> */}</MotionPress>

              <MotionPress>
                <Popover
                  arrow={false}
                  placement="bottomRight"
                  content={
                    <Card>
                      <div className=" text-center">
                        <Avatar
                          size={60}
                          icon={<UserOutlined />}
                          className=" bg-primaryColor"
                        />
                        <Typography.Title level={4}>
                          {[userData.firstName, userData.lastName].join(" ")}
                        </Typography.Title>
                        <Typography.Text>{userData.accountId}</Typography.Text>
                        <Divider />
                        <Button onClick={reset} icon={<LogoutOutlined />}>
                          SIGN OUT
                        </Button>
                      </div>
                    </Card>
                  }
                  trigger="click"
                  onOpenChange={handleOpenChange}
                  open={userOpen}
                  className=" cursor-pointer"
                >
                  <div className=" flex justify-center items-center">
                    <div className="justify-start items-center gap-3 flex">
                      <Avatar icon={<UserOutlined />} />
                    </div>
                  </div>
                </Popover>
              </MotionPress>
            </Space>
          )}
        </div>
        <Content className=" bg-white h-full w-full overflow-auto justify-center items-center ">
          <Suspense
            fallback={
              <div className="flex-1 p-2 flex justify-center items-center h-full">
                <PageLoader />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
