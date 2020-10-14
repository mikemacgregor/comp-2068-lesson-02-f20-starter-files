import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import Code from '../../shared/Code';
import Layout from '../../shared/Layout';

const State = () => {
  return (
    <Layout title="Hooks: State">
      <Code>{`
          // State hook syntax
          const [state, setState] = useState(initialState);
        `}
      </Code>

      <div className="my-5">
        <ButtonGroup>
          <Button variant="success">+</Button>
          <Button disabled></Button>
          <Button variant="danger">-</Button>
        </ButtonGroup>
      </div>
    </Layout>
  );
}
 
export default State;