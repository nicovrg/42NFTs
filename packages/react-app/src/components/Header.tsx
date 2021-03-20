import React from 'react';
import { Web3Provider } from '@ethersproject/providers';
import { Button, Flex } from 'rebass';
import { useWeb3React } from '@web3-react/core';
import { injected } from 'config';

const Header = () => {
  const { activate } = useWeb3React<Web3Provider>();
  return (
    <Flex flexDirection="row" justifyContent="flex-end">
      <Button
        onClick={() => {
          activate(injected);
        }}
      >
        connect
      </Button>
    </Flex>
  );
};

export default Header;
