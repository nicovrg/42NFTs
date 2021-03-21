const { ethers } = require("hardhat");
const { use, expect } = require("chai");
const { solidity } = require("ethereum-waffle");

// const fs = require("fs");
// const ipfsAPI = require('ipfs-http-client');
// const ipfs = ipfsAPI({host: 'ipfs.infura.io', port: '5001', protocol: 'https' })

use(solidity);

describe("My Dapp", function () {
  const toAddress = "0xeD119E4B9a3f4Ab8AAe2DC2D2FdF9515d4c09325"

  describe("BadgeMinter", function () {

    it("Should deploy BadgeMinter", async function () {
      const BadgeMinter = await ethers.getContractFactory("BadgeMinter");
      myContract =   await BadgeMinter.deploy();
    });
    
    it("Top Artists received their price", async function() {
      const Artists = ["0xeD119E4B9a3f4Ab8AAe2DC2D2FdF9515d4c09325", "0xeD119E4B4a3f4Ab8AAe2DC2D2FdF9515d4c09325", "0xeD119E4B4a3f4Ab8AAe2DC2D2FdF9515d4c09325"];
      const BadgeMinter = await ethers.getContractFactory("BadgeMinter");
      console.log("Artists", Artists);
      const badge = firstArtistBadge;
      // const uploadedbadge = await ipfs.add(JSON.stringify(badge));
      await BadgeMinter.endSeason(Artists)
    })

    it("Top Subscribers received their price", async function() {
      
    })

    it("all season participants received their badges", async function() {
      
    })

    // it("Subscribers who reimburse their battle pass reiceived their badges", async function() {
      
    // })

    // it("Subscribers who made money reiceived their unique badges with name and amount", async function() {
      
    // })

  });

  //   describe("setPurpose()", function () {
  //     it("Should be able to set a new purpose", async function () {
  //       const newPurpose = "Test Purpose";

  //       await myContract.setPurpose(newPurpose);
  //       expect(await myContract.purpose()).to.equal(newPurpose);
  //     });
  //   });
  // });

});

// minter badge top artists (1, 2, 3 - top10)
// minter badge top suscribers (1, 2, 3 - top10)

// minter badge 100th battlepass buyers of the season
// minter badge suscribers participants

// minter badge suscribers who reimburse the battle pass
// minter badge suscribers who gain money with the money amount
