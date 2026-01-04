Simple Mapping Example (Solidity)

A beginner-friendly Solidity smart contract that demonstrates how mappings work using both
uint keys and address keys.

This project is built to understand state storage, msg.sender, and basic contract deployment using Hardhat.
--------------------
What This Contract Does

Stores a bool value against a number (uint)

Stores a bool value against an Ethereum address

Allows anyone to:

Set a value for a number

Mark their own wallet address as true
------------------------
Core Concepts Covered

Solidity mapping

Public state variables

msg.sender

Function calls and state updates

Hardhat deployment flow
----------------------------
Smart Contract
mapping(uint => bool) public mymapping;
mapping(address => bool) public myaddressmapping;

Functions

setvalue(uint _index)
Sets true for a given number

muaddresstovalue()
Sets true for the caller’s wallet address
-----------------------------
Deployment (Hardhat)
Deploy Script
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
--------------------------
How to Run Locally
Install dependencies
npm install

Start local blockchain
npx hardhat node

Deploy contract
npx hardhat run scripts/deploy.js --network localhost
-----------------------------
How to Interact

Call setvalue(5) to store true for key 5

Call muaddresstovalue() to store true for your wallet address

Read values directly using the public mappings
-------------------------------
Tech Stack

Solidity ^0.8.20

Hardhat

Ethers.js

Node.js
--------------------------------
Learning Goal

This project is part of a daily smart contract building journey
focused on mastering Solidity fundamentals by shipping small, clean contracts.
--------------------------------
Author

Made by Sidheshwar
-----------------------------
License

MIT (or as specified in the LICENSE file)