import { App as AppProvider, ConfigProvider } from "antd";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.jsx";
import "./index.css";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#1bb225",
            colorWarning: "#E2B93B",
            colorSuccess: "#27AE60",
            colorSecondary: "#636363",
            colorError: "#EB5757",
            colorInfo: "#2F80ED",
            fontFamily: "Outfit, sans-serif",
            colorBgBase: "#fff",
          },
          components: {
            Menu: {
              itemSelectedBg: "#eef9ea",
              itemActiveBg: "#eef9ea",
              itemHoverColor: "#2E850F",
            },
          },
        }}
      >
        <AppProvider>
          <App />
        </AppProvider>
      </ConfigProvider>
    </QueryClientProvider>
  </StrictMode>
);
