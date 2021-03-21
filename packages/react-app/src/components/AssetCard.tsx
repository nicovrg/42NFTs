import { useWeb3React } from '@web3-react/core';
import { tipAbi, tipAddress } from 'config';
import { Contract } from 'ethers';
import { AccountContext } from 'hooks';
import React, { useContext, useEffect, useState } from 'react';
import { Flex, Image, Text, Button, Heading, Card } from 'rimble-ui';

const AssetCard = ({ asset }: { asset: any }) => {
  const { isSubscribed, canTip } = useContext(AccountContext);
  const { active, library } = useWeb3React();
  const [alreadyTipped, setAlreadyTipped] = useState<boolean>(false);
  const [tipping, setTipping] = useState<boolean>(false);

  const truncate = (str: string, n: number) =>
    str.length > n ? str.substr(0, n - 1) + '...' : str;

  const tipArtist = async () => {
    try {
      setTipping(true);
      const signer = library.getSigner();
      const tipContract = new Contract(tipAddress, tipAbi, library).connect(signer);
      await tipContract.tipArtist(asset.owner.address);
      setTipping(false);
    } catch (err) {
      console.error('tip failed with err: ', err);
    }
  };

  useEffect(() => {
    const isAlreadyTipped = async () => {
      try {
        const signer = library.getSigner();
        const tipContract = new Contract(tipAddress, tipAbi, library).connect(signer);
        const tx = await tipContract.alreadyTip(asset.owner.address);
        setAlreadyTipped(tx);
      } catch (err) {}
    };

    if (active) {
      isAlreadyTipped();
    }
  }, [setTipping, active]);

  return (
    <Card width="500px" height="300px" m="20px">
      <Flex flexDirection="row" alignItems="center">
        {asset.image_thumbnail_url && <Image src={asset.image_thumbnail_url} height="100px" />}
        {asset.name && <Heading as="h4">{asset.name}</Heading>}
      </Flex>
      {asset.description && <Text>{truncate(asset.description, 80)}</Text>}
      <Button
        onClick={tipArtist}
        mt="20px"
        disabled={!active || !isSubscribed || !canTip || alreadyTipped}
      >
        {alreadyTipped ? 'Already Tipped' : 'Tip Artist'}
      </Button>
    </Card>
  );
};

export default AssetCard;
