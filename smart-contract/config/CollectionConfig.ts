import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'DegenandFrens',
  tokenName: 'Degen & Frens',
  tokenSymbol: 'DAF',
  hiddenMetadataUri: 'ipfs://QmWGcMWkPA4ugkS4JGa3AWYZaaCbtKCYUhReasCmPBk1yn/1.json',
  maxSupply: 5555,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 50,
  },
  preSale: {
    price: 0.05,
    maxMintAmountPerTx: 50,
  },
  publicSale: {
    price: 0.06,
    maxMintAmountPerTx: 50,
  },
  contractAddress: '0xC6a697f58dC0608Ce9af6d601bbD4B72f5Ec686e',
  marketplaceIdentifier: 'Degen & Frens',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
