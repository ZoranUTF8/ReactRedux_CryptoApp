import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Homepage,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes"></div>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/razmjena" element={<Exchanges />} />
            <Route exact path="/kriptovalute" element={<Cryptocurrencies />} />
            <Route exact path="/kripto/:kryptoId" element={<CryptoDetails />} />
            <Route exact path="/novosti" element={<News />} />
          </Routes>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "#fff", textAlign: "center" }}
          >
            Moj Kripto
            <br /> All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Početna</Link>
            <Link to="/kriptovalute">Kriptovalute</Link>
            <Link to="/novosti">Novosti</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
