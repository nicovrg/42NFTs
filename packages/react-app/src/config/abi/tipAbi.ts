export const abi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_subscriptionPrice',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_maxSubscription',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_delay',
        type: 'uint256'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256'
      }
    ],
    name: 'Receive',
    type: 'event'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    name: 'artists',
    outputs: [
      {
        internalType: 'uint256',
        name: 'balance',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true
  },
  {
    inputs: [],
    name: 'endOfPool',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true
  },
  {
    inputs: [],
    name: 'firstArtist',
    outputs: [
      {
        internalType: 'address',
        name: 'artist',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'balance',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true
  },
  {
    inputs: [],
    name: 'globalBalance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true
  },
  {
    inputs: [],
    name: 'maxSubscription',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true
  },
  {
    inputs: [],
    name: 'secondArtist',
    outputs: [
      {
        internalType: 'address',
        name: 'artist',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'balance',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    name: 'subscribers',
    outputs: [
      {
        internalType: 'bool',
        name: 'alreadySubscribed',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true
  },
  {
    inputs: [],
    name: 'subscriptionPrice',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true
  },
  {
    inputs: [],
    name: 'thirdArtist',
    outputs: [
      {
        internalType: 'address',
        name: 'artist',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'balance',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true
  },
  {
    stateMutability: 'payable',
    type: 'receive',
    payable: true
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_artistAddress',
        type: 'address'
      }
    ],
    name: 'tipArtist',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getArtistList',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'artist',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'rank',
            type: 'uint256'
          }
        ],
        internalType: 'struct Tip.artistTipped[]',
        name: '',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true
  },
  {
    inputs: [],
    name: 'getArtistCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_artistAddress',
        type: 'address'
      }
    ],
    name: 'getTippersList',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]'
      }
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_artistAddress',
        type: 'address'
      }
    ],
    name: 'getArtistBalance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true
  },
  {
    inputs: [],
    name: 'getGlobalBalance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true
  },
  {
    inputs: [],
    name: 'getEndOfPool',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true
  },
  {
    inputs: [],
    name: 'alreadySubscribe',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_artistAddress',
        type: 'address'
      }
    ],
    name: 'alreadyTip',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true
  },
  {
    inputs: [],
    name: 'canTip',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true
  },
  {
    inputs: [],
    name: 'withdrawTips',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
    payable: true
  }
];

export const address = '0x2eEe4e1b444Fa3EE95eC5be171566F5279367dc3';
