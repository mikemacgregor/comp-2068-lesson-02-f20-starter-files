import React from 'react';
import Code from '../../shared/Code';
import Layout from '../../shared/Layout';

const Context = () => {
  return (
    <Layout title="Hooks: Context">
      <Code>{`
          // Effect hook syntax
          const value = useContext(MyContext);
        `}
      </Code>

      <UserProvider>
        <div className="my-5">
        </div>
      </UserProvider>
    </Layout>
  );
}
 
export default Context;