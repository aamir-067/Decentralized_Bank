# Decentralized Bank Project


This is a decentralized bank project where you can stake MYTOKEN (MTK) tokens and earn a reward at the speed of 5% daily of the total tokens spent in the form of REWARD (RWD) tokens. Both tokens are created by the author, and you can change the token in the Hardhat directory.


The project is almost done but needs some modifications for better performance. It uses React.js, Ethers.js, Tailwind CSS, Hardhat, Solidity, and Redux Toolkit for state management. The token creation uses the OpenZeppelin library for contract creation, and the contracts are currently deployed on the Ethereum test network Sepolia.

![this is hero image of the project](/public/hero.png)

## Features:

- Stake MTK tokens to earn RWD tokens
- Unstake MTK tokens at any time
- View your staked MTK tokens and earned RWD tokens
- Withdraw your RWD tokens at any time


## Getting Started:

- Clone the repository: `git clone https://github.com/your-username/decentralized-bank-project.git`
- Install the dependencies: `npm install`
- Start the development server: npm start
- Open your browser and navigate to http://localhost:3000


## Usage:

- To stake MTK tokens, click the "Stake" button and enter the amount of MTK you want to stake.
- To unstake MTK tokens, click the "Withdraw" button and enter the amount of MTK you want to unstake.
- To view your staked MTK tokens and earned RWD tokens, click the "My Account" button. (not implemented yet)


![this is withdraw page image of the project](/public/other.png)

## Deployment:

- To deploy the contracts to the Ethereum test network Sepolia, run the following command: `npx hardhat deploy --network sepolia`

### `Note : `

I already deployed the contracts on the sepolia testnet but if you want to modify the contracts and then want to deploy the contracts you can di this. but make sure you entered the url and the acc private key i n the hardhat.config.js

## Contributing:

1. Fork the repository.
2. Make your changes.
3. Commit your changes and push them to your fork.
4. Create a pull request.


## License:

This project is licensed under the MIT License.



