// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
var depBank, depMycoin, depReword;

async function main() {
  const bank =await ethers.getContractFactory("Bank");
  const mycoin =await ethers.deployContract("MYCOIN");
  const reword =await ethers.deployContract("REWARD");

  depMycoin = await mycoin.getAddress();
  depReword = await reword.getAddress();
  depBank = await bank.deploy(depMycoin, depReword);

  console.log("bank : ", depBank.target);
  console.log("mycoin : ", depMycoin);
  console.log("reword : ", depReword);

  process.exit(0);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
.catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
