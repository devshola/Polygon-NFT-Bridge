const hre = require("hardhat");

async function main() {

  const polygonNFT = await hre.ethers.deployContract("PolygonNFT");
  const [signer] =   await hre.ethers.getSigners();

  console.log(`
    ${signer.address} 
    deploys PolygonNFT contract to 
    address: ${await polygonNFT.getAddress()}
    `);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});