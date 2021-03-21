const Web3 = require("web3");
const ethers = require('ethers');

const sendEther = async (addressTo, ethValue) => {
  let mnemonic = "ignore toss find snap between rely glove stick chat wrestle saddle abandon";
  let mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic);
  const rinkebyAddress = "https://rinkeby.infura.io/v3/2eb7aa2a80a04069af80b33d1b9f82b2";
  const accountFromPrivateKey = mnemonicWallet.privateKey;
  const accountFromAddress = "0x3b809c07f14caf55aa11e36ed6eb8f16c150ff8e";
  const _ethValue = `${ethValue}`;
  const gas = 600000;

  const providerRPC = {
    rinkeby: rinkebyAddress,
  };
  const web3 = new Web3(providerRPC.rinkeby);

  const accountFrom = {
    privateKey: accountFromPrivateKey,
    address: accountFromAddress,
  };

  console.log(
    `Attempting to send transaction from ${accountFrom.address} to ${addressTo} (amount: ${_ethValue} eth)`
  );

  const nonce = web3.eth.getTransactionCount(accountFromAddress);
  const createTransaction = await web3.eth.accounts.signTransaction(
    {
      nonce,
      gas,
      to: addressTo,
      value: web3.utils.toWei(_ethValue, "ether"),
    },
    accountFrom.privateKey
  );

  const createReceipt = await web3.eth.sendSignedTransaction(
    createTransaction.rawTransaction
  );
  console.log(
    `Transaction successful with hash: ${createReceipt.transactionHash}`
  );
};

module.exports = sendEther;