import React, { Fragment, useMemo } from 'react';
import Layout from '../../shared/Layout';
import { Card, Row, Col } from 'react-bootstrap';
import data from './data.json';

const LocalData = () => {

  console.log(data);

  const users = useMemo(() => data, []); // store data with memo to prevent pulling it over and over and over

  // need a unique key for multiple of same items to keep React happy
  return (
    <Layout title="Data: Local">
      <Row className="my-5">
        {users.map((user, i) => (
          <Col key={i}>
            <Card className="my-2" style={{ width: '18rem' }}>
              <Card.Header>
                  <h3>{user.name}</h3>
                  <small>{user.username}</small>
              </Card.Header>
              <Card.Body>
                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Layout>
  );
}

export default LocalData;