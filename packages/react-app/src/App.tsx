import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import { Header, Home } from 'components';
import { Flex } from 'rebass';
import { Web3ReactProvider } from '@web3-react/core';
import { getLibrary } from 'config';
import { useEagerConnect, useInactiveListener } from 'hooks';

const App = () => {
  const [activatingConnector, setActivatingConnector] = useState<boolean>(false);

  const triedEager = useEagerConnect();

  useInactiveListener(!triedEager || !!activatingConnector);

  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Flex flexDirection="column">
          <Header />
          <Flex flex="1">
            <Router>
              <Switch>
                <Route exact path={'/'} component={Home} />
              </Switch>
            </Router>
          </Flex>
        </Flex>
      </Web3ReactProvider>
    </>
  );
};

export default App;
