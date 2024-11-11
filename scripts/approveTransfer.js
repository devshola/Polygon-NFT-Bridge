const hre = require("hardhat");
require("dotenv").config();
const fxERC721RootContractABI = require("../ERC721FxRootContractABI.json");

const { ACCOUNT_ADDRESS, CONTRACT_ADDRESS } = process.env;

fxERC721RootAddress = "0x9e688939cb5d484e401933d850207d6750852053";

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  const PolygonNFT = await hre.ethers.getContractFactory("PolygonNFT");

  const polygonNFT = await PolygonNFT.attach(CONTRACT_ADDRESS);

  // Approve NFTs for transfer
  const approveTx = await polygonNFT
    .connect(deployer)
    .setApprovalForAll(fxERC721RootAddress, true);

  await approveTx.wait();

  console.log("Approval completed for the NFTs");

  const fxRootContract = await hre.ethers.getContractAt(
    fxERC721RootContractABI,
    fxERC721RootAddress
  );

  // Deposit NFTs to Polygon bridge
  for (let i = 0; i < 5; i++) {
    const depositTx = await fxRootContract
      .connect(deployer)
      .deposit(CONTRACT_ADDRESS, ACCOUNT_ADDRESS, i, "0x6566");
    await depositTx.wait();

    console.log(`${i + 1} NFT transfterred to Polygon Amoy successfully`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
