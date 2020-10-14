import React, { Fragment, useMemo } from 'react';
import Layout from '../../shared/Layout';
import { Card, Row, Col } from 'react-bootstrap';

const LocalData = () => {
  const users = useMemo(() => data, []);

  return (
    <Layout title="Data: Local">
      <Row className="my-5">
      </Row>
    </Layout>
  );
}

export default LocalData;