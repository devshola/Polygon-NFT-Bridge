const hre = require("hardhat");
require("dotenv").config();

const { CONTRACT_ADDRESS } = process.env;

async function main() {
  const PolygonNFT = await hre.ethers.getContractFactory("PolygonNFT");
  const polygonNFT = PolygonNFT.attach(CONTRACT_ADDRESS);

  console.log(await polygonNFT.promptDescription());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});