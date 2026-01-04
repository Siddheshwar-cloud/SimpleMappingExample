const hre = require("hardhat");

async function main() {

    const SimpleMappingExample = await hre.ethers.getContractFactory(
        "SimpleMappingExample"
    );


    const simpleMappingExample = await SimpleMappingExample.deploy();

    await simpleMappingExample.waitForDeployment();

    console.log(
        "SimpleMappingExample deployed to:",
        await simpleMappingExample.getAddress()
    );
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
