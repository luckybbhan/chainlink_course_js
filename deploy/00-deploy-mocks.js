const { network } = require("hardhat");
const {
  developmentChains,
  DECIMAL,
  INITIAL_ANSWER,
} = require("../helper-hardhat-config");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  if (developmentChains.includes(network.name)) {
    log("local network detected!Deploying mocks..");
    await deploy("MockV3Aggregator", {
      contract: "MockV3Aggregator",
      from: deployer,
      args: [DECIMAL, INITIAL_ANSWER],
      log: true,
    });
    console.log("Mocks deployed!");
    console.log("---------------------------");
  }
};

module.exports.tags = ["all", "mocks"];
