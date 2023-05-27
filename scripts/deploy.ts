import { ethers, run } from "hardhat";
import { HardhatRuntimeEnvironment } from "hardhat/types";

async function main() {
  const NFTMarketplace = await ethers.getContractFactory("NFTMarketplace");
  const marketplace = await NFTMarketplace.deploy();

  await marketplace.deployed();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
