import millify from "millify";
import { Typography, Row, TableColumnGroupType, Statistic, Col } from "antd";
import { Link } from "react-router-dom";

import { useGetCryptosQuery } from "../../services/cryptoApi";

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery();

  const GLOBAL_STATS = data?.data?.stats;

  console.log("GLOBAL_STATS", GLOBAL_STATS);

  if (isFetching) return "Loading";

  return (
    <>
      <Title level={2} className="heading">
        Globalna statistika
      </Title>

      <Row>
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
    </>
  );
};

export default Homepage;
