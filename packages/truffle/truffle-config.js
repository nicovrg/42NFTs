const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = 'ignore toss find snap between rely glove stick chat wrestle saddle abandon';

module.exports = {
  networks: {
    rinkeby: {
      provider: function() {
        let wallet =  new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/2eb7aa2a80a04069af80b33d1b9f82b2");
        return wallet;
      },
      skipDryRun: true,
      from: "0x3b809c07f14caf55aa11e36ed6eb8f16c150ff8e",
      network_id: '4'
    }
  },
  compilers: {
    solc: {
      version: "0.6.7", // A version or constraint - Ex. "^0.5.0"
      parser: "solcjs",  // Leverages solc-js purely for speedy parsing
      settings: {
        evmVersion: "istanbul" // Default: "istanbul"
      }
    }
  }
};
