import React, { useState } from 'react';
import Code from '../../shared/Code';
import Layout from '../../shared/Layout';

const Memo = () => {
  return (
    <Layout title="Hooks: Memo">
      <Code>{`
          // Effect hook syntax
          const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
        `}
      </Code>

      <div className="my-5">
        <button></button>
      </div>
    </Layout>
  );
}
 
export default Memo;