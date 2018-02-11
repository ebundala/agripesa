import kilimoCoin from "./json/kilimoCoin.json"
import Web3 from 'web3';
let contract = require("truffle-contract");
// Step 1: Get a contract into my application
//let json = require("./json/kilimoCoin.json");
//import myContract_artifacts from './solidity/kilimoCoin.sol';
// Step 2: Turn that contract into an abstraction I can use

export const txOtions={
    from: "0x908d98bc8d5929cf236ce216a54838f681eef5cd",
    gas:9000000,
    // gasPrice:0.0009,
    //value: ...
}
const Contract = contract(kilimoCoin);
Contract.defaults(txOtions);
// Step 3: Provision the contract with a web3 provider
Contract.setProvider(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));

// Step 4: Use the contract!


export default Contract;
