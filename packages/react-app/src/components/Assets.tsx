import React from 'react';

import { Flex, Card, Heading, Text, Image } from 'rimble-ui';

const Assets = ({ assets }: { assets: any[] }) => {
  const truncate = (str: string, n: number) =>
    str.length > n ? str.substr(0, n - 1) + '...' : str;

  return (
    <Flex flexWrap="wrap" justifyContent="center">
      {assets.map((asset, i) => (
        <Card width="500px" height="300px" key={i} m="20px">
          <Flex flexDirection="row" alignItems="center">
            {asset.image_thumbnail_url && <Image src={asset.image_thumbnail_url} height="100px" />}
            {asset.name && <Heading as="h4">{asset.name}</Heading>}
          </Flex>
          {asset.description && <Text>{truncate(asset.description, 250)}</Text>}
        </Card>
      ))}
    </Flex>
  );
};

export default Assets;
