require("@nomicfoundation/hardhat-toolbox");
const secret = require("./secret.json")
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks : {
    sepolia : {
      accounts : [secret.account],
      url : secret.apiKey
    }
  }
};
