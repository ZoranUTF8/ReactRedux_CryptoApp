import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useState } from "react";

import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../../services/cryptoApi";

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");

  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: newsCategory,
    count: simplified ? 6 : 12,
  });
  const { data: cryptoNameList } = useGetCryptosQuery(100);

  if (!cryptoNews?.value) return "Loading...";

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <div className="search-news">
            <Select
              showSearch
              className="select-news"
              placeholder="Izaberite valutu"
              optionFilterProp="children"
              onChange={(value) => setNewsCategory(value)}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {cryptoNameList?.data?.coins.map((coin, i) => (
                <Option key={i} value={coin.name}>
                  {coin.name}
                </Option>
              ))}
            </Select>
          </div>
        </Col>
      )}

      {cryptoNews?.value.map((news, indx) => (
        <Col xs={24} sm={12} lg={8} key={indx}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name.substring(0, 50)}...
                </Title>
                <img
                  className="news-image"
                  src={news?.image?.thumbnail?.contentUrl || demoImage}
                  alt={news?.name}
                />
              </div>

              <p>
                {news?.description > 50
                  ? `${news.description.substring(0, 50)}...`
                  : news.description}
              </p>

              <div className="provider-container">
                <Avatar
                  src={
                    news?.provider[0]?.image?.thumbnail?.contentUrl || demoImage
                  }
                  alt={news?.name}
                />

                <Text className="provider-name">{news?.provider[0]?.name}</Text>

                <Text>
                  {moment(news?.datePublished).startOf("ss").fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
