const {ethers,upgrades} = require("hardhat");

async function main(){

 const Box_v1 = await ethers.getContractFactory("Box_v1");
 const box_v1 = await upgrades.deployProxy(Box_v1,[22],{//this line mean Box_v1 deploy and passing argument in initializer function which is 22
  initializer : 'initialize',
  //             initialize is the function which is used as constructor in upgradeable contracts
 });

 const a = await box_v1.deployed();

 console.log("#################### : ",a);
 console.log("Box deployed to ",box_v1.address);

}
main();