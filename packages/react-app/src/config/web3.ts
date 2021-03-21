import { InjectedConnector } from '@web3-react/injected-connector';
import { Web3Provider } from '@ethersproject/providers';
import { NetworkConnector } from '@web3-react/network-connector';

const POLLING_INTERVAL = 12000;

const RPC_URLS: { [chainId: number]: string } = {
  1: 'https://mainnet.infura.io/v3/b7b7a2390c1b4cf19e3f6965c9bd33e5',
  4: 'https://mainnet.infura.io/v3/e13a0fa243894b47a148378ea16a06d9'
};

export const injected = new InjectedConnector({ supportedChainIds: [4] });

export const network = new NetworkConnector({
  urls: RPC_URLS,
  defaultChainId: 4
});

export function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
}
