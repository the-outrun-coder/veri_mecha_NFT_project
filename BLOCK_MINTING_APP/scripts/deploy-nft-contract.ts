const hre = require("hardhat");
const { ethers } = hre;

// - UTILS
import { createFigureConverterWith, generateContract } from "block-project-utils";

// - CONFIG
import createNFTcontractConfigWith, { targetContractKey } from '../config/deployment/contract-nft';

const convert = createFigureConverterWith(ethers);
const nftConfig = createNFTcontractConfigWith(convert);

async function main() {
  const nftContract = await generateContract({ ethers, targetContractKey, nftConfig });
  await nftContract.deployed();

  console.log(`\n NFT CONTRACT DEPLOYED TO: ${nftContract.address}\n`)
}

main().catch((error) => {
  console.error(`(!) Error on deployment script (!)`, error);
  process.exitCode = 1;
});