
const hre = require("hardhat");

async function main() {
  const Flashloan = await hre.ethers.getContractFactory("Flashloan");
  const flashloan = await Flashloan.deploy('0xc4dCB5126a3AfEd129BC3668Ea19285A9f56D15D');

  await flashloan.deployed();
  console.log("flash loan contract: ", flashloan.address);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
