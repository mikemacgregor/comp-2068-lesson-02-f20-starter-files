import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import Code from '../../shared/Code';
import Layout from '../../shared/Layout';

const Ref = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  useEffect(() => {
    const hue = 30 + 240 * (30 - count) / 60;
    document.body.style.background = `hsl(${hue}, 100%, ${Math.abs(count)}%)`;
    document.body.style.transition = "0.25s";
  });

  return (
    <Layout title="Hooks: Ref">
      <Code>{`
          // Effect hook syntax
          const refContainer = useRef(initialValue);
        `}
      </Code>

      <div className="my-5">
        <ButtonGroup>
          <Button variant="success" onClick={increment}>+</Button>
          <Button disabled>{count}</Button>
          <Button variant="danger" onClick={decrement}>-</Button>
        </ButtonGroup>
      </div>
    </Layout>
  );
}
 
export default Ref;