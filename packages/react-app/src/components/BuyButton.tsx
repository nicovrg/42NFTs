import { useWeb3React } from '@web3-react/core';
import { Button } from 'rimble-ui';
import React, { useContext } from 'react';
import { ethers } from 'ethers';
import { tipAddress } from 'config';
import { AccountContext } from 'hooks';

const BuyButton = () => {
  const { active, library } = useWeb3React();
  const { isSubscribed } = useContext(AccountContext);

  const getPass = async () => {
    try {
      const signer = library.getSigner();
      const tx = await signer.sendTransaction({
        to: tipAddress,
        value: ethers.utils.parseEther('0.001')
      });
    } catch (err) {
      console.error('error when sending tx:', err);
    }
  };

  return active && !isSubscribed ? (
    <React.Fragment>
      <Button.Outline onClick={getPass}>Buy Season Pass</Button.Outline>
    </React.Fragment>
  ) : (
    <React.Fragment></React.Fragment>
  );
};

export default BuyButton;
