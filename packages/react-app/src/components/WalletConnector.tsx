import React, { Dispatch, SetStateAction } from 'react';
import NetworkIndicator from '@rimble/network-indicator';
import { Flex, MetaMaskButton, EthAddress, Button } from 'rimble-ui';

import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { Web3Provider } from '@ethersproject/providers';

import { injected } from 'config';

import Balance from './Balance';

const WalletConnector = ({
  setActivatingConnector
}: {
  setActivatingConnector: Dispatch<SetStateAction<InjectedConnector | undefined>>;
}) => {
  const { activate, account, connector, active, deactivate, chainId } = useWeb3React<
    Web3Provider
  >();
  return (
    <Flex>
      {active && account ? (
        <React.Fragment>
          <NetworkIndicator currentNetwork={chainId} />
          <Flex flexDirection="column" ml="20px">
            <Balance account={account} />
          </Flex>
          <Flex width="270px">
            <EthAddress mx="20px" address={account} />
          </Flex>
          <Button onClick={() => deactivate()}>Disconnect</Button>
        </React.Fragment>
      ) : (
        <MetaMaskButton
          onClick={() => {
            setActivatingConnector(connector as InjectedConnector);
            activate(injected);
          }}
        >
          Connect with MetaMask
        </MetaMaskButton>
      )}
    </Flex>
  );
};

export default WalletConnector;
