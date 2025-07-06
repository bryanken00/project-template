import { message } from "antd";
import { MessageContext } from "./helper/message-context";
import RootRoutes from "./routes";

const App = () => {
  const [messageApi, contextHolder] = message.useMessage();
  return (
    <>
      {contextHolder}
      <MessageContext.Provider value={messageApi}>
        <RootRoutes />
      </MessageContext.Provider>
    </>
  );
};

export default App;
