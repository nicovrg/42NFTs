import React from 'react';

import { Flex } from 'rimble-ui';
import AssetCard from './AssetCard';

const Assets = ({ assets }: { assets: any[] }) => {
  return (
    <Flex flexWrap="wrap" justifyContent="center">
      {assets.map((asset, i) => (
        <AssetCard asset={asset} key={i} />
      ))}
    </Flex>
  );
};

export default Assets;
