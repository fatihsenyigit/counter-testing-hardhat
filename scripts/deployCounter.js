const hre = require("hardhat");

async function main (params) {
    const Counter = await hre.ethers.getContractFactory("Counter");
    const counter = await Counter.deploy(5);
    console.log(counter.target);
}

main(); 