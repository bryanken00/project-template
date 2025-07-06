import { LoginOutlined } from "@ant-design/icons";
import { App, Image, Layout, Menu, Typography } from "antd";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { logo } from "../../../assets/logo";
import { generateItems, getItem } from "../../../helper/format-data";
import { PROJECT_TITLE } from "../../../constant/enums";

const { Text } = Typography;
const { Sider } = Layout;
const MotionLink = motion(Link);

const TopMenus = ({ path, navigations = [], handleCollapse = () => {} }) => {
  console.log(generateItems(navigations));
  return (
    <>
      <Menu
        className="flex-1"
        mode="inline"
        items={generateItems(navigations)}
        defaultSelectedKeys={path}
        onClick={handleCollapse}
      />
    </>
  );
};

const Sidebar = ({ collapsed, handleCollapse, navigations, store }) => {
  const location = useLocation();

  const useStore = store;
  const { reset } = useStore();

  const pathnameArr = location.pathname.split("/");
  const path = pathnameArr[pathnameArr.length - 1];
  const { modal } = App.useApp();

  const logOut = (reset) => {
    modal.confirm({
      title: "LOGOUT",
      content: "Do you want to logout?",
      okText: "YES",
      cancelText: "NO",
      okButtonProps: {
        className: "bg-primaryColor",
      },
      onOk: () => {
        reset();
      },
    });
  };

  const bottomItems = [
    getItem(
      <MotionLink
        to="#"
        onClick={() => logOut(reset)}
        className="text-inherit no-underline block"
        whileHover={{
          paddingLeft: "0.5rem",
          color: "currentColor",
          scale: 1.05,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        Logout
      </MotionLink>,
      "signout",
      <LoginOutlined className="h-6 w-6" />
    ),
  ];

  return (
    <>
      <Sider
        className="hidden overflow-auto md:flex flex-col shadow"
        breakpoint="lg"
        collapsible
        collapsed={collapsed}
        theme="light"
        onCollapse={(value) => handleCollapse(value)}
        width={250}
      >
        <motion.div
          variants={{
            transition: {
              staggerChildren: 0.5,
            },
          }}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ amount: 0.1 }}
          transition={{ staggerChildren: 0.04 }}
          className="flex flex-col h-full overflow-auto"
        >
          <center>
            <div className="logo my-2 flex flex-col">
              <Image
                preview={false}
                src={logo}
                className="p-4"
                style={{ maxWidth: "150px" }}
              />
              {collapsed ? (
                <>
                  <Text className="font-semibold text-xs">{PROJECT_TITLE}</Text>
                </>
              ) : (
                <>
                  <Text className="font-semibold text-lg">{PROJECT_TITLE}</Text>
                </>
              )}
            </div>
          </center>
          <div className="flex-1">
            <TopMenus path={path} navigations={navigations} />
          </div>
          <Menu
            mode="inline"
            items={bottomItems}
            defaultSelectedKeys={path}
            className="mt-auto"
          />
        </motion.div>
      </Sider>
    </>
  );
};
export default Sidebar;
