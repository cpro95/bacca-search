import React, { useState } from 'react';
import { Row, Col, Typography, Card, Spin } from 'antd';
// import axios from 'axios';

export default function Dashboard(props) {
  const { Title } = Typography;

  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [startP, setStartP] = useState(0);
  const [startB, setStartB] = useState(0);
  const [startT, setStartT] = useState(0);

  // overhead for loading 4 fetch
  setTotal(40000);
  setStartP(17988);
  setStartB(18165);
  setStartT(3847);
  setIsLoading(false);

  // temporially shut down fetch
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);

  //     try {
  //       const result = await axios.get('https://cpro95.asuscomm.com:2368/api/bacca/list');
  //       setTotal(Number(result.data));
  //     } catch (error) {
  //       console.log(error);
  //     }

  //     setIsLoading(false);
  //   };

  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);

  //     try {
  //       const result = await axios.get('https://cpro95.asuscomm.com:2368/api/bacca/list/P');
  //       setStartP(Number(result.data.length));
  //     } catch (error) {
  //       console.log(error);
  //     }

  //     setIsLoading(false);
  //   };

  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);

  //     try {
  //       const result = await axios.get('https://cpro95.asuscomm.com:2368/api/bacca/list/B');
  //       setStartB(Number(result.data.length));
  //     } catch (error) {
  //       console.log(error);
  //     }

  //     setIsLoading(false);
  //   };

  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);

  //     try {
  //       const result = await axios.get('https://cpro95.asuscomm.com:2368/api/bacca/list/T');
  //       setStartT(Number(result.data.length));
  //     } catch (error) {
  //       console.log(error);
  //     }

  //     setIsLoading(false);
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <Title>Dashboard</Title>

      {isLoading ? (
        <Spin size="large" />
      ) : (
        <div>
          <Title level={2}>Total - {total.toLocaleString()}</Title>
          <Row gutter={16}>
            <Col span={8}>
              <Card title="P" bordered={false}>
                {startP.toLocaleString()}
              </Card>
            </Col>
            <Col span={8}>
              <Card title="B" bordered={false}>
                {startB.toLocaleString()}
              </Card>
            </Col>
            <Col span={8}>
              <Card title="T" bordered={false}>
                {startT.toLocaleString()}
              </Card>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
}
