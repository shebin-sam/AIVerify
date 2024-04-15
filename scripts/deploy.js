const { ethers } = require("hardhat");

async function main() {
  const DataVal = await ethers.getContractFactory("DataVal");
  const dataVal = await DataVal.deploy();
    console.log(dataVal);
  console.log("DataVal contract deployed to address:", dataVal.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
