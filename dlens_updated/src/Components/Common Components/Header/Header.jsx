import React, { useEffect, useState } from "react";
import { Layout, Menu, Drawer, Button } from "antd";
import "./Header.css";
import { MenuOutlined } from "@ant-design/icons";

const { Header } = Layout;

function HeaderComponent() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          background: "#fff",
        }}>
        <div style={{ float: "left", display: "flex", alignItems: "center" }}>
          <div style={{ marginRight: 24 }}>Your Logo</div>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ lineHeight: "64px" }}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">About</Menu.Item>
            <Menu.Item key="3">Services</Menu.Item>
            <Menu.Item key="4">Contact</Menu.Item>
          </Menu>
        </div>

        <div style={{ float: "right", display: "flex", alignItems: "center" }}>
          <Button type="primary">Login</Button>
          <Button type="default" style={{ marginLeft: 8 }}>
            Signup
          </Button>
          <Button
            type="text"
            icon={<MenuOutlined />}
            style={{
              marginLeft: 16,
              display: {
                xs: "block",
                sm: "block",
                md: "none",
                lg: "none",
                xl: "none",
                xxl: "none",
              },
            }}
            onClick={showDrawer}
          />
        </div>

        <Drawer
          title="Menu"
          placement="right"
          closable={true}
          onClose={onClose}
          visible={visible}
          key="right"
          width={250}>
          <Menu theme="light" mode="vertical" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">About</Menu.Item>
            <Menu.Item key="3">Services</Menu.Item>
            <Menu.Item key="4">Contact</Menu.Item>
            <Menu.Item key="5">Login</Menu.Item>
            <Menu.Item key="6">Signup</Menu.Item>
          </Menu>
        </Drawer>
      </Header>
    </>
  );
}

export default HeaderComponent;
