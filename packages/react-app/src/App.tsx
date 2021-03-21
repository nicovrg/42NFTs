import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Flex } from 'rimble-ui';

import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';

import { useEagerConnect, useInactiveListener } from 'hooks';
import { Header, Home } from 'components';

const App = () => {
  const { connector } = useWeb3React();
  const [activatingConnector, setActivatingConnector] = useState<InjectedConnector | undefined>();

  const triedEager = useEagerConnect();

  useInactiveListener(!triedEager || !!activatingConnector);

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  return (
    <BrowserRouter>
      <Flex flexDirection="column" minHeight="100vh">
        <Header setActivatingConnector={setActivatingConnector} />
        <Flex flex="1">
          <Switch>
            <Route exact path={'/'} component={Home} />
          </Switch>
        </Flex>
      </Flex>
    </BrowserRouter>
  );
};

export default App;
