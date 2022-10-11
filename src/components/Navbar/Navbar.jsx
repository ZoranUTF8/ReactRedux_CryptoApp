import { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={logo} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Moj Kripto</Link>
        </Typography.Title>

        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />} key={0}>
            <Link to="/">Početna</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />} key={1}>
            <Link to="/kriptovalute">Kriptovalute</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />} key={2}>
            <Link to="/razmjena">Razmjena</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />} key={3}>
            <Link to="/novosti">Novosti</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
