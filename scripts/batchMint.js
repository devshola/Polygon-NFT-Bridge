const hre = require("hardhat");
require("dotenv").config();

const { ACCOUNT_ADDRESS, CONTRACT_ADDRESS } = process.env;

async function main() {
  const PolygonNFT = await hre.ethers.getContractFactory("PolygonNFT");
  const polygonNFT = PolygonNFT.attach(CONTRACT_ADDRESS);

  const mintTx = await polygonNFT.safeMint(5);
  await mintTx.wait();

  console.log(`
    ${await polygonNFT.balanceOf(ACCOUNT_ADDRESS)} PolygonNFTs was minted to 
    ${ACCOUNT_ADDRESS}
    `);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
