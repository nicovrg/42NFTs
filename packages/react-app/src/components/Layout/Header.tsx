import React, { Dispatch, SetStateAction } from 'react';
import { Flex, Image } from 'rimble-ui';
import { InjectedConnector } from '@web3-react/injected-connector';

import WalletConnector from 'components/WalletConnector';

import logo from 'assets/logo.svg';
import BuyButton from 'components/BuyButton';

const Header = ({
  setActivatingConnector
}: {
  setActivatingConnector: Dispatch<SetStateAction<InjectedConnector | undefined>>;
}) => {
  return (
    <Flex flexDirection="row" justifyContent="space-between" p="10px">
      <Flex>
        <Image src={logo} alt="logo" mr="40px" />
        <BuyButton />
      </Flex>
      <WalletConnector setActivatingConnector={setActivatingConnector} />
    </Flex>
  );
};

export default Header;
