const Tip = artifacts.require("Tip");

module.exports = function(deployer) {
  deployer.deploy(Tip, 10000000000000, 2, 600, "0x3afB1fd90D9035df0A25313878EE7CA40024233A");
};
