import kilimoCoin from "./json/kilimoCoin.json"
import Web3 from 'web3';
let contract = require("truffle-contract");
// Step 1: Get a contract into my application
//let json = require("./json/kilimoCoin.json");
//import myContract_artifacts from './solidity/kilimoCoin.sol';
// Step 2: Turn that contract into an abstraction I can use
export let contractAddress//="0xe8fc6a832abcb5869ba498f4efe0dbe53add9243";
let ac="0x1b977c7eceab181b9f0c80ab334fc84965c198d0";
export const txOtions={
    from: ac,//"0xca1d3353e81873425339c45dd1e8e135248ab301",
    gas:900000000,
    // gasPrice:0.0009,
    //value: ...
}
const Contract = contract(kilimoCoin);
Contract.defaults(txOtions);
// Step 3: Provision the contract with a web3 provider
Contract.setProvider(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));

// Step 4: Use the contract!
export default Contract;
