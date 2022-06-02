import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import { config as dotenvConfig } from "dotenv";
import { Wallet } from "ethers";
import "hardhat-gas-reporter";
import { HardhatUserConfig } from "hardhat/config";
import { NetworkUserConfig } from "hardhat/types";
import { resolve } from "path";
import "solidity-coverage";

import "./tasks/accounts";

dotenvConfig({ path: resolve(__dirname, "./.env") });

// Ensure that we have all the environment variables we need.
let mnemonic = process.env.MNEMONIC || "";
const privatekey = process.env.PRIVATEKEY || "";
let wallet;
if (mnemonic) {
  wallet = Wallet.fromMnemonic(mnemonic);
} else if (privatekey) {
  wallet = new Wallet(privatekey);
} else {
  console.warn("Please set MNEMONIC or PRIVATEKEY in a .env file.");
  mnemonic = Wallet.createRandom().mnemonic.phrase;
  console.warn("RANDOM MNEMONIC used: " + mnemonic);
  wallet = Wallet.fromMnemonic(mnemonic);
  console.log("Using wallet with address: " + wallet.address);
}

const moralisApiKey: string | undefined = process.env.MORALIS_API_KEY;
if (!moralisApiKey) {
  throw new Error("Please set your MORALIS_API_KEY in a .env file");
}

const alchemyApiKey: string | undefined = process.env.ALCHEMY_API_KEY;
if (!alchemyApiKey) {
  throw new Error("Please set your ALCHEMY_API_KEY in a .env file");
}

const chainIds = {
  mainnet: 137,
  mumbai: 80001,
};

function getChainConfig(chain: keyof typeof chainIds): NetworkUserConfig {
  return {
    accounts: {
      count: 10,
      mnemonic,
      path: "m/44'/60'/0'/0",
    },
    chainId: chainIds[chain],
    url: `https://speedy-nodes-nyc.moralis.io/${moralisApiKey}/polygon/${chain}`,
  };
}

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  etherscan: {
    apiKey: {
      polygon: process.env.POLYGONSCAN_API_KEY,
      polygonMumbai: process.env.POLYGONSCAN_API_KEY,
    },
  },
  gasReporter: {
    currency: "USD",
    enabled: process.env.REPORT_GAS ? true : false,
    excludeContracts: [],
    src: "./contracts",
  },
  networks: {
    hardhat: {
      accounts: {
        mnemonic,
      },
      forking: { url: `https://polygon-mumbai.g.alchemy.com/v2/${alchemyApiKey}` },
    },
    "polygon-mainnet": getChainConfig("mainnet"),
    "polygon-mumbai": getChainConfig("mumbai"),
  },
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.13",
    settings: {
      metadata: {
        // Not including the metadata hash
        // https://github.com/paulrberg/solidity-template/issues/31
        bytecodeHash: "none",
      },
      // Disable the optimizer when debugging
      // https://hardhat.org/hardhat-network/#solidity-optimizer-support
      optimizer: {
        enabled: true,
        runs: 800,
      },
    },
  },
  typechain: {
    outDir: "src/types",
    target: "ethers-v5",
  },
};

export default config;
