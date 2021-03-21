const Tip = artifacts.require("Tip");

module.exports = function(deployer) {
  deployer.deploy(Tip, 10000000000000, 2, 420);
};
