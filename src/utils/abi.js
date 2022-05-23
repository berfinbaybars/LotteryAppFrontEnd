const abi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amnt",
          "type": "uint256"
        }
      ],
      "name": "depositTL",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amnt",
          "type": "uint256"
        }
      ],
      "name": "withdrawTL",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "tlBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "random",
          "type": "uint256"
        }
      ],
      "name": "attemptBuying",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "ticketno",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "rnd_number",
          "type": "uint256"
        }
      ],
      "name": "revealRndNumber",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "lottery_no",
          "type": "uint256"
        }
      ],
      "name": "getLastOwnedTicketNo",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "status",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "i",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "lottery_no",
          "type": "uint256"
        }
      ],
      "name": "getIthOwnedTicketNo",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "status",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "unixtimeinweek",
          "type": "uint256"
        }
      ],
      "name": "getLotteryNo",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "lottery_no",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "lottery_no",
          "type": "uint256"
        }
      ],
      "name": "getTotalLotteryMoneyCollected",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "ticket_no",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "lottery_no",
          "type": "uint256"
        }
      ],
      "name": "collectTicketRefund",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "timeSinceStart",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getCurrentStep",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "ticket_no",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "lottery_no",
          "type": "uint256"
        }
      ],
      "name": "checkIfTicketWon",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "ticket_no",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "lottery_no",
          "type": "uint256"
        }
      ],
      "name": "collectTicketPrize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "i",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "lottery_no",
          "type": "uint256"
        }
      ],
      "name": "getIthWinningTicket",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "ticket_no",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
]

  export default abi;