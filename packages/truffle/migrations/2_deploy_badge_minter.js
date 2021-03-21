const BadgeMinter = artifacts.require("../contracts/BadgeMinter.sol");

module.exports = function(deployer) {
  deployer.deploy(BadgeMinter);
};
