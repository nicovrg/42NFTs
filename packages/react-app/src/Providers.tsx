import React, { ReactChild } from 'react';
import { Web3ReactProvider } from '@web3-react/core';

import { getLibrary } from 'config';

const Providers = ({ children }: { children: ReactChild }) => (
  <Web3ReactProvider getLibrary={getLibrary}>{children}</Web3ReactProvider>
);

export default Providers;
