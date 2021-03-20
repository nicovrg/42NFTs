import React, { Dispatch, SetStateAction } from 'react';
import { Web3Provider } from '@ethersproject/providers';
import { Button, Flex, Text } from 'rebass';
import { useWeb3React } from '@web3-react/core';
import { injected } from 'config';
import { InjectedConnector } from '@web3-react/injected-connector';

const Header = ({
  setActivatingConnector
}: {
  setActivatingConnector: Dispatch<SetStateAction<InjectedConnector | undefined>>;
}) => {
  const { activate, account, connector } = useWeb3React<Web3Provider>();
  return (
    <Flex flexDirection="row" justifyContent="flex-end">
      {account && <Text mr="20px">{account}</Text>}
      <Button
        onClick={() => {
          setActivatingConnector(connector as InjectedConnector);
          activate(injected);
        }}
      >
        connect
      </Button>
    </Flex>
  );
};

export default Header;
