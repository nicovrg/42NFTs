<<<<<<< HEAD
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Flex, Loader, Heading } from 'rimble-ui';

import { OpenSeaService } from 'services';

import Assets from './Assets';

const Home = () => {
  const [assets, setAssets] = useState<any[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  const ref = useRef();

  const getOpenSeaAssets = useCallback(
    async (offset: number) => {
      try {
        const { assets: newAssets } = await OpenSeaService.getAssets(offset);
        console.log(assets);
        setAssets([...assets, ...newAssets]);
        setIsFetching(false);
      } catch (err) {
        setIsFetching(false);
        console.error('failed');
      }
    },
    [setAssets, assets]
  );

  useEffect(() => {
    setIsFetching(true);
    getOpenSeaAssets(0);
  }, []);

  return (
    <Flex flexDirection="column" alignItems="center" width="100%" pb="400px">
      <Heading as="h1" ml="60px" my="40px">
        Collections
      </Heading>
      <Flex flexDirection="column" justifyContent="center" alignItems="center" flex={1} ref={ref}>
        {isFetching ? <Loader size="80px" /> : assets && <Assets assets={assets} />}
      </Flex>
    </Flex>
  );
};
=======
import React from 'react';

const Home = () => <p>Hello World</p>;
>>>>>>> Add web3 connection

export default Home;
