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
  contractName: 'Gaiaverse',
  tokenName: 'Gaiaverse',
  tokenSymbol: 'GAIA',
  hiddenMetadataUri: 'ipfs://QmWGcMWkPA4ugkS4JGa3AWYZaaCbtKCYUhReasCmPBk1yn/5555.json',
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
  contractAddress: '0x182a85a9c19738c4Cef421030C9f5169F1445551',
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
