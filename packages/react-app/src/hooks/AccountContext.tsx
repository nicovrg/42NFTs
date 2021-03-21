import { useWeb3React } from '@web3-react/core';
import { tipAbi, tipAddress } from 'config';
import { Contract } from 'ethers';
import React, { createContext, ReactChild, useCallback, useEffect, useState } from 'react';

export const AccountContext = createContext({ isSubscribed: false, canTip: false });

export const AccountProvider = ({ children }: { children: ReactChild }) => {
  const { active, library } = useWeb3React();
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [canTip, setCanTip] = useState<boolean>(true);

  const getSubscriptionStatus = useCallback(async () => {
    const signer = library.getSigner();
    const tipContract = new Contract(tipAddress, tipAbi, library).connect(signer);
    const tx = await tipContract.alreadySubscribe();
    return tx;
    console.log(tx);
  }, [library]);

  useEffect(() => {
    const verifySubscribtion = async () => {
      const res: boolean = await getSubscriptionStatus();
      setIsSubscribed(res);
    };
    const verifyTip = async () => {
      const signer = library.getSigner();
      const tipContract = new Contract(tipAddress, tipAbi, library).connect(signer);
      const tx = await tipContract.canTip();
      console.log(tx);
      setCanTip(tx);
    };

    if (active) {
      verifyTip();
      verifySubscribtion();
    }
  }, [active, getSubscriptionStatus]);

  return (
    <AccountContext.Provider value={{ isSubscribed, canTip }}>{children}</AccountContext.Provider>
  );
};
