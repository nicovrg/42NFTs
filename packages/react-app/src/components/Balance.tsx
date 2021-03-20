import React, { useEffect, useState } from 'react';

import { Flex, Text } from 'rimble-ui';
import { BigNumber } from 'ethers';

import { formatEther } from '@ethersproject/units';
import { useWeb3React } from '@web3-react/core';

const Balance = ({ account }: { account: string }) => {
  const { library, chainId } = useWeb3React();

  const [balance, setBalance] = useState<BigNumber | undefined>();

  useEffect(() => {
    if (!!account && !!library) {
      let stale = false;

      library
        .getBalance(account)
        .then((balance: BigNumber) => {
          if (!stale) {
            setBalance(balance);
          }
        })
        .catch(() => {
          if (!stale) {
            setBalance(undefined);
          }
        });

      return () => {
        stale = true;
        setBalance(undefined);
      };
    }
  }, [account, library, chainId]);

  const truncate = (balance: string) => {
    if (balance.includes('.')) {
      const parts = balance.split('.');
      return parts[0] + '.' + parts[1].slice(0, 4);
    }
    return balance;
  };

  return (
    <Flex flexDirection="column">
      <Text color="silver" fontWeight="700">
        BALANCE
      </Text>
      <Text fontWeight="600">{balance ? `Ξ${truncate(formatEther(balance))}` : '-'}</Text>
    </Flex>
  );
};

export default Balance;
