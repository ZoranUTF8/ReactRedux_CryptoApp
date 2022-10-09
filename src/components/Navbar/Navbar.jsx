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
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={logo} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Moj Kripto</Link>
        </Typography.Title>

        {/* <Button className="menu-control-container"></Button> */}
      </div>
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
    </div>
  );
};

export default Navbar;
