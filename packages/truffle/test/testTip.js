const Tip = artifacts.require("Tip");
const truffleAssert = require('truffle-assertions');
const Web3 = require("web3");

contract('Tip', async (accounts) => {
  let tipInstance;
  const subscriptionPrice = 1000;
  const maxSubscription = 2;
  const endDelay = 120;
  const artistAddress0 = "0x797761C1e415BB28dF3Cb730DF1613BD9b0228Cb";
  const artistAddress1 = "0x1c3077Cf0c34A41EF4FA2Ca4078dA44AD39a41b9";

  it('should instance contract', async () => {
    tipInstance = await Tip.deployed(subscriptionPrice, maxSubscription, endDelay);
  });
  it('should revert subscribe first', async () => {
    await truffleAssert.fails(tipInstance.tipArtist("0x6ff88a58D8b9E93639290d61B9665Dc4Cd171E9E"));
  });
  it('balance should has 0.001 ETH after deposit', async () => {
    let one_eth = Web3.utils.toWei("0.001", "ether");
    let balance_wei = await web3.eth.getBalance(tipInstance.address);
    await web3.eth.sendTransaction({from: accounts[0], to: tipInstance.address, value: one_eth});
    balance_wei = await web3.eth.getBalance(tipInstance.address);
    let balance_ether = web3.utils.fromWei(balance_wei, "ether");
    assert.equal(balance_ether, 0.001);
  });
  it('should pass', async () => {
    await tipInstance.tipArtist(artistAddress0);

    const subscribersArtistList = await tipInstance.getArtistList();
    const artistTippers = await tipInstance.getTippersList(artistAddress0);

    assert.equal(subscribersArtistList["0"].artist, artistAddress0);
    assert.equal(subscribersArtistList["0"].rank, "1");
    assert.equal(artistTippers["0"], accounts[0]);
  });
  it('should revert already tipped', async () => {
    await truffleAssert.fails(tipInstance.tipArtist("0x797761C1e415BB28dF3Cb730DF1613BD9b0228Cb"));
  });
  it('should pass', async () => {
    await tipInstance.tipArtist(artistAddress1);

    const subscribersArtistList = await tipInstance.getArtistList();
    const artistTippers = await tipInstance.getTippersList(artistAddress1);

    assert.equal(subscribersArtistList["1"].artist, artistAddress1);
    assert.equal(subscribersArtistList["1"].rank, "1");
    assert.equal(artistTippers["0"], accounts[0]);
  });
  it('should revert no tips left', async () => {
     await truffleAssert.fails(tipInstance.tipArtist("0x3A9E0e7c6B5d4748f093683f778607270096EeaE"));
  });
});
