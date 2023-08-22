import * as React from "react";
import * as ReactDOM from "react-dom/client";
//import "./index.css";
import App from "./App";
import { ConfigProvider } from "antd";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <ConfigProvider
    theme={{
      token: {
        borderRadius: 0
      },
      components: {
        Menu: {
          colorPrimary: '#12CE9F'
        },
        Table: {
          colorTextHeading: '#001529',
          colorBorderSecondary: '#cccccc',
        },
        Input: {
          colorBgLayout: '#12CE9F',
          
        },
      }
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>

  </ConfigProvider>
);
