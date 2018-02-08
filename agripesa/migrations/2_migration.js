var Migrations = artifacts.require("./kilimoCoin.sol");

module.exports = function(deployer) {
    deployer.deploy(Migrations);
};
