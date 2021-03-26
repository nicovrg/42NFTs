pragma solidity 0.6.7;
pragma experimental ABIEncoderV2;
//SPDX-License-Identifier: MIT

contract BadgeMinter { function endSeason(address[] memory) public returns(bool) {} }

contract Tip {
  address public badgeMinterAddress;
  bool public badgeMinted;
  uint public subscriptionPrice;
  uint public maxSubscription;
  uint public endOfPool;

  struct TopArtist {
    address artist;
    uint balance;
  }
  TopArtist public firstArtist;
  TopArtist public secondArtist;
  TopArtist public thirdArtist;

  struct artistTipped {
    address artist;
    uint rank;
  }

  struct subscriber {
    mapping (address => bool) artistsTipped;
    artistTipped[] artistsList;
    bool alreadySubscribed;
  }

  struct artist {
    address[] tippers;
    uint balance;
  }

  mapping (address => subscriber) public subscribers;
  mapping (address => artist) public artists;
  uint public globalBalance;

  event Receive(uint value);

  constructor(uint _subscriptionPrice, uint _maxSubscription, uint _delay, address _badgeMinterAddress) public {
    subscriptionPrice = _subscriptionPrice;
    maxSubscription = _maxSubscription;
    endOfPool = now + _delay;
    badgeMinterAddress = _badgeMinterAddress;
  }

  receive() external payable {
    require(msg.value >= subscriptionPrice, "Not enough money!");
    require(subscribers[msg.sender].alreadySubscribed == false, "Already subscribed");
    subscribers[msg.sender].alreadySubscribed = true;
    globalBalance += msg.value;
    emit Receive(msg.value);
  }

  function checkAndSetTopArtists(uint _balance, address _artistAddress) internal {
    if (_balance > thirdArtist.balance) {
      if (_balance > secondArtist.balance) {
        if (_balance > firstArtist.balance) {
          TopArtist memory tmpFirstArtist;
          TopArtist memory tmpSecondArtist;
          tmpFirstArtist = firstArtist;
          tmpSecondArtist = secondArtist;
          firstArtist.balance = _balance;
          firstArtist.artist = _artistAddress;
          secondArtist = tmpFirstArtist;
          thirdArtist = tmpSecondArtist;          
        } else {
          TopArtist memory tmpSecondArtist;
          tmpSecondArtist = secondArtist;
          secondArtist.balance = _balance;
          secondArtist.artist = _artistAddress;
          thirdArtist = tmpSecondArtist;
        }
      } else {
        thirdArtist.balance = _balance;
        thirdArtist.artist = _artistAddress;
      }
    }
  }

  function tipArtist(address _artistAddress) public {
    require(subscribers[msg.sender].alreadySubscribed == true, "Subscribe first!");
    require(subscribers[msg.sender].artistsList.length < maxSubscription, "No tips left!");
    require(subscribers[msg.sender].artistsTipped[_artistAddress] == false, "Already tipped");

    artists[_artistAddress].tippers.push(msg.sender);
    artists[_artistAddress].balance += subscriptionPrice / maxSubscription;
    checkAndSetTopArtists(artists[_artistAddress].balance, _artistAddress);
    subscribers[msg.sender].artistsTipped[_artistAddress] = true;
    subscribers[msg.sender].artistsList.push(artistTipped(_artistAddress, artists[_artistAddress].tippers.length));
  }

  function getArtistList() public view returns(artistTipped[] memory) {
    return (subscribers[msg.sender].artistsList);
  }

  function getArtistCount() public view returns(uint) {
    return (subscribers[msg.sender].artistsList.length);
  }

  function getTippersList(address _artistAddress) public view returns(address[] memory) {
    return (artists[_artistAddress].tippers);
  }

  function getArtistBalance(address _artistAddress) public view returns(uint) {
    return (artists[_artistAddress].balance);
  }

  function getGlobalBalance() public view returns(uint) {
    return (globalBalance);
  }

  function getEndOfPool() public view returns(uint) {
    return (endOfPool - now);
  }

  function withdrawTips() external payable {
    require(artists[msg.sender].balance > 0, "No tips received :/");
    require(now > endOfPool, "Pool isn't finished yet!");
    msg.sender.transfer(artists[msg.sender].balance);
    artists[msg.sender].balance = 0;
  }

  function endOfSeason() public {
    require(badgeMinted == false, "The badge have already been minted!");
    require(now > endOfPool, "Pool isn't finished yet!");
    badgeMinted = true;
    BadgeMinter bm = BadgeMinter(badgeMinterAddress);
    address[] storage ret;
    ret.push(thirdArtist.artist);
    ret.push(secondArtist.artist);
    ret.push(firstArtist.artist);
    bm.endSeason(ret);
  }
}