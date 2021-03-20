import React, { Dispatch, SetStateAction } from 'react';

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
  const { activate, account, connector, active, deactivate } = useWeb3React<Web3Provider>();
  return (
    <Flex>
      {active && account ? (
        <>
          <Flex flexDirection="column">
            <Balance account={account} />
          </Flex>
          <Flex width="270px">
            <EthAddress mx="20px" address={account} />
          </Flex>
          <Button onClick={() => deactivate()}>Disconnect</Button>
        </>
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
