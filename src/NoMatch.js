import React from 'react';
import { Icon, Header } from 'semantic-ui-react';
import { Container} from 'semantic-ui-react';

import Layout from './Layout';

const NoMatch = () => {
  return (
    <Layout>
      <Container>
        <div style={{'minHeight': '50vh', 'marginTop':'10%'}}>
      <h1 align='center'>Opps! Page not found!</h1>
      </div>
      </Container>
    </Layout>
  );
};

export default NoMatch;