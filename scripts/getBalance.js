const hre = require("hardhat");
require("dotenv").config();

const { ACCOUNT_ADDRESS, CONTRACT_ADDRESS } = process.env;

const contractOnAmoy = "0x5F9618D443c6303b471DE0dceDc0cF2EFf17635D";

async function main() {
  const PolygonNFT = await hre.ethers.getContractFactory("PolygonNFT");
  const nftContractOnAmoy = await PolygonNFT.attach(contractOnAmoy);

  const balance = await nftContractOnAmoy.balanceOf(ACCOUNT_ADDRESS);

  const [signer] =   await hre.ethers.getSigners();

  console.log(`
    Your PolygonNFT Balance on
    ${contractOnAmoy}
    is: ${balance.toString()}
    `);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});