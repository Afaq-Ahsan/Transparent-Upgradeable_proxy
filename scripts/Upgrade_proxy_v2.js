const {ethers,upgrade} = require("hardhat");
const proxy = "0x2858d59E101899C292eD0EF1Aa0e1dea682e771A"; //address where proxy is deployed 
async function main() {
    
    const Box_v2 = await ethers.getContractFactory("Box_v2");
    await upgrades.upgradeProxy(proxy,Box_v2);
    console.log("Box v1 is upgraded to Box v2");    

}

main();