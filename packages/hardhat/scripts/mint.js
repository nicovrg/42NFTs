/* eslint no-use-before-define: "warn" */
const fs = require("fs");
const chalk = require("chalk");
const { config, ethers} = require("hardhat");
const { utils } = require("ethers");
const R = require("ramda");
const ipfsAPI = require('ipfs-http-client');
const ipfs = ipfsAPI({host: 'ipfs.infura.io', port: '5001', protocol: 'https' })

// ipfs-http-client 
// const uploadedbadge = await ipfs.add(ipfsAPI.urlSource("https://www.freeiconspng.com/uploads/badge-icon-png-22.png"));

// const image = require("./badge1.png");
// const {Season1} = require("../nft/SeasonOne");
// var path = require('path');
// var updater = require( path.resolve( __dirname, "./updater.js" ) );

const delayMS = 1000 //sometimes xDAI needs a 6000ms break lol 😅


const main = async () => {

  const badge = {
    "description": "Badge for participation season 1",
    // "external_url": "https://austingriffith.com/portfolio/paintings/", // <-- this can link to a page for the specific file too
    "image": "https://www.freeiconspng.com/uploads/badge-icon-png-22.png",
    "name": "Season 1 veteran",
    "attributes": [
      {
        "badge_type": "Season 1 veteran",
        "value": "test"
      }
    ]
  }

  // https://www.freeiconspng.com/uploads/badge-icon-png-22.png
  // const toAddress = "0xD75b0609ed51307E13bae0F9394b5f63A7f8b6A1"
  // const toAddress = "0x1A94af087316baD6ba2b5fd207A0ceDAEBc5dD23"
  const toAddress = "0xeD119E4B9a3f4Ab8AAe2DC2D2FdF9515d4c09325";
  const BadgeMinter = await ethers.getContractAt('BadgeMinter', fs.readFileSync("./artifacts/BadgeMinter.address").toString())
  const season1Member = 10;

  console.log("\n\n 🎫 Minting to " + toAddress + "...\n");

  for (let i = 0; i < season1Member; i++) {

    console.log("\n\nUploading badge " + i + " ...\n\n")
      
    const uploadedbadge = await ipfs.add(ipfsAPI.urlSource("https://www.freeiconspng.com/uploads/badge-icon-png-22.png"));
  
    // console.log("uploadedbadge = ", uploadedbadge);
    console.log("Minting badge with IPFS hash (" + uploadedbadge.path + ")")
    await BadgeMinter.mintBadge(toAddress, uploadedbadge.path, {gasLimit:400000})
    console.log("WHAT IS MINTED ?\n", uploadedbadge);
  }


  // "https://ipfs.io/ipfs/"
  // "https://cloudflare-ipfs.com/ipfs/QmbFMke1KXqnYyBBWxB74N4c5SBnJMVAiMNRcGu6x1AwQH"

  await sleep(delayMS)

  console.log("Transferring Ownership of BadgeMinter to " + toAddress + "...")

  await BadgeMinter.transferOwnership(toAddress)

  await sleep(delayMS)

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  // front => 
  // |------------------------------------------------------------|
  // |                     FEED PAGE                              |
  // |                                                            |
  // |    -----------------------------------------------         |
  // |    |                                             |         |
  // |    | |---------|   username                      |         |
  // |    | |         |   address                       |         |
  // |    | |         |   description nft               |         |
  // |    | |---------|   link to artist page           |         |
  // |    |                                             |         |
  // |    |                TIP   LINK                   |         |
  // |    -----------------------------------------------         |
  // |                                                            |
  // |                                                            |
  // |    -----------------------------------------------         |
  // |    |                                             |         |
  // |    | |---------|   username                      |         |
  // |    | |         |   address                       |         |
  // |    | |         |   description nft               |         |
  // |    | |---------|   link to artist page           |         |
  // |    |                                             |         |
  // |    |                TIP   LINK                   |         |
  // |    -----------------------------------------------         |
  // |                                                            |
  // |                                                            |
  // |    -----------------------------------------------         |
  // |    |                                             |         |
  // |    | |---------|   username                      |         |
  // |    | |         |   address                       |         |
  // |    | |         |   description nft               |         |
  // |    | |---------|   link to artist page           |         |
  // |    |                                             |         |
  // |    |                TIP   LINK                   |         |
  // |    -----------------------------------------------         |
  // |                                                            |
  // |                     PAGES                                  |
  // |------------------------------------------------------------|

  // const badge = {
  //   "description": "Badge for participation season 1",
  //   // "external_url": "https://austingriffith.com/portfolio/paintings/",// <-- this can link to a page for the specific file too
  //   "image": "https://www.freeiconspng.com/uploads/badge-icon-png-22.png",
  //   "name": "Season 1 veteran",
  //   "attributes": [
  //     {
  //       "badge_type": "Season 1 veteran",
  //       "value": "test"
  //     }
  //   ]
  // }

  // const buffalo = {
  //   "description": "It's actually a bison?",
  //   "external_url": "https://austingriffith.com/portfolio/paintings/",// <-- this can link to a page for the specific file too
  //   "image": "https://austingriffith.com/images/paintings/buffalo.jpg",
  //   "name": "Buffalo",
  //   "attributes": [
  //      {
  //        "trait_type": "BackgroundColor",
  //        "value": "green"
  //      },
  //      {
  //        "trait_type": "Eyes",
  //        "value": "googly"
  //      },
  //      {
  //        "trait_type": "Stamina",
  //        "value": 42
  //      }
  //   ]
  // }
  // console.log("Uploading buffalo...")
  const uploaded = await ipfs.add(JSON.stringify(buffalo))

  // console.log("Minting buffalo with IPFS hash ("+uploaded.path+")")
  // await BadgeMinter.mintItem(toAddress,uploaded.path,{gasLimit:400000})

  // await sleep(delayMS)

  // const zebra = {
  //   "description": "What is it so worried about?",
  //   "external_url": "https://austingriffith.com/portfolio/paintings/",// <-- this can link to a page for the specific file too
  //   "image": "https://austingriffith.com/images/paintings/zebra.jpg",
  //   "name": "Zebra",
  //   "attributes": [
  //      {
  //        "trait_type": "BackgroundColor",
  //        "value": "blue"
  //      },
  //      {
  //        "trait_type": "Eyes",
  //        "value": "googly"
  //      },
  //      {
  //        "trait_type": "Stamina",
  //        "value": 38
  //      }
  //   ]
  // }
  // console.log("Uploading zebra...")
  // const uploadedzebra = await ipfs.add(JSON.stringify(zebra))

  // console.log("Minting zebra with IPFS hash ("+uploadedzebra.path+")")
  // await BadgeMinter.mintItem(toAddress,uploadedzebra.path,{gasLimit:400000})

  // await sleep(delayMS)

  // const rhino = {
  //   "description": "What a horn!",
  //   "external_url": "https://austingriffith.com/portfolio/paintings/",// <-- this can link to a page for the specific file too
  //   "image": "https://austingriffith.com/images/paintings/rhino.jpg",
  //   "name": "Rhino",
  //   "attributes": [
  //      {
  //        "trait_type": "BackgroundColor",
  //        "value": "pink"
  //      },
  //      {
  //        "trait_type": "Eyes",
  //        "value": "googly"
  //      },
  //      {
  //        "trait_type": "Stamina",
  //        "value": 22
  //      }
  //   ]
  // }
  // console.log("Uploading rhino...")
  // const uploadedrhino = await ipfs.add(JSON.stringify(rhino))

  // console.log("Minting rhino with IPFS hash ("+uploadedrhino.path+")")
  // await BadgeMinter.mintItem(toAddress,uploadedrhino.path,{gasLimit:400000})

  // await sleep(delayMS)

  // const fish = {
  //   "description": "Is that an underbyte?",
  //   "external_url": "https://austingriffith.com/portfolio/paintings/",// <-- this can link to a page for the specific file too
  //   "image": "https://austingriffith.com/images/paintings/fish.jpg",
  //   "name": "Fish",
  //   "attributes": [
  //      {
  //        "trait_type": "BackgroundColor",
  //        "value": "blue"
  //      },
  //      {
  //        "trait_type": "Eyes",
  //        "value": "googly"
  //      },
  //      {
  //        "trait_type": "Stamina",
  //        "value": 15
  //      }
  //   ]
  // }
  // console.log("Uploading fish...")
  // const uploadedfish = await ipfs.add(JSON.stringify(fish))

  // console.log("Minting fish with IPFS hash ("+uploadedfish.path+")")
  // await BadgeMinter.mintItem(toAddress,uploadedfish.path,{gasLimit:400000})


  // await sleep(delayMS)

  // const flamingo = {
  //   "description": "So delicate.",
  //   "external_url": "https://austingriffith.com/portfolio/paintings/",// <-- this can link to a page for the specific file too
  //   "image": "https://austingriffith.com/images/paintings/flamingo.jpg",
  //   "name": "Flamingo",
  //   "attributes": [
  //      {
  //        "trait_type": "BackgroundColor",
  //        "value": "black"
  //      },
  //      {
  //        "trait_type": "Eyes",
  //        "value": "googly"
  //      },
  //      {
  //        "trait_type": "Stamina",
  //        "value": 6
  //      }
  //   ]
  // }
  // console.log("Uploading flamingo...")
  // const uploadedflamingo = await ipfs.add(JSON.stringify(flamingo))

  // console.log("Minting flamingo with IPFS hash ("+uploadedflamingo.path+")")
  // await BadgeMinter.mintItem(toAddress,uploadedflamingo.path,{gasLimit:400000})

  // const godzilla = {
  //   "description": "Raaaar!",
  //   "external_url": "https://austingriffith.com/portfolio/paintings/",// <-- this can link to a page for the specific file too
  //   "image": "https://austingriffith.com/images/paintings/godzilla.jpg",
  //   "name": "Godzilla",
  //   "attributes": [
  //      {
  //        "trait_type": "BackgroundColor",
  //        "value": "orange"
  //      },
  //      {
  //        "trait_type": "Eyes",
  //        "value": "googly"
  //      },
  //      {
  //        "trait_type": "Stamina",
  //        "value": 99
  //      }
  //   ]
  // }
  // console.log("Uploading godzilla...")
  // const uploadedgodzilla = await ipfs.add(JSON.stringify(godzilla))

  // console.log("Minting godzilla with IPFS hash ("+uploadedgodzilla.path+")")
  // await BadgeMinter.mintItem(toAddress,uploadedgodzilla.path,{gasLimit:400000})

  /*
  console.log("Minting zebra...")
  await BadgeMinter.mintItem("0xD75b0609ed51307E13bae0F9394b5f63A7f8b6A1","zebra.jpg")
  */

  //const secondContract = await deploy("SecondContract")

  // const exampleToken = await deploy("ExampleToken")
  // const examplePriceOracle = await deploy("ExamplePriceOracle")
  // const smartContractWallet = await deploy("SmartContractWallet",[exampleToken.address,examplePriceOracle.address])

  /*
  //If you want to send value to an address from the deployer
  const deployerWallet = ethers.provider.getSigner()
  await deployerWallet.sendTransaction({
    to: "0x34aA3F359A9D614239015126635CE7732c18fDF3",
    value: ethers.utils.parseEther("0.001")
  })
  */

  /*
  //If you want to send some ETH to a contract on deploy (make your constructor payable!)
  const yourContract = await deploy("YourContract", [], {
  value: ethers.utils.parseEther("0.05")
  });
  */

  /*
  //If you want to link a library into your contract:
  // reference: https://github.com/austintgriffith/scaffold-eth/blob/using-libraries-example/packages/hardhat/scripts/deploy.js#L19
  const yourContract = await deploy("YourContract", [], {}, {
   LibraryName: **LibraryAddress**
  });
  */

};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});
