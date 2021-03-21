pragma solidity >=0.6.0 <0.7.0;
// pragma experimental ABIEncoderV2
//SPDX-License-Identifier: MIT

//import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
//learn more: https://docs.openzeppelin.com/contracts/3.x/erc721

// GET LISTED ON OPENSEA: https://testnets.opensea.io/get-listed/step-two

contract BadgeMinter is ERC721, Ownable {

  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  enum BadgeType {
    First_Creator,
    Second_Creator,
    Third_Creator
  }

  struct BadgeInfo {
    string name;
    string image;
    string description;
    string tokenURI;
    address ownerAdress;
  }

  mapping(BadgeType => BadgeInfo) public badgeMap;

  constructor() public ERC721("BadgeMinter", "BM") {
    _setBaseURI("https://ipfs.io/ipfs/");
  }

  function setBadgeInformation() public returns (bool) {
    badgeMap[BadgeType.First_Creator].name = "1st Creator";
    badgeMap[BadgeType.First_Creator].image = "https://www.freeiconspng.com/uploads/badge-icon-png-22.png";
    badgeMap[BadgeType.First_Creator].description = "You're the first creator of the season 1!! Congrats :)";
    badgeMap[BadgeType.First_Creator].tokenURI = "https://ipfs.io/ipfs/QmZnQnWQSZwWyC3vW91pk1FEq8K7JSDGFwjaBTG8pKReiK/";

    badgeMap[BadgeType.Second_Creator].name = "2nd Creator";
    badgeMap[BadgeType.Second_Creator].image = "https://www.freeiconspng.com/uploads/badge-icon-png-22.png";
    badgeMap[BadgeType.Second_Creator].description = "You're the second creator of the season 1!! Congrats :)";
    badgeMap[BadgeType.Second_Creator].tokenURI = "https://ipfs.io/ipfs/QmZnQnWQSZwWyC3vW91pk1FEq8K7JSDGFwjaBTG8pKReiK/";

    badgeMap[BadgeType.Third_Creator].name = "3rd Creator";
    badgeMap[BadgeType.Third_Creator].image = "https://www.freeiconspng.com/uploads/badge-icon-png-22.png";
    badgeMap[BadgeType.Third_Creator].description = "You're the third creator of the season 1!! Congrats :)";
    badgeMap[BadgeType.Third_Creator].tokenURI = "https://ipfs.io/ipfs/QmZnQnWQSZwWyC3vW91pk1FEq8K7JSDGFwjaBTG8pKReiK/";
  }

  function mintBadge(address to, BadgeType badgeId) public returns (uint256) {
      _tokenIds.increment();
      uint256 id = _tokenIds.current();

      badgeMap[badgeId].ownerAdress = to;

      _mint(to, id);
      _setTokenURI(id, badgeMap[badgeId].tokenURI);

      return id;
  }

  function mintTopCreators(address[] memory topCreator) public returns (uint256) {
    mintBadge(topCreator[2], BadgeType.First_Creator);
    mintBadge(topCreator[1], BadgeType.Second_Creator);
    mintBadge(topCreator[0], BadgeType.Third_Creator);
  }

  function endSeason(address[] memory topCreator) public returns (bool) {
    setBadgeInformation();
    mintTopCreators(topCreator);
    return true;
  }
}


