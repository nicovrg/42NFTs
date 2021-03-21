import React, { ReactChild } from 'react';

import { ThemeProvider } from 'styled-components';
import { theme, BaseStyles } from 'rimble-ui';

import { Web3ReactProvider } from '@web3-react/core';

import { getLibrary } from 'config';

const Providers = ({ children }: { children: ReactChild }) => (
  <React.Fragment>
    <Web3ReactProvider getLibrary={getLibrary}>
      <ThemeProvider theme={theme}>
        <BaseStyles>{children}</BaseStyles>
      </ThemeProvider>
    </Web3ReactProvider>
  </React.Fragment>
);

export default Providers;
