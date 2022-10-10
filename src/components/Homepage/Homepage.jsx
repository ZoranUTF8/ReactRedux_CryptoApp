import millify from "millify";
import { Typography, Row, TableColumnGroupType, Statistic, Col } from "antd";
import { Link } from "react-router-dom";
import { Cryptocurrencies, News } from "../index";

import { useGetCryptosQuery } from "../../services/cryptoApi";

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);

  const GLOBAL_STATS = data?.data?.stats;

  if (isFetching) return "Loading";

  return (
    <>
      <Title level={2} className="heading">
        Globalna statistika
      </Title>

      <Row gutter={[32, 32]}>
        <Col span={12}>
          <Statistic
            title="Ukupno kripto valuta"
            value={millify(GLOBAL_STATS.total)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Totalne razmjene"
            value={millify(GLOBAL_STATS.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Totalna tržišna kapa"
            value={millify(GLOBAL_STATS.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Ukupno 24h volumen"
            value={millify(GLOBAL_STATS.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Ukupno tržišta"
            value={millify(GLOBAL_STATS.totalMarkets)}
          />
        </Col>
      </Row>

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 kriptovaluta na svijetu
        </Title>
        <Title level={3} className="show-more">
          <Link to="/kriptovalute">Prikaži više</Link>
        </Title>
      </div>

      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Najnovije kripto vijesti
        </Title>
        <Title level={3} className="show-more">
          <Link to="/novosti">Prikaži više</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
