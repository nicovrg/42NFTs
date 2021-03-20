interface CustomWindow extends Window {
  // Web3
  ethereum?: any;
  web3?: any;
  Web3Provider?: ethers.providers.Web3Provider;
  Web3Signer?: Web3Provider;
}
